import { getAPIResourceWithAuth } from '@plone/volto/helpers';

const HEADERS = ['content-type', 'content-disposition', 'cache-control'];

function imageMiddleware(req, res, next) {
  let sharp;
  if (__SERVER__) {
    sharp = require('sharp');
  }
  const { errorHandler } = req.app.locals;
  getAPIResourceWithAuth(req)
    .then((resource) => {
      // Just forward the headers that we need
      HEADERS.forEach((header) => {
        if (resource.headers[header]) {
          res.set(header, resource.headers[header]);
        }
      });

      const pipeline = sharp(resource.body);

      const toFormat = 'webp'; // heif // avif // jpeg
      const quality = 80;
      pipeline.toFormat(toFormat, {
        quality,
      });
      pipeline.toBuffer((err, data, info) => {
        res.setHeader('Content-Type', `image/${info.format}`);
        res.status(200).send(data);
      });
    }, errorHandler)
    .catch(errorHandler);
}

export default function () {
  if (typeof __SERVER__ !== 'undefined' && __SERVER__) {
    const express = require('express');
    const middleware = express.Router();

    middleware.all(['**/@@images/*', '**/@@download/*'], imageMiddleware);
    middleware.id = 'staticResourcesProcessor';
    return middleware;
  }
}

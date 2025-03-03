# Change Log

## 16.0.1 (unreleased)

### Breaking

### Feature

- Allow custom style wrapper classnames via fieldname suffixes. Added `config.settings.styleClassNameConverters` to register new suffix converters @tiberiuichim
- Support for drilled down current state and updater function from schema in `ObjectListWidget`. This allows to sync the current object selected from the UI and the block settings and viceversa @sneridagh

### Bugfix

### Internal

### Documentation

## 16.0.0 (2022-11-22)

### Breaking

- Deprecate NodeJS 12 since it's out of LTS since April 30, 2022 @sneridagh
- Move all cypress actions to the main `Makefile`, providing better meaningful names. Remove them from `package.json` script section. @sneridagh
- Remove `div` as default if `as` prop from `RenderBlocks`. Now the default is a `React.Fragment` instead. This could lead to CSS inconsistencies if taken this div into account, specially if used in custom add-ons without. In order to avoid them, set the `as` property always in your add-ons. @sneridagh
- Removed `date-fns` from dependencies, this was in the build because `Cypress` depended on it. After the `Cypress` upgrade it no longer depends on it. If your project still depends on it, add it as a dependency of your project. @sneridagh
- Removed all usage of `date-fns` from core. @sneridagh
- Rename `src/components/manage/Widgets/ColorPicker.jsx` component to `src/components/manage/Widgets/ColorPickerWidget.jsx` @sneridagh
- Remove the style wrapper around the `<Block />` component in Edit mode, moved to the main edit wrapper @sneridagh
- New `cloneDeepSchema` helper @sneridagh
- Action `listUsers`to be called with Object. Distinguish between search for id or search for fullname, email, username @ksuess
- Integrate volto-state add-on. @tiberiuichim @razvanmiu @eea
- Staticize Poppins font to be compliant with EU privacy. Import from GoogleFont is disabled in site.variables. @giuliaghisini
- Remove the `callout` button (the one with the megaphone icon) from the slate toolbar since it has the same styling as `blockquote`. If you need it anyway, you can bring it back in your addon. @sneridagh
- Using volto-slate Headline / Subheadline buttons strips all elements in the selection @tiberiuichim
- Use `Cypress` 10.3.0 (migrate from 9.x.x). Cypress 10 has some interesting goodies, being the native support of Apple Silicon Computers the main of it. See https://docs.voltocms.com/upgrade-guide/ for more information. @sneridagh
- The complete configuration registry is passed to the add-ons and the project configuration pipeline @sneridagh
- Refactor the component registry API in the configuration registry @sneridagh @tiberiuichim
- change password-reset url to be consistent with Plone configuration @erral
- Simplify over the existing Component Registry API. The `component` key has been flattened for simplification and now it's mapped directly to the `component` argument of `registerComponent`. @sneridagh
- This is an UI/UX breaking change. It changes the back button in folder contents from using a cross icon to using a back icon. The rationale behind is because the cross evoque "cancel" when what happens is a change of view. It's also consistent with both PastanagaUI and QuantaUI style guide. @robgietema
- Main workflow change menu changed from Pastanaga UI simplification to classic Plone implementation. @sneridagh
- Move Layout constants to `config.views.layoutViewsNamesMapping`. Complete the list. i18n the list. Improve Display component. @sneridagh
- `react-window` no longer a Volto dependency @sneridagh
- Upgrade to Razzle 4 @davisagli
- Jest downgraded from 27 to 26 @davisagli
- Sentry integration is now lazy-loaded. The `sentryOptions` key from the `settings` registry becomes a callable that passes resolved sentry libraries. @tiberiuichim
- Change history route name to `historyview` (same as classic) in order to allow content to have 'history' as `id` @danielamormocea
- The listing block icon has been improved to avoid confusions with the normal text list @sneridagh
- Remove the means to enable the StyleWrapper in favor of defining it through the block schema. @sneridagh
- Moved all sentry-related code from Volto to the `@plone-collective/volto-sentry` package. @tiberiuichim
- The listing block icon has been improved to avoid confusion with the normal text list. @sneridagh
- Restrict css selector for error message (volto-slate) #3838 @mamico
- Upgrade `husky` to latest version @sneridagh
- Enable the use of yarn 3 in the build by default @sneridagh
- The `ContentsBreadcrumbs` component now renders the whole language name of the language root folder (if any) instead of just the `id` (before: `de`, now: `Deutsch`) @sneridagh

See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Feature

- added default placeholder for videos to embed them more lightly @giuliaghisini
- Added new Block Style Wrapper. This implementation is marked as **experimental** during Volto 16 alpha period. The components, API and the styling are subject to change **without issuing a breaking change**. You can start using it in your projects and add-ons, but taking this into account. See documentation for more information. @sneridagh
- Add default widget views for all type of fields and improve the DefaultView @ionlizarazu
- added configurable identifier field for password reset in config.js. @giuliaghisini
- Add `expandToBackendURL` helper @sneridagh
- added 'show total results' option in Search block configuration. @giuliaghisini
- Added viewableInBrowserObjects setting to use in alternative to downloadableObjects, if you want to view file in browser intstead downloading. @giuliaghisini
- Disable already chosen criteria in querystring widget @kreafox
- Added X-Forwarded-\* headers to superagent requests. @mamico
- Updated Brazilian Portuguese translation @ericof
- Forward `HTTP Range` headers to the backend. @mamico
- Add default value to color picker, if `default` is present in the widget schema. @sneridagh
- Inject the classnames of the StyleWrapper into the main edit wrapper (it was wrapping directly the Edit component before). This way, the flexibility is bigger and you can act upon the whole edit container and artifacts (handlers, etc) @sneridagh
- Refactor image block: make it schema extensible @nileshgulia1 @sneridagh
- Add control panel via config.settings @ksuess https://github.com/plone/volto/issues/3426
- Add noindex metadata tag @steffenri
- Adding Schema for Maps Block in Sidebar @iRohitSingh
- Add a Pluggable to the sharing page @JeffersonBledsoe #3372
- Add listing variation schemaEnhancer to the search block schema @ionlizarazu
- Use the local blocksConfig for extensions, fallback to the config object one. This allows to override local blocks config in nested blocks (blocks in a block, eg. accordion, grid, row) @sneridagh
- Use type info instead of id type as icon title in the folder contents. @mamico
- Remove transifex configuration for Volto translations @erral
- Add missing support for inner `blocksConfig` in block extensions resolutions @sneridagh
- Add schema to video block sidebar @iRohitSingh @danielamormocea
- Add user group membership control panel @ksuess
- Action `listUsers`: Support search for fullname, email, username. @ksuess
- Added the `Undo controlpanel` to the controlpanels which can be used to undo transactions. @MdSahil-oss
- Send extra data coming from listing block schemaEnhancer from searchBlock to the listing variation @ionlizarazu
- support for many_users and many_groups flag in user controlpanel and group controlpanel @nileshgulia1
- Show the content type of the content object you are adding/editing in the sidebar @robgietema
- Remove soft hyphens from the title tag @davisagli
- handle 'no connection' available error (408 error). @giuliaghisini
- Add support for OpenStreet Maps in Maps block @sneridagh
- Make `internalApiPath` client aware, since there are some corner cases when the client needs to know it to properly handle API server URLs @sneridagh
- Add initialPath support to ObjectBrowser widget @robgietema
- Added placeholder param to widget, to change default placeholder @giuliaghisini
- Add clear formatting button to slate @robgietema
- Support for getting `selectableTypes` and `maximumSelectionSize` from `widgetProps` @sneridagh
- Added placeholder param to widget, to change default placeholder @giuliaghisini
- Add a headline (`headline` field) to the listing block schema by default @sneridagh
- Add scroll into view setting to slate @robgietema
- Use absolute dates instead of "x hours ago" in History view @steffenri
- Complete eu translation @erral
- Complete es translation. @erral
- Added new components `Aliases` for aliases control in Volto. Alias management in both controlpanel and object view. @andreiggr @avoinea
- Added resetOnCancel functionality in Form component @MdSahil-oss
- volto-slate: introduce style-menu @nileshgulia1
- Show result of the addon install/uninstall/upgrade actions @erral
- Working copy actions now render errors if they fail @pnicolli
- lazyloading of rrule lib. @giuliaghisini
- Complete eu translation. @erral
- Complete spanish translation @erral
- Added an option for users to set their own password through a confirmation email in the Add Users modal within the Users control panel. @JeffersonBledsoe #3710
- Accept a `querystring` object in `apiExpanders` config object settings @sneridagh
- Add a dynamic user form based in @userschema endpoint @erral @nileshgulia1
- Send missing variation data to the listing variation @ionlizarazu
- Logout action in personal tools points to the same pathname, now it logout in place, not in the root. @sneridagh
- Object browser: image search should only show images @reebalazs
- Updated spanish translation @macagua
- Add Dutch translation @spereverde
- Added link integrity potential breakage warning message when deleting a referenced page @danielamormocea
- Added new components & interfaces for content-rules `Rules` control in Volto. Rules management in both controlpanel and object view. @andreiggr
- Updated Spanish translation @macagua
- Introduce `TextLineEdit` component @sneridagh
- Add a popup tooltip for tokenized options in Select widget values @sneridagh
- Add `image-narrow` svg icon useful for align widget actions @ichim-david
- Use `View comments` and `Reply to item` permissions in `Comments` component. @razvanMiu
- Added portrait middleware adapter. @instification
- Allow dumping the addon dependency graph to a .dot file. Start Volto with `DEBUG_ADDONS_LOADER=true yarn start`, `addon-dependency-graph.dot` will be created in your project folder. @tiberiuichim
- Add clear button in search field of Folder content view @iFlameing
- consume site_actions from restapi @nileshgulia1
- Updated Spanish translation @macagua
- Japanese translation updated @terapyon
- Improve the `AlignWidget`, add `narrow` fix default support @sneridagh
- Add support for loading core add-ons from the `packages` folder defined in Volto's `package.json` @sneridagh
- Implement the Upgrade Control Panel @ericof
- Allow addons to customize modules from the project root, via the `@root` namespace and folder @tiberiuichim
- Brazilian Portuguese translation updated @ericof
- Improvement of the `ContentsBreadcrumbs` component, add child `ContentsBreadcrumbsRootItem` and `ContentsBreadcrumbsHomeItem` for easy customization of these single elements in projects @sneridagh
- Add german translation for group membership panel. @ksuess
- Fix general german translations: Address user polite. Correct 'listing template' to 'listing variant'. Add missing translations. @ksuess
- Allow passing ariaHidden, id and style to an Icon's SVG @JeffersonBledsoe #3908
- All Fields now understand the `default` prop as a fallback value in case their data value is missing. As a convenience, the `defaultValue` is also used as a fallback, but this shouldn't proliferate. @tiberiuichim
- There is an experimental setting to move the button for adding a new block to show below any selected block, instead of only on the left of empty text blocks. Set `config.experimental.addBlockButton.enabled = true` to enable it. @davisagli
- Allow custom style wrapper classnames via fieldname suffixes. Added `config.settings.styleClassNameConverters` to register new suffix converters @tiberiuichim
- Support for drilled down current state and updater function from schema in `ObjectListWidget`. This allows to sync the current object selected from the UI and the block settings and viceversa @sneridagh

### Bugfix

- Fix Search page visit crashes /contents view @dobri1408
- Fix sidebar full size bottom opacity on edit page when sidebar is collapsed @ichim-david
- Fix toolbar bottom opacity on edit page when toolbar is collapsed @ichim-david
- Fix content view regression, height issue @danielamormocea
- Fixed secure cookie option. @giuliaghisini
- Changed addon order in addon controlpanel to mimic Classic UI @erral
- Fixed error when loading content in a language for which a Volto translation is not available. @davisagli
- Fix for clipped dropdown menus when the table has few or no records in Contents view @mihaislobozeanu
- fixed view video list from youtube in Video block. @giuliaghisini
- Fixed ICS URL in event view in seamless mode @sneridagh
- Fix `withStylingSchemaEnhancer` enhancer mechanism @sneridagh
- Add correct query parameters to the redirect @robgietema
- Fix RenderBlocks: path @ksuess
- Fix field id creation in dexterity control panel to have slugified id @erral
- Changed to get intl.locale always from state @ionlizarazu
- Fix regression, compound lang names (eg. `pt-BR`) no longer working @sneridagh
- fix TokenWidget choices when editing a recently created content. @giuliaghisini
- Fix color picker defaults implementation #2 @sneridagh
- Enable default color in `backgroundColor` default StyleWrapper field which wasn't sync with the default value setting @sneridagh
- Fix Block style wrapper: Cannot read properties of undefined (reading 'toString') @avoinea #3410
- fix schema when content contains lock informations. @giuliaghisini
- Don't render junk when no facets are added to the search block @tiberiuichim
- Fix visibility of toolbar workflow dropdown for more states as fitting in .toolbar-content. @ksuess
- Fix the video block for anonymous user @iFlameing
- Use `cloneDeepSchema` helper for schema cloning operations, this fixes the error thrown in the use case of having JSX in the schema while cloning schema operations @sneridagh
- Fix CSS bundling in production mode to be consistent with the current policy in the client bundle. Right now the order of the CSS resources matches this chain: Loading of `import my-less.less` in add-ons (following the add-on order) -> Loading of the Semantic UI defaults -> Loading of the local theme (either project or add-on based). We are forcing now the bundling of all the CSS in one chunk, so it behaves the same than in dev mode (using the style-loader). @sneridagh
- Fixed the description field not being included in the navigation action/ reducer @JeffersonBledsoe #3454
- Fixed a11y of Maps block (#3467) @iRohitSingh
- Prevent the `defaultView` to show anything if the content is not loaded yet. This fixes showing the non-blocks enabled view for a fraction of a second before showing the blocks-enabled one once the content is loaded. @sneridagh
- Fix typo in de locale @wolbernd
- Add some more messages to be able to translate them @erral
- Fix typo in de locale @wolbernd
- [generator] Improvements to the addon generator: Now it wires up the addon automatically for immediate local development @sneridagh
- complete eu translation @erral
- complete es translation @erral
- [generator] Add .editorconfig and .prettierignore to generated projects and addons. @ericof
- Make `crypto-random-string` a direct dep, fixing a hidden error since some updated dependency was requiring it directly but not anymore. @sneridagh
- Fix edge cases in Cypress flaky tests when the Edit component was loaded without loading the type schema. @sneridagh & @davisagli
- Fix edge cases in Cypress flaky tests when the Edit component was loaded for the wrong content path. @davisagli
- complete pt_BR translation @ericof
- Fix action `listUsers`. Provide default. @ksuess
- Provide the correct id to the blocks wrapped by StyleWrapper. @razvanMiu
- Remove console deprecation notice for 'host' property usage coming from Express @sneridagh
- Make Search page title translatable @erral
- Changed storeProtectLoadUtils location from src/storeProtectLoadUtils to src/middleware/storeProtectLoadUtils @MdSahil-oss
- Fix ArrayWidget choices when editing a recently created content item. @davisagli
- Fix content loading in `DefaultView` infinite loop if a listing block with no query is present. @sneridagh
- Fix login form redirect when it was loaded with a trailing slash @davisagli
- Better de translation for Site Setup @davisagli
- Fix overlapping for long words in Control Panel titles (added word-wrapping) @sneridagh
- Fix sitemap.xml.gz @robgietema
- Fix Image gallery listing block variation only gets 25 if no query is set @sneridagh
- Fix array widget translation @robgietema
- Fix: TTW DX Layout disables IBlocks behavior and with it all the indexers and transformers @avoinea
- Fix: Slate Editor: can not delete bullet point after adding it by typing "- " #3597 @dobri1408
- Fix literal for the listing block edit mode message telling if the results are contained items (no query) or query results ones (query present) @sneridagh
- Fix grouping of the "users and groups" control panels (plone-users category) @sneridagh
- Improve `Display` and `Workflow` widgets in `More` menu. Fix alignments. @sneridagh
- Fixed searching in the sharing page not showing any results @JeffersonBledsoe #3579
- Fix types menu on mobile for many types. Specific menuStyle for 'more' menu. @ksuess
- Fix types menu on desktop when menu overflows the viewport, adding scroll to it @sneridagh
- Fix "cannot have two html5 backends at the same time" error @davisagli
- Reset filter in folder contents when navigating @robgietema
- Fix bug showing incorrect history after a revert action @robgietema
- Fix and edge case, in case a `RelationList` has no default, on empty fields, after the object has been created, it saves an empty (None/null) value. Make sure that internally, if that's the case, it's an empty array always. @sneridagh
- Fix workflow and display select in toolbar in case that the option spans several lines @sneridagh
- Fix Press Enter in some blocks does not focus on the text block below #3647 @dobri1408
- Add `matchAllRoutes` to AsyncConnect so that it matches all configured `asyncPropsExtenders` @tiberiuichim
- Fix acceptence test groups controlpanel @ksuess
- Fix the typo in change workflow status dialog in "de" @iRohitSingh
- Fix selection error when pressing backspace @robgietema
- Fix sidebarTab in Toc Block @iRohitSingh
- Fix virtualization (windowing) when displaying options with long titles for select widgets. (The virtualization happen when the number of options is greater than 25). Add dynamic height aware options using `react-virtualized`. @sneridagh
- Fix email validation to ensure all addresses are correctly validated @instification
- Fix number widget when the value is 0 @iRohitSingh
- Fix the typo in change workflow status dialog in "de" @iRohitSingh
- Show unauthorized message when accessing the diff view without permission @robgietema
- Fix i18n in title of Aliases control panel @sneridagh
- The styling schema is now applied before the block variations schema enhancers, to allow those enhancers a chance to tweak the styling schema @tiberiuichim
- Fix avatar URL in `PersonalTools`. Now works with the new `portrait` endpoint @sneridagh
- Fix `listing` block in SSR, now that it is fully variations aware and the configuration is passed to the SSR `querystring` action. @sneridagh
- Remove wrapping ul or ol when deselecting list style @robgietema
- Fix call to `@plone/scripts/i18n` (now a commonJS module) @sneridagh
- Concatenate multilingualRoutes and externalRoutes (if available) to defaultRoutes @erral #3653
- Fixed the `description` field not appearing in control panel fieldsets @JeffersonBledsoe #3696
- Fixed "more" always show root contents @MdSahil-oss #3365
- Add missing `--noninteractive` in the `build` script in package.json @sneridagh
- Fix replace `<a>` anchor element with the `UniversalLink` component in `DefaultTemplate.jsx` @Dnouv
- Extend Id widget validation rules to accept a dot "." @reebalazs
- Fix history page error for unauthenticated @reebalazs
- Fix unlock after changing the id and saving a page @reebalazs
- Group routes so React does not see them as a different Route and triggers a full remount. This is specially important in `Contents` @sneridagh
- Add default to `null` for `token` prop in `Navigation` component. This prevents the component to shoot an extra call when the logout happens @sneridagh
- Fix a double slash present in the `PersonalTools` component @sneridagh
- Fix UniversalLink storybook @tiberiuichim
- Fix logout to stay on the same page where the user was @reebalazs
- Change sentry chunk name to avoid ad blockers. Only load sentry if env vars exist @tiberiuichim
- SearchTags uses invalid vocabulary API @silviubogan
- Fix autocomplete widget with an empty search result @reebalazs
- Make sure that the store is reset on history reducer `PENDING` state @sneridagh
- Prefer views assigned explicitly with `layout` over views based on the `@type` @iRohitSingh
- Fix `schemaEnhancer` not being applied if nested `blocksConfig` is present @sneridagh
- Ensure the view component is always replaced after navigating to a different page. @davisagli
- Be more robust towards invalid block configuration @reebalazs
- Remove slate's builtin undo support, as it conflicts with Volto's undo manager. This fixes crashes when undoing in text blocks and slate's undo stack is empty and "crosses" into Volto's undo stack. This is a temporary workaround, ideally the two undo managers would be delimited so they each work together. @tiberiuichim
- Fix highlighting of selection when the Slate editor is not DOM-focused. @tiberiuichim
- Improve the algorithm that calculates the position of the Slate Toolbar @tiberiuichim
- The `_unwrapElement` of the volto-slate `ElementEditor` will return an updated range (selection) of the unwrapped element. @tiberiuichim
- Replace the main client entry point in `start-client.jsx` anonymous function for a named one. @sneridagh
- Fix `currentPath` option for `openObjectBrowser`. @iFlameing
- Fix updating the listing block when the variation is changed while editing @tiberiuichim
- fix(warning): StyleMenu dropdown item to use data-attr instead of custom @nileshgulia1
- Added --canary flag in plone/install.sh. @MdSahil-oss
- Fix condition in `applySchemaDefaults` @tiberiuichim @sneridagh
- Load core add-ons configuration as any other add-on. @sneridagh
- Fix `FormValidation` error object, use field `id` instead of field `title` @sneridagh
- Revert #2828 PR change of the default `showSearchButton` Search block behavior (see [#3883](https://github.com/plone/volto/issues/3883)) @sneridagh
- Fix `package.json` `postinstall` in core @sneridagh
- Hide control panel settings that are not relevant to Volto @danalvrz
- Hide not relevant for Volto control panels from site setup, further refine not used inner settings for site control panel @sneridagh
- Fix ObjectWidget handling of `default` values coming from schemas. @tiberiuichim
- Overhaul how block defaults are computed. See https://github.com/plone/volto/pull/3925 for more details @tiberiuichim
- Fix image tag for Plone 5.2.x, use 5.2.9 for now @sneridagh
- Cover an additional edge case for defaults @tiberiuichim
- Fix issue when using list markdown when list is already active (volto-slate) @robgietema
- Fix translation spelling of toggle  @iFlameing
- Fix keyboard accessibility issue of Clear button in Folder content view @iFlameing

### Internal

- Improve Cypress integration, using Cypress official Github Action. Improve some flaky tests that showed up, and were known as problematic. Refactor and rename all the Github actions giving them meaningful names, and group them by type. Enable Cypress Dashboard for Volto. @sneridagh
- Stop using `xmlrpc` library for issuing the setup/teardown in core, use a `cy.request` instead. @sneridagh
- Added Cypress environment variables for adjusting the backend URL of commands @JeffersonBledsoe #3271
- Reintroduce Plone 6 acceptance tests using the latests `plone.app.robotframework` 2.0.0a6 specific Volto fixture. @datakurre @ericof @sneridagh
- Upgrade all tests to use `plone.app.robotframework` 2.0.0a6 @sneridagh
- Upgrade Sentry to latest version because of [#3346](https://github.com/plone/volto/issues/3346) @sneridagh
- Update `Cypress` to version 9.6.1 @sneridagh
- Missing change from the last breaking change (Remove the style wrapper around the `<Block />` component in Edit mode, moved to the main edit wrapper). Now, really move it to the main edit wrapper @sneridagh
- Fix warning because missing key in `VersionOverview` component @sneridagh
- Mock all loadable libraries. @mamico
- Update json-schema including transitive dependencies @davisagli
- Update release-it @davisagli
- Deduplicate dependencies using yarn-deduplicate @davisagli
- Fix `defaultBlockType` entry in default config, set it to slate. @sneridagh
- Allow passing `allowedChildren` option to the BlockButton, to strip elements in headlines @tiberiuichim
- Upgrade to latest `@plone/scripts` @sneridagh
- Update browserlist definitions @sneridagh
- Fix propTypes for Pagination component @davisagli
- Test against Plone 5.2.9 and 6.0.0b1 @davisagli
- Use latest 1.6.0 `@plone/scripts` @sneridagh
- Add classname of variation in edit mode @iFlameing
- Use component registry for default image, fallback to the local import @sneridagh
- Remove Razzle as direct dependency from @plone/scripts @sneridagh
- Fix storybook build for Razzle 4 @sneridagh
- Update `@plone/scripts` to 2.1.1 @sneridagh
- Run yarn deduplicate on dependencies. @davisagli
- Comment out flaky test for now regarding many users/groups @sneridagh
- Add reverse proxy conf with `traefik` to demo compose file @sneridagh
- More disable flaky test regarding many users/groups @sneridagh
- Remove no longer present option in cypress github action, by default, headless is true @sneridagh
- Add proper webserver with reverse proxy with seamless mode @sneridagh
- Update to Plone 6 beta3 @sneridagh
- Upgrade Cypress to latest @sneridagh
- Upgrade dependency rrule (optional dependency luxon removed) @ksuess
- Set `.nvmrc` to not use `lts/*` but a specific one `lts/gallium`
- Update to @plone/scripts 2.1.2 @sneridagh
- Remove all the useless security bits from blocks configuration definitions @sneridagh
- Add translation for `pending` state @iFlameing
- Add `composeSchema`, a helper to compose multiple schemaEnhancers @tiberiuichim
- Upgrade to `plone.voltoa14` @sneridagh
- Upgrade dependencies to latest released slate libraries. Make sure to pass down `ref` to rendered slate elements, as ref is now a function @tiberiuichim
- Add `editableProps` prop to the `SlateEditor` component, to pass down props to the base Slate `Editable` component. @tiberiuichim
- Clean, re-enable block-slate-format-link Cypress tests @tiberiuichim
- Rewrite some anonymous functions as named functions, to remove warning about Hot Reloading. @tiberiuichim
- Add translation for objectlist `Add` text @iFlameing
- Add translations for facet widget value @iFlameing
- Ignore `.tool-versions` file
- Minor updates to dependencies
- Update Cypress 11 @sneridagh
- Update to Plone 6 RC1 @sneridagh

### Documentation

- Move Cypress documentation from `README.md` to the docs. Improve the docs with the new `Makefile` commands.
- Improve English grammar and syntax in backend docs. @stevepiercy
- Fix JSX syntax highlighting. Remove duplicate heading. @stevepiercy
- fix make task `docs-linkcheckbroken` if grep has exit code 1 (no lines found)
- Updated simple.md @MdSahil-oss
- Fix indentation in nginx configuration in simple.md @stevepiercy
- Remove sphinx_sitemap configuration because Volto's docs are now imported into the main docs, making this setting unnecessary. @stevepiercy
- Set the ogp_site_url to main docs, instead of training. @stevepiercy
- `aria-*` attributes are now parsed correctly by jsx-lexer 2.0. @stevepiercy
- volto-slate documentation @nileshgulia1
- Fix redirect on YouTube, broken link after merge and deleted branch. @stevepiercy
- Add upgrade guide documentation for dealing with `volto-slate` upgrades for Volto 16 alpha 15 onwards. @sneridagh
- Minor clean up of volto-slate upgrade guide. @stevepiercy
- Rework documentation on how to write a Slate plugin @ksuess
- Documentation of the new component registry API @sneridagh
- Fix copy / paste text in list @robgietema
- Make links relative to `_static` so that `plone/documentation` can pull them in, and fix broken link. @stevepiercy
- Align `html_static_path` with `plone/documentation` and image path so that images render when docs build in both repos. @stevepiercy
- Undo html_static_path configuration in `plone/documentation`, and restore image and its referenced path in `plone/volto`. @stevepiercy
- Clean up "design principles" and "contributing"
- Bring back "Guidelines for Contributing"
- Fix Sphinx warning `WARNING: glossary terms must not be separated by empty lines` by closing unclosed glossary directive's triple backticks. @stevepiercy
- Fix broken links to nvm releases. @stevepiercy
- Ignore redirect that requires login to GitHub. @stevepiercy
- Added controls for the `actions` property of the `AlignWidget` storybook @JeffersonBledsoe #3671
- Generic Setup -> `GenericSetup`. @stevepiercy
- Upgrade to Plone 6 beta 2 @sneridagh
- Flip testing matrix for acceptance tests, make Plone 6 principal subject, Plone 5 as secondary @sneridagh
- Update README with latest versions, point to Plone 6 as recommended default @sneridagh
- Trigger a new deploy core Plone documentation when Volto documentation is updated @esteele
- Update supported Python versions. @stevepiercy
- Add NodeJS 18 (LTS) usage notice @sneridagh
- Fix Netlify build @sneridagh
- Fix grammar in Theming Strategy. Fixes #954. @stevepiercy
- Fix wording in About Semantic UI. Fixes #953. @stevepiercy
- Add missing pieces of the upgrade to use yarn 3 for projects @sneridagh
- Complete docs about the yarn 3 upgrade @sneridagh
- Add additional components to storybook @danalvrz
- Add `@plone/scripts` as a mandatory devDependency for projects to the upgrade guide @sneridagh
- Document `Sentry` integration move from Volto core to add-on `@plone-collective/volto-sentry` in configuration, upgrade and deployment. @ksuess
- Remove `sentryOptions` from settings reference. Clean up `deploying/sentry.md`. @stevepiercy
- Tidy up `upgrade-guide/index.md`. @stevepiercy
- Fix some MyST syntax and English grammar. @stevepiercy

## 16.0.0-rc.3 (2022-11-22)

### Bugfix

- Fix keyboard accessibility issue of Clear button in Folder content view @iFlameing
- Fix issue when using list markdown when list is already active (volto-slate) @robgietema
- Fix translation spelling of toggle  @iFlameing

### Documentation

- Document experimental features @davisagli

## 16.0.0-rc.2 (2022-11-20)

### Bugfix

- Overhaul how block defaults are computed. See https://github.com/plone/volto/pull/3925 for more details @tiberiuichim
- Cover an additional edge case for defaults @tiberiuichim

### Internal

- Update to Plone 6 RC1 @sneridagh

### Documentation

- Document `Sentry` integration move from Volto core to add-on `@plone-collective/volto-sentry` in configuration, upgrade and deployment. @ksuess
- Remove `sentryOptions` from settings reference. Clean up `deploying/sentry.md`. @stevepiercy
- Tidy up `upgrade-guide/index.md`. @stevepiercy
- Fix some MyST syntax and English grammar. @stevepiercy

## 16.0.0-rc.1 (2022-11-18)

### Feature

- Releasing RC1 @sneridagh

## 16.0.0-alpha.53 (2022-11-18)

### Feature

- There is an experimental setting to move the button for adding a new block to show below any selected block, instead of only on the left of empty text blocks. Set `config.experimental.addBlockButton.enabled = true` to enable it. @davisagli

## 16.0.0-alpha.52 (2022-11-18)

### Bugfix

- Revert "Configure Jest's moduleNameMapper with AddonConfigurationRegistry" (#3913) due to a regression in projects @sneridagh

## 16.0.0-alpha.51 (2022-11-18)

### Breaking

- The `ContentsBreadcrumbs` component now renders the whole language name of the language root folder (if any) instead of just the `id` (before: `de`, now: `Deutsch`) @sneridagh

### Feature

- Improvement of the `ContentsBreadcrumbs` component, add child `ContentsBreadcrumbsRootItem` and `ContentsBreadcrumbsHomeItem` for easy customization of these single elements in projects @sneridagh
- Add german translation for group membership panel. @ksuess
- Fix general german translations: Address user polite. Correct 'listing template' to 'listing variant'. Add missing translations. @ksuess
- Allow passing ariaHidden, id and style to an Icon's SVG @JeffersonBledsoe #3908
- All Fields now understand the `default` prop as a fallback value in case their data value is missing. As a convenience, the `defaultValue` is also used as a fallback, but this shouldn't proliferate. @tiberiuichim

### Bugfix

- Hide control panel settings that are not relevant to Volto @danalvrz
- Hide not relevant for Volto control panels from site setup, further refine not used inner settings for site control panel @sneridagh
- Fix ObjectWidget handling of `default` values coming from schemas. @tiberiuichim

### Internal

- Ignore `.tool-versions` file
- Minor updates to dependencies
- Update Cypress 11 @sneridagh

### Documentation

- Add `@plone/scripts` as a mandatory devDependency for projects to the upgrade guide @sneridagh

## 16.0.0-alpha.50 (2022-11-15)

### Feature

- Brazilian Portuguese translation updated @ericof

### Bugfix

- Fix condition in `applySchemaDefaults` @tiberiuichim @sneridagh
- Load core add-ons configuration as any other add-on. @sneridagh
- Fix `FormValidation` error object, use field `id` instead of field `title` @sneridagh
- Revert #2828 PR change of the default `showSearchButton` Search block behavior (see [#3883](https://github.com/plone/volto/issues/3883)) @sneridagh
- Fix `package.json` `postinstall` in core @sneridagh

### Documentation

- Add missing pieces of the upgrade to use yarn 3 for projects @sneridagh
- Complete docs about the yarn 3 upgrade @sneridagh
- Add additional components to storybook @danalvrz

## 16.0.0-alpha.49 (2022-11-11)

### Breaking

- Restrict css selector for error message (volto-slate) #3838 @mamico
- Upgrade `husky` to latest version @sneridagh
- Enable the use of yarn 3 in the build by default @sneridagh

See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Feature

- Japanese translation updated @terapyon
- Improve the `AlignWidget`, add `narrow` fix default support @sneridagh
- Add support for loading core add-ons from the `packages` folder defined in Volto's `package.json` @sneridagh
- Implement the Upgrade Control Panel @ericof
- Allow addons to customize modules from the project root, via the `@root` namespace and folder @tiberiuichim

### Bugfix

- Be more robust towards invalid block configuration @reebalazs
- Remove slate's builtin undo support, as it conflicts with Volto's undo manager. This fixes crashes when undoing in text blocks and slate's undo stack is empty and "crosses" into Volto's undo stack. This is a temporary workaround, ideally the two undo managers would be delimited so they each work together. @tiberiuichim
- Fix highlighting of selection when the Slate editor is not DOM-focused. @tiberiuichim
- Improve the algorithm that calculates the position of the Slate Toolbar @tiberiuichim
- The `_unwrapElement` of the volto-slate `ElementEditor` will return an updated range (selection) of the unwrapped element. @tiberiuichim
- Replace the main client entry point in `start-client.jsx` anonymous function for a named one. @sneridagh
- Fix `currentPath` option for `openObjectBrowser`. @iFlameing
- Fix updating the listing block when the variation is changed while editing @tiberiuichim
- fix(warning): StyleMenu dropdown item to use data-attr instead of custom @nileshgulia1
- Added --canary flag in plone/install.sh. @MdSahil-oss

### Internal

- Upgrade dependencies to latest released slate libraries. Make sure to pass down `ref` to rendered slate elements, as ref is now a function @tiberiuichim
- Add `editableProps` prop to the `SlateEditor` component, to pass down props to the base Slate `Editable` component. @tiberiuichim
- Clean, re-enable block-slate-format-link Cypress tests @tiberiuichim
- Rewrite some anonymous functions as named functions, to remove warning about Hot Reloading. @tiberiuichim
- Add translation for objectlist `Add` text @iFlameing
- Add translations for facet widget value @iFlameing

### Documentation

## 16.0.0-alpha.48 (2022-11-03)

### Bugfix

- Ensure the view component is always replaced after navigating to a different page. @davisagli

## 16.0.0-alpha.47 (2022-11-02)

### Feature

- Add clear button in search field of Folder content view @iFlameing
- consume site_actions from restapi @nileshgulia1
- Updated Spanish translation @macagua

### Bugfix

- Fix `schemaEnhancer` not being applied if nested `blocksConfig` is present @sneridagh

### Internal

- Add translation for `pending` state @iFlameing
- Add `composeSchema`, a helper to compose multiple schemaEnhancers @tiberiuichim
- Upgrade to `plone.voltoa14` @sneridagh

### Documentation

- Fix grammar in Theming Strategy. Fixes #954. @stevepiercy
- Fix wording in About Semantic UI. Fixes #953. @stevepiercy

## 16.0.0-alpha.46 (2022-10-28)

### Breaking

- Remove the means to enable the StyleWrapper in favor of defining it through the block schema. @sneridagh
- Moved all sentry-related code from Volto to the `@plone-collective/volto-sentry` package. @tiberiuichim
- The listing block icon has been improved to avoid confusion with the normal text list. @sneridagh

See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Feature

- Add `image-narrow` svg icon useful for align widget actions @ichim-david
- Use `View comments` and `Reply to item` permissions in `Comments` component. @razvanMiu
- Added portrait middleware adapter. @instification
- Allow dumping the addon dependency graph to a .dot file. Start Volto with `DEBUG_ADDONS_LOADER=true yarn start`, `addon-dependency-graph.dot` will be created in your project folder. @tiberiuichim

### Bugfix

- Prefer views assigned explicitly with `layout` over views based on the `@type` @iRohitSingh

### Internal

- Set `.nvmrc` to not use `lts/*` but a specific one `lts/gallium`
- Update to @plone/scripts 2.1.2 @sneridagh
- Remove all the useless security bits from blocks configuration definitions @sneridagh

### Documentation

- Add NodeJS 18 (LTS) usage notice @sneridagh
- Fix Netlify build @sneridagh

## 16.0.0-alpha.45 (2022-10-24)

### Feature

- Added link integrity potential breakage warning message when deleting a referenced page @danielamormocea
- Added new components & interfaces for content-rules `Rules` control in Volto. Rules management in both controlpanel and object view. @andreiggr
- Updated Spanish translation @macagua
- Introduce `TextLineEdit` component @sneridagh
- Add a popup tooltip for tokenized options in Select widget values @sneridagh

### Bugfix

- Make sure that the store is reset on history reducer `PENDING` state @sneridagh

### Documentation

- Update supported Python versions. @stevepiercy

## 16.0.0-alpha.44 (2022-10-20)

### Breaking

- The listing block icon has been improved to avoid confusions with the normal text list @sneridagh

### Bugfix

- SearchTags uses invalid vocabulary API @silviubogan
- Fix autocomplete widget with an empty search result @reebalazs

## 16.0.0-alpha.43 (2022-10-17)

### Feature

- Object browser: image search should only show images @reebalazs
- Updated spanish translation @macagua
- Add Dutch translation @spereverde

### Bugfix

- Fix UniversalLink storybook @tiberiuichim
- Fix logout to stay on the same page where the user was @reebalazs
- Change sentry chunk name to avoid ad blockers. Only load sentry if env vars exist @tiberiuichim

### Internal

- Upgrade dependency rrule (optional dependency luxon removed) @ksuess

### Documentation

- Trigger a new deploy core Plone documentation when Volto documentation is updated @esteele

## 16.0.0-alpha.42 (2022-10-06)

### Breaking

- Change history route name to `historyview` (same as classic) in order to allow content to have 'history' as `id` @danielamormocea

### Feature

- Add a dynamic user form based in @userschema endpoint @erral @nileshgulia1
- Send missing variation data to the listing variation @ionlizarazu
- Logout action in personal tools points to the same pathname, now it logout in place, not in the root. @sneridagh

### Bugfix

- Fix history page error for unauthenticated @reebalazs
- Fix unlock after changing the id and saving a page @reebalazs
- Group routes so React does not see them as a different Route and triggers a full remount. This is specially important in `Contents` @sneridagh
- Add default to `null` for `token` prop in `Navigation` component. This prevents the component to shoot an extra call when the logout happens @sneridagh
- Fix a double slash present in the `PersonalTools` component @sneridagh

### Internal

- Update to Plone 6 beta3 @sneridagh
- Upgrade Cypress to latest @sneridagh

### Documentation

- Update README with latest versions, point to Plone 6 as recommended default @sneridagh

## 16.0.0-alpha.41 (2022-10-05)

### Breaking

- Sentry integration is now lazy-loaded. The `sentryOptions` key from the `settings` registry becomes a callable that passes resolved sentry libraries. @tiberiuichim

  See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Feature

- Complete eu translation. @erral
- Complete spanish translation @erral
- Added an option for users to set their own password through a confirmation email in the Add Users modal within the Users control panel. @JeffersonBledsoe #3710
- Accept a `querystring` object in `apiExpanders` config object settings @sneridagh

### Bugfix

- Extend Id widget validation rules to accept a dot "." @reebalazs

### Internal

- Comment out flaky test for now regarding many users/groups @sneridagh
- Add reverse proxy conf with `traefik` to demo compose file @sneridagh
- More disable flaky test regarding many users/groups @sneridagh
- Remove no longer present option in cypress github action, by default, headless is true @sneridagh
- Add proper webserver with reverse proxy with seamless mode @sneridagh

## 16.0.0-alpha.40 (2022-10-01)

### Feature

- Show result of the addon install/uninstall/upgrade actions @erral
- Working copy actions now render errors if they fail @pnicolli
- lazyloading of rrule lib. @giuliaghisini

### Bugfix

- Concatenate multilingualRoutes and externalRoutes (if available) to defaultRoutes @erral #3653
- Fixed the `description` field not appearing in control panel fieldsets @JeffersonBledsoe #3696
- Fixed "more" always show root contents @MdSahil-oss #3365
- Add missing `--noninteractive` in the `build` script in package.json @sneridagh
- Fix replace `<a>` anchor element with the `UniversalLink` component in `DefaultTemplate.jsx` @Dnouv

### Internal

- Run yarn deduplicate on dependencies. @davisagli

### Documentation

- Upgrade to Plone 6 beta 2 @sneridagh
- Flip testing matrix for acceptance tests, make Plone 6 principal subject, Plone 5 as secondary @sneridagh

## 16.0.0-alpha.39 (2022-09-28)

### Bugfix

- Fix call to `@plone/scripts/i18n` (now a commonJS module) @sneridagh

### Internal

- Fix storybook build for Razzle 4 @sneridagh
- Update `@plone/scripts` to 2.1.1 @sneridagh

## 16.0.0-alpha.38 (2022-09-27)

### Breaking

- Upgrade to Razzle 4 @davisagli
- Jest downgraded from 27 to 26 @davisagli

See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Internal

- Remove Razzle as direct dependency from @plone/scripts @sneridagh

## 16.0.0-alpha.37 (2022-09-27)

### Feature

- Added resetOnCancel functionality in Form component @MdSahil-oss
- volto-slate: introduce style-menu @nileshgulia1

### Bugfix

- Fix avatar URL in `PersonalTools`. Now works with the new `portrait` endpoint @sneridagh

- Fix `listing` block in SSR, now that it is fully variations aware and the configuration is passed to the SSR `querystring` action. @sneridagh
- Remove wrapping ul or ol when deselecting list style @robgietema

## 16.0.0-alpha.36 (2022-09-26)

### Bugfix

- Fix number widget when the value is 0 @iRohitSingh
- Fix the typo in change workflow status dialog in "de" @iRohitSingh
- Show unauthorized message when accessing the diff view without permission @robgietema
- Fix i18n in title of Aliases control panel @sneridagh
- The styling schema is now applied before the block variations schema enhancers, to allow those enhancers a chance to tweak the styling schema @tiberiuichim

### Documentation

- Added controls for the `actions` property of the `AlignWidget` storybook @JeffersonBledsoe #3671
- Generic Setup -> `GenericSetup`. @stevepiercy

## 16.0.0-alpha.35 (2022-09-21)

### Breaking

- `react-window` no longer a Volto dependency @sneridagh
  See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Bugfix

- Fix the typo in change workflow status dialog in "de" @iRohitSingh
- Fix selection error when pressing backspace @robgietema
- Fix sidebarTab in Toc Block @iRohitSingh
- Fix virtualization (windowing) when displaying options with long titles for select widgets. (The virtualization happen when the number of options is greater than 25). Add dynamic height aware options using `react-virtualized`. @sneridagh
- Fix email validation to ensure all addresses are correctly validated @instification

### Documentation

- Fix Sphinx warning `WARNING: glossary terms must not be separated by empty lines` by closing unclosed glossary directive's triple backticks. @stevepiercy
- Fix broken links to nvm releases. @stevepiercy
- Ignore redirect that requires login to GitHub. @stevepiercy

## 16.0.0-alpha.34 (2022-09-17)

### Breaking

### Feature

- Added new components `Aliases` for aliases control in Volto. Alias management in both controlpanel and object view. @andreiggr @avoinea

### Bugfix

- Fix Press Enter in some blocks does not focus on the text block below #3647 @dobri1408
- Add `matchAllRoutes` to AsyncConnect so that it matches all configured `asyncPropsExtenders` @tiberiuichim
- Fix acceptence test groups controlpanel @ksuess

### Internal

### Documentation

- Bring back "Guidelines for Contributing"

## 16.0.0-alpha.33 (2022-09-15)

### Breaking

- Move Layout constants to `config.views.layoutViewsNamesMapping`. Complete the list. i18n the list. Improve Display component. @sneridagh
  See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Feature

- Complete eu translation @erral
- Complete es translation. @erral

### Bugfix

- Fix and edge case, in case a `RelationList` has no default, on empty fields, after the object has been created, it saves an empty (None/null) value. Make sure that internally, if that's the case, it's an empty array always. @sneridagh
- Fix workflow and display select in toolbar in case that the option spans several lines @sneridagh

### Documentation

- Clean up "design principles" and "contributing"

## 16.0.0-alpha.32 (2022-09-14)

### Bugfix

- Fix "cannot have two html5 backends at the same time" error @davisagli
- Reset filter in folder contents when navigating @robgietema
- Fix bug showing incorrect history after a revert action @robgietema

### Internal

### Documentation

Undo html_static_path configuration in `plone/documentation`, and restore image and its referenced path in `plone/volto`. @stevepiercy

## 16.0.0-alpha.31 (2022-09-12)

### Bugfix

- Fix types menu on mobile for many types. Specific menuStyle for 'more' menu. @ksuess
- Fix types menu on desktop when menu overflows the viewport, adding scroll to it @sneridagh

### Documentation

- Align `html_static_path` with `plone/documentation` and image path so that images render when docs build in both repos. @stevepiercy

## 16.0.0-alpha.30 (2022-09-07)

### Breaking

- Main workflow change menu changed from Pastanaga UI simplification to classic Plone implementation. @sneridagh
  See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Feature

- Added placeholder param to widget, to change default placeholder @giuliaghisini
- Add a headline (`headline` field) to the listing block schema by default @sneridagh
- Add scroll into view setting to slate @robgietema
- Use absolute dates instead of "x hours ago" in History view @steffenri

### Bugfix

- Fix: Slate Editor: can not delete bullet point after adding it by typing "- " #3597 @dobri1408
- Fix literal for the listing block edit mode message telling if the results are contained items (no query) or query results ones (query present) @sneridagh
- Fix grouping of the "users and groups" control panels (plone-users category) @sneridagh
- Improve `Display` and `Workflow` widgets in `More` menu. Fix alignments. @sneridagh
- Fixed searching in the sharing page not showing any results @JeffersonBledsoe #3579

### Documentation

- Make links relative to `_static` so that `plone/documentation` can pull them in, and fix broken link. @stevepiercy

## 16.0.0-alpha.29 (2022-09-02)

### Feature

- Support for getting `selectableTypes` and `maximumSelectionSize` from `widgetProps` @sneridagh

## 16.0.0-alpha.28 (2022-08-31)

### Feature

- Add clear formatting button to slate @robgietema

### Bugfix

- Fix array widget translation @robgietema
- Fix: TTW DX Layout disables IBlocks behavior and with it all the indexers and transformers @avoinea

### Internal

### Documentation

- Fix copy / paste text in list @robgietema

## 16.0.0-alpha.27 (2022-08-29)

### Feature

- Added placeholder param to widget, to change default placeholder @giuliaghisini

### Bugfix

- Fix Image gallery listing block variation only gets 25 if no query is set @sneridagh

## 16.0.0-alpha.26 (2022-08-24)

### Breaking

- This is an UI/UX breaking change. It changes the back button in folder contents from using a cross icon to using a back icon. The rationale behind is because the cross evoque "cancel" when what happens is a change of view. It's also consistent with both PastanagaUI and QuantaUI style guide. @robgietema

### Feature

- Add initialPath support to ObjectBrowser widget @robgietema

## 16.0.0-alpha.25 (2022-08-24)

### Feature

- Add support for OpenStreet Maps in Maps block @sneridagh
- Make `internalApiPath` client aware, since there are some corner cases when the client needs to know it to properly handle API server URLs @sneridagh

### Bugfix

- Fix sitemap.xml.gz @robgietema

### Internal

- Use component registry for default image, fallback to the local import @sneridagh

## 16.0.0-alpha.24 (2022-08-22)

### Feature

- handle 'no connection' available error (408 error). @giuliaghisini

### Bugfix

- Fix overlapping for long words in Control Panel titles (added word-wrapping) @sneridagh

## 16.0.0-alpha.23 (2022-08-18)

### Breaking

- change password-reset url to be consistent with Plone configuration @erral
- Simplify over the existing Component Registry API. The `component` key has been flattened for simplification and now it's mapped directly to the `component` argument of `registerComponent`. @sneridagh

See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.

### Feature

- support for many_users and many_groups flag in user controlpanel and group controlpanel @nileshgulia1
- Show the content type of the content object you are adding/editing in the sidebar @robgietema
- Remove soft hyphens from the title tag @davisagli

### Bugfix

- Fix login form redirect when it was loaded with a trailing slash @davisagli
- Better de translation for Site Setup @davisagli

### Internal

- Test against Plone 5.2.9 and 6.0.0b1 @davisagli
- Use latest 1.6.0 `@plone/scripts` @sneridagh
- Add classname of variation in edit mode @iFlameing

## 16.0.0-alpha.22 (2022-08-05)

### Breaking

- The complete configuration registry is passed to the add-ons and the project configuration pipeline
  See https://docs.voltocms.com/upgrade-guide/ for more information. @sneridagh
- Refactor the component registry API in the configuration registry @sneridagh @tiberiuichim

### Bugfix

- Fix content loading in `DefaultView` infinite loop if a listing block with no query is present. @sneridagh

### Documentation

- Documentation of the new component registry API @sneridagh

## 16.0.0-alpha.21 (2022-08-03)

### Bugfix

- Fix ArrayWidget choices when editing a recently created content item. @davisagli

### Internal

- Fix propTypes for Pagination component @davisagli

## 16.0.0-alpha.20 (2022-08-01)

### Breaking

- Use `Cypress` 10.3.0 (migrate from 9.x.x). Cypress 10 has some interesting goodies, being the native support of Apple Silicon Computers the main of it. See https://docs.voltocms.com/upgrade-guide/ for more information. @sneridagh

### Bugfix

- Make Search page title translatable @erral
- Changed storeProtectLoadUtils location from src/storeProtectLoadUtils to src/middleware/storeProtectLoadUtils @MdSahil-oss

### Documentation

- Minor clean up of volto-slate upgrade guide. @stevepiercy

- Rework documentation on how to write a Slate plugin @ksuess

## 16.0.0-alpha.19 (2022-07-28)

### Breaking

- Using volto-slate Headline / Subheadline buttons strips all elements in the selection @tiberiuichim

### Feature

- Send extra data coming from listing block schemaEnhancer from searchBlock to the listing variation @ionlizarazu

### Bugfix

- complete pt_BR translation @ericof
- Fix action `listUsers`. Provide default. @ksuess
- Provide the correct id to the blocks wrapped by StyleWrapper. @razvanMiu
- Remove console deprecation notice for 'host' property usage coming from Express @sneridagh

### Internal

- Allow passing `allowedChildren` option to the BlockButton, to strip elements in headlines @tiberiuichim
- Upgrade to latest `@plone/scripts` @sneridagh
- Update browserlist definitions @sneridagh

### Documentation

- Add upgrade guide documentation for dealing with `volto-slate` upgrades for Volto 16 alpha 15 onwards. @sneridagh

## 16.0.0-alpha.18 (2022-07-26)

### Breaking

- Remove the `callout` button (the one with the megaphone icon) from the slate toolbar since it has the same styling as `blockquote`. If you need it anyway, you can bring it back in your addon. @sneridagh

### Bugfix

- Fix edge cases in Cypress flaky tests when the Edit component was loaded without loading the type schema. @sneridagh & @davisagli
- Fix edge cases in Cypress flaky tests when the Edit component was loaded for the wrong content path. @davisagli

### Internal

- Fix `defaultBlockType` entry in default config, set it to slate. @sneridagh

## 16.0.0-alpha.17 (2022-07-25)

### Feature

- Added the `Undo controlpanel` to the controlpanels which can be used to undo transactions. @MdSahil-oss

### Bugfix

- Make `crypto-random-string` a direct dep, fixing a hidden error since some updated dependency was requiring it directly but not anymore. @sneridagh

## 16.0.0-alpha.16 (2022-07-25)

### Do not use, this is a brown bag release

See: https://github.com/plone/volto/pull/3505
Use next release instead: https://github.com/plone/volto/releases/tag/16.0.0-alpha.17

### Breaking

- Staticize Poppins font to be compliant with EU privacy. Import from GoogleFont is disabled in site.variables. @giuliaghisini

### Bugfix

- Add some more messages to be able to translate them @erral
- Fix typo in de locale @wolbernd
- [generator] Improvements to the addon generator: Now it wires up the addon automatically for immediate local development @sneridagh
- complete eu translation @erral
- complete es translation @erral
- [generator] Add .editorconfig and .prettierignore to generated projects and addons. @ericof

### Internal

- Update json-schema including transitive dependencies @davisagli
- Update release-it @davisagli
- Deduplicate dependencies using yarn-deduplicate @davisagli

### Documentation

- Fix redirect on YouTube, broken link after merge and deleted branch. @stevepiercy

## 16.0.0-alpha.15 (2022-07-21)

### Breaking

- Integrate volto-state add-on. @tiberiuichim @razvanmiu @eea

### Documentation

- volto-slate documentation @nileshgulia1

## 16.0.0-alpha.14 (2022-07-20)

### Breaking

- Action `listUsers`to be called with Object. Distinguish between search for id or search for fullname, email, username @ksuess

### Feature

- Add user group membership control panel @ksuess
- Action `listUsers`: Support search for fullname, email, username. @ksuess

### Bugfix

- Fix typo in de locale @wolbernd

## 16.0.0-alpha.13 (2022-07-18)

### Feature

- Add schema to video block sidebar @iRohitSingh @danielamormocea

### Bugfix

- Prevent the `defaultView` to show anything if the content is not loaded yet. This fixes showing the non-blocks enabled view for a fraction of a second before showing the blocks-enabled one once the content is loaded. @sneridagh

### Documentation

- `aria-*` attributes are now parsed correctly by jsx-lexer 2.0. @stevepiercy

## 16.0.0-alpha.12 (2022-07-13)

### Feature

- Use type info instead of id type as icon title in the folder contents. @mamico
- Remove transifex configuration for Volto translations @erral
- Add missing support for inner `blocksConfig` in block extensions resolutions @sneridagh

### Bugfix

- Fixed the description field not being included in the navigation action/ reducer @JeffersonBledsoe #3454
- Fixed a11y of Maps block (#3467) @iRohitSingh

### Internal

- Mock all loadable libraries. @mamico

### Documentation

- Remove sphinx_sitemap configuration because Volto's docs are now imported into the main docs, making this setting unnecessary. @stevepiercy
- Set the ogp_site_url to main docs, instead of training. @stevepiercy

## 16.0.0-alpha.11 (2022-06-21)

### Feature

- Add listing variation schemaEnhancer to the search block schema @ionlizarazu
- Use the local blocksConfig for extensions, fallback to the config object one. This allows to override local blocks config in nested blocks (blocks in a block, eg. accordion, grid, row) @sneridagh

### Internal

- Fix warning because missing key in `VersionOverview` component @sneridagh

## 16.0.0-alpha.10 (2022-06-17)

### Bugfix

- Fix CSS bundling in production mode to be consistent with the current policy in the client bundle. Right now the order of the CSS resources matches this chain: Loading of `import my-less.less` in add-ons (following the add-on order) -> Loading of the Semantic UI defaults -> Loading of the local theme (either project or add-on based). We are forcing now the bundling of all the CSS in one chunk, so it behaves the same than in dev mode (using the style-loader). @sneridagh

## 16.0.0-alpha.9 (2022-06-17)

### Feature

- New `cloneDeepSchema` helper @sneridagh

### Bugfix

- Use `cloneDeepSchema` helper for schema cloning operations, this fixes the error thrown in the use case of having JSX in the schema while cloning schema operations @sneridagh

## 16.0.0-alpha.8 (2022-06-17)

### Feature

- Refactor image block: make it schema extensible @nileshgulia1 @sneridagh
- Add control panel via config.settings @ksuess https://github.com/plone/volto/issues/3426
- Add noindex metadata tag @steffenri
- Adding Schema for Maps Block in Sidebar @iRohitSingh
- Add a Pluggable to the sharing page @JeffersonBledsoe #3372

### Bugfix

- Don't render junk when no facets are added to the search block @tiberiuichim
- Fix visibility of toolbar workflow dropdown for more states as fitting in .toolbar-content. @ksuess
- Fix the video block for anonymous user @iFlameing

## 16.0.0-alpha.7 (2022-06-01)

### Bugfix

- fix schema when content contains lock informations. @giuliaghisini

### Internal

- Missing change from the last breaking change (Remove the style wrapper around the `<Block />` component in Edit mode, moved to the main edit wrapper). Now, really move it to the main edit wrapper @sneridagh

## 16.0.0-alpha.6 (2022-05-31)

### Breaking

- Rename `src/components/manage/Widgets/ColorPicker.jsx` component to `src/components/manage/Widgets/ColorPickerWidget.jsx` @sneridagh
- Remove the style wrapper around the `<Block />` component in Edit mode, moved to the main edit wrapper @sneridagh

### Feature

- Updated Brazilian Portuguese translation @ericof
- Forward `HTTP Range` headers to the backend. @mamico
- Add default value to color picker, if `default` is present in the widget schema. @sneridagh
- Inject the classnames of the StyleWrapper into the main edit wrapper (it was wrapping directly the Edit component before). This way, the flexibility is bigger and you can act upon the whole edit container and artifacts (handlers, etc) @sneridagh

### Bugfix

- fix TokenWidget choices when editing a recently created content. @giuliaghisini
- Fix color picker defaults implementation #2 @sneridagh
- Enable default color in `backgroundColor` default StyleWrapper field which wasn't sync with the default value setting @sneridagh
- Fix Block style wrapper: Cannot read properties of undefined (reading 'toString') @avoinea #3410

## 16.0.0-alpha.5 (2022-05-25)

### Bugfix

- Fix regression, compound lang names (eg. `pt-BR`) no longer working @sneridagh

## 16.0.0-alpha.4 (2022-05-22)

### Breaking

- Removed `date-fns` from dependencies, this was in the build because `Cypress` depended on it. After the `Cypress` upgrade it no longer depends on it. If your project still depends on it, add it as a dependency of your project. @sneridagh
- Removed all usage of `date-fns` from core. @sneridagh

### Feature

- added 'show total results' option in Search block configuration. @giuliaghisini
- Added viewableInBrowserObjects setting to use in alternative to downloadableObjects, if you want to view file in browser intstead downloading. @giuliaghisini
- Disable already chosen criteria in querystring widget @kreafox
- Added X-Forwarded-\* headers to superagent requests. @mamico

### Bugfix

- Fix `withStylingSchemaEnhancer` enhancer mechanism @sneridagh
- Add correct query parameters to the redirect @robgietema
- Fix RenderBlocks: path @ksuess
- Fix field id creation in dexterity control panel to have slugified id @erral
- Changed to get intl.locale always from state @ionlizarazu

### Internal

- Update `Cypress` to version 9.6.1 @sneridagh

### Documentation

- Updated simple.md @MdSahil-oss
- Fix indentation in nginx configuration in simple.md @stevepiercy

## 16.0.0-alpha.3 (2022-05-16)

### Breaking

- Remove `div` as default if `as` prop from `RenderBlocks`. Now the default is a `React.Fragment` instead. This could lead to CSS inconsistencies if taken this div into account, specially if used in custom add-ons without. In order to avoid them, set the `as` property always in your add-ons. @sneridagh

## 16.0.0-alpha.2 (2022-05-16)

### Feature

- Add default widget views for all type of fields and improve the DefaultView @ionlizarazu
- added configurable identifier field for password reset in config.js. @giuliaghisini
- Add `expandToBackendURL` helper @sneridagh

### Bugfix

- fixed view video list from youtube in Video block. @giuliaghisini
- Fixed ICS URL in event view in seamless mode @sneridagh

### Internal

- Reintroduce Plone 6 acceptance tests using the latests `plone.app.robotframework` 2.0.0a6 specific Volto fixture. @datakurre @ericof @sneridagh
- Upgrade all tests to use `plone.app.robotframework` 2.0.0a6 @sneridagh
- Upgrade Sentry to latest version because of [#3346](https://github.com/plone/volto/issues/3346) @sneridagh

### Documentation

- fix make task `docs-linkcheckbroken` if grep has exit code 1 (no lines found)

## 16.0.0-alpha.1 (2022-05-09)

### Feature

- Added new Block Style Wrapper. This implementation is marked as **experimental** during Volto 16 alpha period. The components, API and the styling are subject to change **without issuing a breaking change**. You can start using it in your projects and add-ons, but taking this into account. See documentation for more information. @sneridagh

## 16.0.0-alpha.0 (2022-05-06)

### Breaking

- Deprecate NodeJS 12 since it's out of LTS since April 30, 2022 @sneridagh
- Move all cypress actions to the main `Makefile`, providing better meaningful names. Remove them from `package.json` script section. @sneridagh

### Feature

- Allow final users to switch between available views in the search block. A "view" is any of available listing block variations. In the search block configuration you can pick the available views for that block. @tiberiuichim

### Bugfix

- Fixes in search block. Disable default live search. Added clear button for search input. Fixed facet dropdown clear button. Removed sort on label customization option. Layout improvements, CSS polishments. @kreafox @tiberiuichim
- added default placeholder for videos to embed them more lightly @giuliaghisini
- Added default placeholder for videos to embed them more lightly @giuliaghisini
- Completed Romanian translation @sboghy

### Bugfix

- Fix Search page visit crashes /contents view @dobri1408
- Fix sidebar full size bottom opacity on edit page when sidebar is collapsed @ichim-david
- Fix toolbar bottom opacity on edit page when toolbar is collapsed @ichim-david
- Fix missing criteria in QueryWidget. @giuliaghisini
- Fix content view regression, height issue @danielamormocea
- Fixed secure cookie option. @giuliaghisini
- Changed addon order in addon controlpanel to mimic Classic UI @erral
- Fixed error when loading content in a language for which a Volto translation is not available. @davisagli
- Fix different querystring filters in the querystring widget @kreafox
- Fix for clipped dropdown menus when the table has few or no records in Contents view @mihaislobozeanu

### Internal

- Improve Cypress integration, using Cypress official Github Action. Improve some flaky tests that showed up, and were known as problematic. Refactor and rename all the Github actions giving them meaningful names, and group them by type. Enable Cypress Dashboard for Volto. @sneridagh
- Stop using `xmlrpc` library for issuing the setup/teardown in core, use a `cy.request` instead. @sneridagh
- Added Cypress environment variables for adjusting the backend URL of commands @JeffersonBledsoe #3271
- Fixed Storybook configuration for add-ons @pnicolli

### Documentation

- Move Cypress documentation from `README.md` to the docs. Improve the docs with the new `Makefile` commands.
- Improve English grammar and syntax in backend docs. @stevepiercy
- Fix JSX syntax highlighting. Remove duplicate heading. @stevepiercy
- Proper case HAProxy, nginx, and Docker Compose. @stevepiercy

## 15.8.0 (2022-04-30)

### Feature

- Handle @@display-file api endpoint like @@download @cekk
- Add calendar link to @ics_view @iFlameing

## 15.7.0 (2022-04-29)

### Feature

- added 'secure' cookie option if site is in https. @giuliaghisini

## 15.6.1 (2022-04-29)

### Bugfix

- Overwrite isValidNewOption of ArrayWidget to allow variants @ksuess

## 15.6.0 (2022-04-29)

### Feature

- Added 'checkAndNormalizeUrl' function in URLUtils. @giuliaghisini

### Bugfix

- Used UniversalLink and PreviewImage components where needed, to right handle link and images. @giuliaghisini

## 15.5.0 (2022-04-25)

### Feature

- More Italian translations @giuliaghisini

### Bugfix

- Fixed edit internal link and image url in this blocks: image block, leadimage block, video block, objectBrowser. In objectBrowser, if pasted url was internal, it wasn't flatted and wass handled from Plone as an external. @giuliaghisini
- Fix folder content layout @SaraBianchi

### Documentation

- Added a `selectableTypes` example to the `ObjectBrowserWidget` storybook @JeffersonBledsoe #3255
- Add labels for Intersphinx. @stevepiercy

## 15.4.1 (2022-04-11)

### Bugfix

- Fix handling of single reference field in `ObjectBrowser` @robgietema
- Make the parseDateTime function to handle only date as well @iFlameing
- Fix ContextNavigation component with Link type objects @UnaiEtxaburu #3232

### Internal

- Upgrade react-image-gallery to latest to fix a11y problem @sneridagh
- Fixed bug in HTML block edit @giuliaghisini
- Fix cannot read properties of undefined in Content.jsx @iFlameing
- Fix fixed `ObjectBrowserBody` to handle data fields based on `ObjectBrowser` mode @giuliaghisini

## 15.4.0 (2022-04-08)

### Feature

- Add package.json scripts documentation @ksuess

### Bugfix

- Fix/Improve the console logging when the server starts. @sneridagh

### Documentation

- Added html_meta values to remaining pages. @stevepiercy
- Remove duplicate toctrees and set maxdepth to appropriate values. @stevepiercy

## 15.3.0 (2022-04-04)

### Feature

- Improve the fix for the "user swap" vulnerability @sneridagh @plone/volto-team
  Thanks to @ericof and @cekk for their help and efforts at pinpointing the latests culprits!

### Documentation

- Added meta-html values in most of the pages. @ktsrivastava29

## 15.2.3 (2022-04-01)

### Bugfix

- Change which api calls can set specific api errors @robgietema
- Fix helper import. @robgietema
- Move `customStyleMap` to `richtextEditorSettings`
- Pass placeholder and isDisabled properties to EmailWidget and UrlWidget @mihaislobozeanu
- Pass placeholder property to PasswordWidget and NumberWidget @mihaislobozeanu
- Fix getVocabName when vocabNameOrURL is false @avoinea #2955, #2919

### Internal

- Remove offending `Makefile` command that broke on MacOS due to lack of compatibility of the MacOS `make` utility. @tisto
- Upgraded use-deep-compare-effect to version 1.8.1. @pnicolli
- chore(icons): add missing pastanaga icons @nileshgulia1

### Documentation

- Switch from `docs-linkcheckbroken` to `docs-linkcheck` in GitHub Actions because the former is broken. @stevepiercy
- Set the output for storybook to the correct directory. @stevepiercy
- Fix typo in Makefile: docs/\_build @ksuess
- Added language to code-blocks in md files @ktsrivastava29

## 15.2.2 (2022-03-23)

### Bugfix

- Fix external url append issue of @@download/file @iRohitSingh
- Fix headers in sitemap middleware when errors occur in the sitemap generation @mamico

## 15.2.1 (2022-03-21)

### Bugfix

- `Manage translations` view error on seamless mode, `flattenToAppURL` missing. @sneridagh

### Documentation

- Reenable `make docs-linkcheckbroken`. @stevepiercy
- Add html_meta values to add-on best practices, s/addon/add-on. @stevepiercy
- Netlify now only builds on changes to the `./docs/` directory. @stevepiercy
- Replace deprecated `egrep` with `grep` in `make docs-linkcheckbroken`. @stevepiercy

## 15.2.0 (2022-03-18)

### Feature

- Add helper utilities to be used by addons @robgietema

### Bugfix

- Fix addon registry regression @sneridagh
- Fix `Bosnian` language @avoinea
- Fix use `settings.internalApiPath` in sitemap genaration @mamico

### Documentation

- Reduced build minutes on Netlify by building only on changes to the `docs/**` path on pull requests. See https://github.com/plone/volto/pull/3171. @stevepiercy
- Add "Documentation" heading to the automatic change log updater file `changelogupdater.js`. @stevepiercy

## 15.1.2 (2022-03-17)

### Bugfix

- Fix the alt prop in `PreviewImage` component @sneridagh

## 15.1.1 (2022-03-16)

### Bugfix

- Add optional alt tag to `PreviewImage` props @kindermann
- Remove non add-on names from `addonNames` list in Addons Registry. Update the list in the `addonsInfo` for the addons loader as well. @sneridagh

## 15.1.0 (2022-03-15)

### Feature

- Added a new component, PreviewImage. It renders a preview image for a catalog brain (based on the `image_field` prop). @tiberiuichim

### Bugfix

- Clear search results before new query is done. @robgietema

### Documentation

- Updated README.md @ktsrivastava29
- Added language to code-blocks in md files @ktsrivastava29
- Added html_meta values and labels for Intersphinx cross-references from Trainings. @stevepiercy
- Replaced `docs.voltocms.com` with MyST references. @stevepiercy

## 15.0.0 (2022-03-14)

### Breaking

- Upgrade `react-cookie` to the latest version. @sneridagh @robgietema
  See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.
- Language Switcher no longer takes care of the change of the language on the Redux Store. This responsibility has been unified in the API Redux middleware @sneridagh
- Markup change in `LinkView` component.
- Rename `core-sandbox` to `coresandbox` for sake of consistency @sneridagh
- Extend the original intent and rename `RAZZLE_TESTING_ADDONS` to `ADDONS`. @sneridagh
  See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.
- Lazyload Draft.js library. See the upgrade guide on how that impacts you, in case you have extended the rich text editor configuration @tiberiuichim @kreafox
  See https://6.dev-docs.plone.org/volto/upgrade-guide/index.html for more information.
- Deprecating `lang` cookie in favor of Plone official one `I18N_LANGUAGE` @sneridagh

### Feature

- Add `cookiesExpire` value to config to control the cookie expiration @giuliaghisini
- DatetimeWidget 'noPastDates' option: Take widgetOptions?.pattern_options?.noPastDates of backend schema into account. @ksuess
- Add a new type of filter facet for the Search block. Heavily refactor some searchblock internals. @tiberiuichim
- Add date range facet to the search block @robgietema
- Introduce the new `BUILD_DIR` runtime environment variable to direct the build to run in a specific location, different than `build` folder. @sneridagh
- Handle redirect permanent calls from the backend in the frontend (e.g. when changing the short name) @robgietema
- Added id widget to manage short name @robgietema
- Refactor language synchronizer. Remove it from the React tree, integrate it into the Api Redux middleware @sneridagh
- Add blocks rendering in Event and NewsItem views (rel plone.volto#32) @nzambello @ksuess
- Add internal volto ids to invalid ids @robgietema
- Complete Basque translation @erral
- Complete Spanish translation @erral
- Sort the choices in Facets in the search block @iFlameing

### Bugfix

- Fix the `null` error in SelectAutoComplete Widget @iFlameing
- Prevent the `MultilingualRedirector` to force content load when switching the language @reebalazs
- Fix the upload image in contents view @iFlameing
- add "view" id to contact-form container for main content skiplink @ThomasKindermann
- Fix loading indicator positioning on Login form submit @sneridagh
- Fix redirect bug with URLs containing querystrings @robgietema
- Fixed id widget translations @robgietema
- Contents Rename Modal, use `id` Widget type @sneridagh
- Fix overflow of very long file name in `FileWidget` @sneridagh
- Fix overflowing issue in the toolbar @kreafox
- Overwrite current block on insert new block. @robgietema
- Fix hot reload on updates related to the config object because of `VersionOverview` component @sneridagh
- Fix error when lock data is gone after an invariant error. @robgietema
- Protect against ghost content loading and scroll to top @reebalazs

### Internal

- Change prop `name` -> `componentName` in component `Component` @sneridagh
- Add new RawMaterial Volto websites in production @nzambello
- House cleanup, remove some unused files in the root @sneridagh
- Move Webpack related files to `webpack-plugins` folder @sneridagh
- Remove unused Dockerfiles @sneridagh
- Update Docker compose to latest images and best practices @sneridagh
- Improve flaky test in coresandbox search Cypress tests @sneridagh
- Better implementation of the add-on load coming from the environment variable `ADDONS` @sneridagh
- Turn `lazyLibraries` action into a thunk. Added a conditional if the library is loaded or in process to be loaded, do not try to load it again. This fixes the lag on load `draftjs` when having a lot of draftjs blocks. @sneridagh
- Use `@root` alias instead of `~` in several module references. Most of the Volto project code no longer needs the root alias, so it makes sense to phase it out at some point @tiberiuichim
- Alias `lodash` to `lodash-es`, as this will include only one copy of lodash in the bundle @tiberiuichim
- Better Readme, updated to 2022 @sneridagh
- Update to latest versions for Python packages @sneridagh
- Add `id` as widget type as well @sneridagh

### Documentation

- Upgrade Guide i18n: Make clear what's project, what add-on. @ksuess
- (Experimental) Prepare documentation for MyST and importing into `plone/documentation@6-dev`. @stevepiercy
- Fix broken links and redirects in documentation to be compatible with MyST. @stevepiercy
- Update add-on internationalization. @ksuess
- Add MyST and Sphinx basic configuration for rapid build and comparison against MkDocs builds. @stevepiercy
- Fix many MyST and Sphinx warnings. @stevepiercy
- Remove MkDocs configuration. See https://github.com/plone/volto/issues/3042 @stevepiercy
- Add Plone docs to Intersphinx and fix broken link. @stevepiercy
- Get version from `package.json` @sneridagh
- Remove legacy folder in docs @sneridagh
- Backport docs of RAZZLE_TESTING_ADDONS environment variables. See https://github.com/plone/volto/pull/3067/files#diff-00609ed769cd40cf3bc3d6fcc4431b714cb37c73cedaaea18fe9fc4c1c589597 @stevepiercy
- Add missing developer-guidelines/typescript to toctree @stevepiercy
- Add Netlify for preview of Sphinx builds for pull requests against `master` and `plone6-docs`. @stevepiercy
- Clean up toctree errors by removing obsolete files, adding `:orphan:` field list, and reorganizing some files. @sneridagh and @stevepiercy
- Switch to using netlify.toml to configure Netlify Python environment. @stevepiercy
- Convert admonition syntax from Markdown to MyST. @sneridagh
- Make links build both in Volto and Plone documentation. See https://github.com/plone/volto/pull/3094 @stevepiercy
- Fix broken links. @stevepiercy
- Update Sphinx configuration to check anchors in links and exclude problematic URLs. @sneridagh and @stevepiercy
- Fix StoryBook links @sneridagh
- Clean up `linkcheck_ignore` values. @stevepiercy

## 15.0.0-alpha.14 (2022-03-10)

### Bugfix

- Contents Rename Modal, use `id` Widget type @sneridagh

### Internal

- Better Readme, updated to 2022 @sneridagh
- Update to latest versions for Python packages @sneridagh
- Add `id` as widget type as well @sneridagh

### Documentation

- Fix broken links. @stevepiercy

## 15.0.0-alpha.13 (2022-03-09)

### Feature

- Sort the choices in Facets in the search block @iFlameing

### Bugfix

- Fix overflow of very long file name in `FileWidget` @sneridagh
- Fix overflowing issue in the toolbar @kreafox

## 15.0.0-alpha.12 (2022-03-07)

### Feature

- Add internal volto ids to invalid ids @robgietema
- Complete basque translation @erral
- Complete spanish translation @erral

### Internal

- Change prop `name` -> `componentName` in component `Component` @sneridagh

## 15.0.0-alpha.11 (2022-03-02)

### Bugfix

- Fix redirect bug with URLs containing querystrings @robgietema
- Fixed id widget translations @robgietema

### Internal

- Use `@root` alias instead of `~` in several module references. Most of the Volto project code no longer needs the root alias, so it makes sense to phase it out at some point @tiberiuichim
- Alias `lodash` to `lodash-es`, as this will include only one copy of lodash in the bundle @tiberiuichim

## 15.0.0-alpha.10 (2022-02-28)

### Bugfix

- Turn `lazyLibraries` action into a thunk. Added a conditional if the library is loaded or in process to be loaded, do not try to load it again. This fixes the lag on load `draftjs` when having a lot of draftjs blocks. @sneridagh

## 15.0.0-alpha.9 (2022-02-28)

### Breaking

- Deprecating `lang` cookie in favor of Plone official one `I18N_LANGUAGE` @sneridagh

### Feature

- Added id widget to manage short name @robgietema
- Refactor language syncronizer. Remove it from the React tree, integrate it into the Api Redux middleware @sneridagh
- Add blocks rendering in Event and NewsItem views (rel plone.volto#32) @nzambello @ksuess

### Bugfix

- Fix redirect bug with URLs containing querystrings @robgietema

## 15.0.0-alpha.8 (2022-02-22)

### Internal

- Better implementation of the add-on load coming from the environment variable `ADDONS` @sneridagh

## 15.0.0-alpha.7 (2022-02-22)

### Feature

- Introduce the new `BUILD_DIR` runtime environment variable to direct the build to run in an especific location, different than `build` folder. @sneridagh
- Handle redirect permanent calls from the backend in the frontend (e.g. when changing the short name) @robgietema

## 15.0.0-alpha.6 (2022-02-21)

### Feature

- DatetimeWidget 'noPastDates' option: Take widgetOptions?.pattern_options?.noPastDates of backend schema into account. @ksuess
- Add a new type of filter facet for the Search block. Heavily refactor some searchblock internals. @tiberiuichim
- Add date range facet to the search block @robgietema

### Internal

- Improve flaky test in coresandbox search Cypress tests @sneridagh

### Documentation

- (Experimental) Prepare documentation for MyST and importing into `plone/documentation@6-dev`. @stevepiercy
- Fix broken links and redirects in documentation to be compatible with MyST. @stevepiercy
- Update add-on internationalization. @ksuess
- Add MyST and Sphinx basic configuration for rapid build and comparison against MkDocs builds. @stevepiercy
- Fix many MyST and Sphinx warnings. @stevepiercy
- Remove MkDocs configuration. See https://github.com/plone/volto/issues/3042 @stevepiercy
- Add Plone docs to Intersphinx and fix broken link. @stevepiercy
- Get version from `package.json` @sneridagh
- Remove legacy folder in docs @sneridagh
- Backport docs of RAZZLE_TESTING_ADDONS environment variables. See https://github.com/plone/volto/pull/3067/files#diff-00609ed769cd40cf3bc3d6fcc4431b714cb37c73cedaaea18fe9fc4c1c589597 @stevepiercy
- Add missing developer-guidelines/typescript to toctree @stevepiercy
- Add Netlify for preview of Sphinx builds for pull requests against `master` and `plone6-docs`. @stevepiercy
- Clean up toctree errors by removing obsolete files, adding `:orphan:` field list, and reorganizing some files. @sneridagh and @stevepiercy
- Switch to using netlify.toml to configure Netlify Python environment. @stevepiercy
- Convert admonition syntax from Markdown to MyST. @sneridagh
- Make links build both in Volto and Plone documentation. See https://github.com/plone/volto/pull/3094 @stevepiercy

## 15.0.0-alpha.5 (2022-02-16)

### Breaking

- Lazyload draftjs library. See the upgrade guide on how that impacts you, in case you have extended the rich text editor configuration @tiberiuichim @kreafox
  See https://docs.voltocms.com/upgrade-guide/ for more information.

### Feature

- Add `cookiesExpire` value to config to control the cookie expiration @giuliaghisini

## 15.0.0-alpha.4 (2022-02-16)

### Breaking

- Markup change in `LinkView` component.
- Rename `core-sandbox` to `coresandbox` for sake of consistency @sneridagh
- Extend the original intent and rename `RAZZLE_TESTING_ADDONS` to `ADDONS`. @sneridagh
  See https://docs.voltocms.com/upgrade-guide/ for more information.

### Internal

- House cleanup, remove some unused files in the root @sneridagh
- Move Webpack related files to `webpack-plugins` folder @sneridagh
- Remove unused Dockerfiles @sneridagh
- Update Docker compose to latest images and best practices @sneridagh

## 15.0.0-alpha.3 (2022-02-11)

### Bugfix

- Fix the upload image in contents view @iFlameing
- add "view" id to contact-form container for main content skiplink @ThomasKindermann
- Fix loading indicator positioning on Login form submit @sneridagh

### Internal

- Add new RawMaterial Volto websites in production @nzambello

## 15.0.0-alpha.2 (2022-02-10)

### Breaking

- Language Switcher no longer takes care of the change of the language on the Redux Store. This responsability has been unified in the `MultilingualRedirector` @sneridagh

### Bugfix

- Prevent the MultilingualRedirector to force 4 content load when switching the language @reebalazs

### Documentation

- Upgrade Guide i18n: Make clear what's project, what add-on. @ksuess

## 15.0.0-alpha.1 (2022-02-09)

### Bugfix

- Fix the `null` error in SelectAutoComplete Widget @iFlameing

## 15.0.0-alpha.0 (2022-02-09)

### Breaking

- Upgrade `react-cookie` to latest version. @sneridagh @robgietema
  See https://docs.voltocms.com/upgrade-guide/ for more information.

## 14.10.0 (2022-02-08)

### Feature

- Add Pluggable to toolbar user menu. @ksuess

## 14.9.0 (2022-02-08)

### Feature

- Show addons installed in control panel @sneridagh
- Added a search input in the block chooser @bipoza

### Bugfix

- Fix italian translations in ObjectBrowser @giuliaghisini

## 14.8.1 (2022-02-04)

### Bugfix

- Fix wrong CSS in language independent class selector @sneridagh

### Internal

- Cleanup redundant buildout install run.

## 14.8.0 (2022-02-03)

### Feature

- Enable `components` property in Volto's config registry. Does not expose any direct feature but this will open the door to be able to override registered components using the config registry and avoid using shadowing explicitly. @sneridagh
- Add `resolve` and `register` helper methods for the Volto config. They retrieve and register new components in the registry. @tiberiuichim @sneridagh
- Add `Component` component, given a `name` of a component registered in the registry, it renders it, passing down the props. @tiberiuichim
- Syncronize the content language with the UI language in multilingual sites. So when you are accessing a content in a given language the rest of the interface literals follow along (it updates the language cookie). So the UI remains consistent. @sneridagh

### Bugfix

- Fix the a11y violation of UrlWidget @iRohitSingh

### Internal

- Update volta pins in package.json @fredvd

## 14.7.1 (2022-02-02)

### Internal

- Add CSS body class in Babel view. Improve marker for language independent fields in Babel view too. @sneridagh

### Docs

Update documentation for internal proxy & other smaller reorganisation for quicker onboarding of
new users/evaluators. @fredvd

## 14.7.0 (2022-01-28)

### Feature

- Add `<FormattedDate>` and `<FormattedRelativeDate>` components. Check their Storybook stories for details. This is part of ongoing work to minimize the use of 'deprecated' momentjs. @sneridagh @tiberiuichim

### Internal

- Upgrade jest to latest release, 27 major. @tiberiuichim
- Lazyload momentjs. `parseDateTime` helper now requires passing the momentjs library @tiberiuichim

## 14.6.0 (2022-01-27)

### Feature

- Use `volto.config.js` as dynamic configuration for addons. It adds up to the `package.json` `addons` key, allowing dynamic load of addons (eg. via environment variables) @sneridagh

### Internal

- Fix ObjectListWidget story bug caused by lazyloading dnd libraries
  @tiberiuichim

## 14.5.0 (2022-01-26)

### Feature

- VocabularyTermsWidget: Token is now on creation of term editable, but stays ineditable afterwards. @ksuess

### Bugfix

- Fix A11Y violations in Navigation @iRohitSingh
- Fix `language-independent-field` CSS class styling @sneridagh

### Internal

- Lazyload react-beautiful-dnd @tiberiuichim
- Lazyload react-dnd @tiberiuichim
- Improve docs on environment variables, add recipes @sneridagh
- Update p.restapi to 8.20.0 and plone.volto to 4.0.0a1 and plone.rest to 2.0.0a2 @sneridagh

## 14.4.0 (2022-01-21)

### Feature

- Language independent fields support in Volto forms @sneridagh

## 14.3.0 (2022-01-20)

### Feature

- Bump semantic-ui-react to v2.0.3 @nileshgulia1

## 14.2.3 (2022-01-20)

### Bugfix

- Fix ListingBlock to add "No results" message when there are no messages @erral
- Fix overflow table in Content view @giuliaghisini
- Fixed url validation in FormValidation to admit ip addresses. @giuliaghisini
- Upgrade to plone.restapi 8.19.0 (to support the language independent fields serialization) @sneridagh

## 14.2.2 (2022-01-13)

### Bugfix

- Fix home URL item in Navigation, which was evaluating as non-internal @sneridagh
- Improve the request handling in `getAPIResourceWithAuth` and in `Api` helper. This fixes the "Cannot set headers once the content has being sent" @sneridagh
- Fix when you remove the time from DatetimeWidget @iRohitSingh

### Internal

- Fix URL for Climate-Energy, a Volto website @tiberiuichim
- Fix quirky Cypress test in "DX control panel schema" (see https://github.com/plone/volto/runs/4803206906?check_suite_focus=true) @sneridagh

## 14.2.1 (2022-01-12)

### Bugfix

- Fix home URL item in Navigation, which was evaluating as non-internal

### Internal

- Use plone-backend docker images for Cypress tests @sneridagh
- Upgrade `query-string` library so it supports Plone `:list` qs marker @sneridagh

## 14.2.0 (2022-01-04)

### Feature

- Allow `creatable` prop to be passed to `ArrayWidgets`, in case they don't have a vocabulary @giuliaghisini
- Added initialBlocksFocus to blocks config, to set default focus on non-first block. @giuliaghisini

## 14.1.1 (2022-01-03)

### Internal

- Update to plone.restapi 8.18.0, remove some defensive code in vocabularies action now that it's fixed in the backend @sneridagh

## 14.1.0 (2021-12-31)

### Feature

- Added custom option to SelectWidget to render custom optionss (for example with icons) @giuliaghisini
- Added form undo support in the form of two buttons in the main toolbar and ctrl+z, ctrl+y as hotkeys for undo/redo. The undo capabilities are provided by a new helper hook, `useUndoManager`. @tiberiuichim

### Bugfix

- Fix query data in listing blocks ssr async call @cekk
- In the contact form, only display the "back" button in the toolbar @tiberiuichim
- Fixed selected widget to use isMulti prop @giuliaghisini

### Internal

- Allow the draftjs Text block edit to update the editor content when incoming block data is mutated outside the block (to support form undo) @tiberiuichim
- Remove use of internal component state for ArrayWidget, SelectWidget and TokenWidget, (to support form undo) @tiberiuichim
- Use lazy loading of react-dates and momentjs for the DatetimeWidget @tiberiuichim
- Improve widget stories, add a common `WidgetStory` class, show undo capabilities in widget stories @tiberiuichim
- Better SelectAutocompleteWidget and SelectUtils @giuliaghisini @sneridagh @tiberiuichim

## 14.0.2 (2021-12-22)

### Internal

- Better favicon definitions, 2021 bullet proof @sneridagh

## 14.0.1 (2021-12-21)

### Bugfix

- Construct request with list parameters as separate querystring key value pairs according Zope convention @ksuess
- Fix spelling in error message when backend is unreachable @instification

## 14.0.0 (2021-12-20)

### Breaking

- Remove compatibility for old configuration (based on imports) system. Migrate your configuration to the new configuration system for your project before upgrading to Volto 14. See https://docs.voltocms.com/upgrade-guide/#volto-configuration-registry @sneridagh
- Content locking is not a breaking change, but it's worth noting that Volto 14 comes with locking support enabled by default. Latest `plone.restapi` version is required. @avoinea
- Revisited, rethought and refactored Seamless mode @sneridagh
  For more information, please read the deploying guide
  https://docs.voltocms.com/deploying/seamless-mode/
- Listing block no longer use `fullobjects` to retrieve backend data. It uses the catalog data instead. This improves the performance of the listing block. @plone/volto-team
- Removed pagination in vocabularies widgets (SelectWidget, ArrayWidget, TokenWidget) and introduced subrequest to vocabulary action. @giuliaghisini
- Use the block's title as the source of the translation instead of using the id of the block. See upgrade guide for more information @sneridagh
- New i18n infrastructure in the new `@plone/scripts` package @sneridagh
- Removed `src/i18n.js` in favor of the above change @sneridagh
- Adjusted main `Logo.jsx` default component styling @sneridagh
- Fix logout action using the backend @logout endpoint, effectively removing the `__ac` cookie. It is recommended to upgrade to the latest p.restapi version to take full advantage of this feature @sneridagh
- Improve mobile navigation menu with a nicer interaction and a fixed overlay with a drawer (customizable via CSSTransitionGroup) animation @sneridagh
- Use title instead of id as a source of translation in "Variation" field in block enhancers @sneridagh
- Move `theme.js` import to top of the client code, so it take precedence over any other inline imported CSS. This is not an strict breaking change, but it's worth to mention it as might be important and kept in mind. @sneridagh

See https://docs.voltocms.com/upgrade-guide/ for more information about all the breaking changes.

### Feature

- Support Node 16 @timo
- Content locking support for Plone (`plone.locking`) @avoinea
- Add the new search block @tiberiuichim @kreafox @sneridagh
- Provide Server-Side Rendering capabilities for blocks with async-based content (such as the listing block). A block needs to provide its own `getAsyncData` implementation, which is similar to an `asyncConnect` wrapper promise. @tiberiuichim @sneridagh
- Defaults are observed in block data if `InlineForm` or `BlockDataForm` are used. @sneridagh @tiberiuichim
- Apply form defaults from RenderBlocks and block Edit using a new helper, `applyBlockDefaults` @tiberiuichim
- Now each block config object can declare a schema factory (a function that can produce a schema) and this will be used to derive the default data for the block @tiberiuichim
- Add `volto-guillotina` addon to core @sneridagh
- Make `VocabularyTermsWidget` orderable @ksuess
- Get widget by tagged values utility function in the `Field` decider @ksuess
- Use Plone logo @ericof
- Update favicon and related tags with best practices @sneridagh
- Enable to be able to use the internal proxy in production as well @sneridagh
- Add runtime configuration for `@babel/plugin-transform-react-jsx` set to `automatic`. This enables the new JSX runtime: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html So no longer `import React from 'react'` is needed anymore. @sneridagh
- Add `autocomplete` Widget component - It holds off the vocabulary endpoint pull until you search (more than 2 chars). Useful when dealing with huge vocabularies @sneridagh @reebalazs
- Add new listing block option "fullobjects" per variation @ksuess
- `FormFieldWrapper` accepts now strings and elements for description @nzambello
- Image block:
  - When uploading an image or selecting that from the object browser, Image block will set an empty string as alternative text @nzambello
  - Adds a description to the alt-tag with w3c explaination @nzambello
- Support TypeScript usage in Volto projects @pnicolli
- Added `LinkMore` component and link more in `HeroImageLeft` block. @giuliaghisini
- In the search block, allow editors to specify the sort on criteria.
  @tiberiuichim
- Added `.storybook` setup in the Volto `app` generator. Volto projects generated from this scafolding are now ready to run Storybook for the project and develop addons (in `src/addons` folder).
- Style checkboxes @nileshgulia1
- Allow loading .less files also from a Volto project's `src` folder. @tiberiuichim
- Add catalan translation @bloodbare @sneridagh
- Updated Volto production sites list @giuliaghisini
- Japanese translation updated @terapyon
- German translations updated @tisto
- Updated italian translation @pnicolli
- Updated Brazilian Portuguese translations @ericof

### Bugfix

- Fix `SelectWidget` vocabulary load on second component mount @avoinea #2655
- Fix `/edit` and `/add` `nonContentRoutes` to fix `isCmsUi` fn @giuliaghisini
- Register the dev api proxy after the express middleware @tiberiuichim
- Fix on form errors in block editor, not changing to metadata tab @sneridagh
- Fix SSR on `/edit` with dev proxy @tiberiuichim
- Fix logout action, removing the `__ac` cookie as well, if present. @sneridagh
- Do not show lead image block when the content type does not have the behavior enabled @sneridagh
- Missing default messages from JSON EN language file @sneridagh
- Show correct fieldname and not internal field id in Toast error messages on Add/Edit forms @jackahl
- `sitemap.xml.gz` obeys Plone Search settings @erral
- Get `blocks` and `blocks_layout` defaults from existing behavior when enabling TTW editable DX Layout @avoinea
- Yet another attempt at fixing devproxy. Split the devproxy into a separate devproxy verbose @tiberiuichim
- Add spinner on sharing View Button @iRohitSingh
- Fixed `SelectWidget`: when there was a selected value, the selection was lost when the tab was changed. @giuliaghisini
- Bugfixes to search block. By default search block, when empty, makes a simple
  query to the nav root, to list all content. Fix reading search text from URL.
  Implement a simple compression of URL. Don't count searched text as filter.
  Fix an edge case with showSearchInput in schema. Rename title to Section
  Title in facet column settings. Avoid double calls to querystring endpoint.
  @tiberiuichim
- Use correct shade of black in Plone logo @sneridagh
- Fix loading of cookie on SSR for certain requests, revert slight change in how they are loaded introduced in alpha 16 @sneridagh
- Prevent `ua-parser-js` security breach. See: https://github.com/advisories/GHSA-pjwm-rvh2-c87w @thet
- Fix storybook errors in the connected components, api is undefined. Using now a mock of the store instead of the whole thing @sneridagh
- CSS fix on `QueryWidget` to prevent line jumping for clear button when the multi selection widget has multiple items @kreafox
- Fix disable mode of `QuerystringWidget` when all criteria are deleted @kreafox
- Fix reset pagination in searchblock when changing facet filters @tiberiuichim
- Fix the selection of Maps Block @iRohitSingh
- `UniversalLink`: handle direct download for content-type File if user is not logged. @giuliaghisini
- Fixed `ObjectBrowserWidget` when is multiple or `maximumSelectionSize` is not set @giuliaghisini
- Fix full-width image overlaps the drag handle @iRohitSingh
- Fix move item to top of the folder when clicking on move to top action button @iRohitSingh
- Fix `downloadableObjects` default value @giuliaghisini
- Folder contents table header and breadcrumbs dropdown now appear only from the bottom, fixing an issue where the breadcrumb dropdown content was clipped by the header area @ichim-david
- Folder contents sort dropdown is now also simple as the other dropdowns
  ensuring we have the same behavior between adjecent dropdown @ichim-david
- Fix documention on block extensions, replace `render` with `template` to match Listing block @tiberiuichim
- Fix `isInternalURL` when `settings.internalApiPath` is empty @tiberiuichim
- Fix external link not supported by Navigation component #2853. @ericof
- Get Add/Edit schema contextually #2852 @ericof
- Fix regression in actions vocabularies calls because the change to use contextual schemas @sneridagh
- Include block schema enhancers (main block schema enhancer + variation schema enhancer) when calculating block default data @tiberiuichim
- Fixed object browser selected items number. @giuliaghisini
- Fix action vocabularies call avoiding regex look behind @nzambello
- Use subrequest in hero block to not lost locking token. @cekk
- Always add lang attr in html @nzambello
- Fix time widget position on 24h format @nzambello
- QuerystringWidget more resilient on old schemas @nzambello
- In search block, read SearchableText search param, to use it as search text input @tiberiuichim
- Fix missing translation in link content type @iRohitSingh
- Fixed drag-and-drop list placeholder issues @reebalazs
- Update demo address @ksuess
- Update list of trainings documentation @ksuess
- Scroll to window top only when the location pathname changes, no longer take the window location search parameters into account. The search page and the listing block already use custom logic for their "scroll into view" behaviors. @tiberiuichim
- Add missing layout view for `document_view` @MarcoCouto
- Add missing `App.jsx` full paths @jimbiscuit
- Fix z-index value of hamburger-wrapper on mobile resolutions overlapping the sidebar @ichim-david
- Fix UniversalLink handling of remote URLs from Link @nzambello

### Internal

- Upgrade to react 17.0.2 @nzambello
- Update to latest `plone.restapi` (8.16.2) @sneridagh
- Upgrade to `@plone/scripts` 1.0.3 @sneridagh
- Upgrade caniuse-lite 1.0.30001286 @tiberiuichim
- fix:correctly checkout plone.volto in buildout @nileshgulia1
- Add line in upgrade guide about `getVocabulary` API change @tiberiuichim
- Add new Volto websites in production @nzambello
- Remove Pastanaga logos from Toolbar @sneridagh
- Add `omelette` to the local Plone backend build @sneridagh
- Optimize npm package by adding `docs/` `cypress/` and `tests/` to .npmignore @avoinea
- Use released `@plone/scripts`, since the builds are broken if it's a local package @sneridagh
- Use `plone.volto` instead of `kitconcept.volto` @tisto
- Silence customization errors, they are now behind a `debug` library namespace @sneridagh
- Add development dependency on `use-trace-update`, useful for performance debugging @tiberiuichim
- Improved developer documentation. Proof read several chapters, most importantly the upgrade guide @ichim-david
- Footer: Point to `plone.org` instead of `plone.com` @ericof
- Fix `make start-frontend` @tisto
- Update all the tests infrastructure for the new `volto-guillotina` addon @sneridagh
- Add locales to existing block variations @sneridagh
- Add RawMaterial website in Volto production sites @nzambello
- Removing the hardcoded default block type from text block @iRohitSingh
- updated Volto sites list @giuliaghisini
- Cleanup dangling virtualenv files that should not be committed @pnicolli
- Remove bundlesize @tisto
- Upgrade stylelint to v14 (vscode-stylelint requires it now) @sneridagh
- Add several more stories for Storybook @tiberiuichim
- Add 2 new Volto websites by Eau de web for EEA @tiberiuichim
- Fix references to old configuration style in apiExpanders documentation @tiberiuichim
- Add `applySchemaDefaults`, in addition to `applyBlockDefaults`, to allow reuse in object widgets and other advanced scenarios @tiberiuichim
- Fix select family widgets stories in storybook @sneridagh
- Remove getNavigation from `Login.jsx` @iRohitSingh
- Allow listing block to be used in non-content pages (when used in a slot it
  shouldn't crash on add/edit pages) @tiberiuichim
- Fix typo "toolbalWidth" @iRohitSingh
- Update all requirements and the reasoning behind them in builds @sneridagh
- Update Plone version in api backend to 5.2.6. Update README and cleanup @fredvd
- Document CI changelog verifier failure details that mislead contributors @rpatterson

## 14.0.0-alpha.43 (2021-12-20)

### Breaking

- Move `theme.js` import to top of the client code, so it take precedence over any other inline imported CSS. This is not an strict breaking change, but it's worth to mention it as might be important and kept in mind. @sneridagh

### Feature

- Add runtime configuration for `@babel/plugin-transform-react-jsx` set to `automatic`. This enables the new JSX runtime: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html So no longer `import React from 'react'` is needed anymore.
- Update favicon and related tags with best practices @sneridagh

### Bugfix

- Fix z-index value of hamburger-wrapper on mobile resolutions overlapping the sidebar @ichim-david
- Fix UniversalLink handling of remote URLs from Link @nzambello
- Add missing `App.jsx` full paths @jimbiscuit

### Internal

- Upgrade to react 17.0.2 @nzambello
- Upgrade caniuse-lite 1.0.30001286 @tiberiuichim
- fix:correctly checkout plone.volto in buildout @nileshgulia1
- Add line in upgrade guide about `getVocabulary` API change @tiberiuichim
- Add new Volto websites in production @nzambello
- Remove Pastanaga logos from Toolbar @sneridagh

## 14.0.0-alpha.42 (2021-12-13)

### Breaking

- Removed pagination in vocabularies widgets (SelectWidget, ArrayWidget, TokenWidget) and introduced subrequest to vocabulary action. @giuliaghisini

### Feature

- Add autocomplete Widget component - It holds off the vocabulary endpoint pull until you search (more than 2 chars). Useful when dealing with huge vocabularies @sneridagh @reebalazs

### Bugfix

- Add missing layout view for document_view @MarcoCouto

## 14.0.0-alpha.41 (2021-12-13)

### Feature

- Add catalan translation @bloodbare @sneridagh
- Added `.storybook` setup in the Volto `app` generator. Volto projects
  generated from this scafolding are now ready to run Storybook for the project
  and develop addons (in `src/addons` folder).
- Add new listing block option "fullobjects" per variation @ksuess
- Style checkboxes @nileshgulia1
- Allow loading .less files also from a Volto project's `src` folder. @tiberiuichim
- Allow loading .less files also from a Volto project's `src` folder. @tiberiuichim

### Bugfix

- Udate demo address @ksuess
- Update list of trainings documentation @ksuess
- Scroll to window top only when the location pathname changes, no longer take the window location search parameters into account. The search page and the listing block already use custom logic for their "scroll into view" behaviors. @tiberiuichim

### Internal

- Update to plone.restapi 8.16.2 (revert missing_value PR) @sneridagh
- Update all requirements and the reasoning behind them in builds @sneridagh
- Update Plone version in api backend to 5.2.6. Update README and cleanup @fredvd
- Various local development build improvements @rpatterson
- Document CI changelog verifier failure details that mislead contributors
- Document CI changelog verifier failure details that mislead contributors @rpatterson
- Updated italian translation @pnicolli

## 14.0.0-alpha.40 (2021-12-01)

### Bugfix

- In search block, read SearchableText search param, to use it as search text input
  @tiberiuichim
- Fix missing translation in link content type @iRohitSingh
- Fixed drag-and-drop list placeholder issues @reebalazs

## 14.0.0-alpha.39 (2021-11-30)

### Bugfix

- QuerystringWidget more resilient on old schemas @nzambello

## 14.0.0-alpha.38 (2021-11-30)

### Bugfix

- Use subrequest in hero block to not lost locking token. @cekk
- Always add lang attr in html @nzambello
- Fix time widget position on 24h format @nzambello

### Internal

- Remove getNavigation from Login.jsx @iRohitSingh
- Allow listing block to be used in non-content pages (when used in a slot it
  shouldn't crash on add/edit pages) @tiberiuichim
- Fix typo "toolbalWidth" @iRohitSingh

## 14.0.0-alpha.37 (2021-11-26)

### Bugfix

- Fixed object browser selected items number. @giuliaghisini
- Fix action vocabularies call avoiding regex look behind @nzambello

### Internal

- Fix select family widgets stories in storybook @sneridagh

## 14.0.0-alpha.36 (2021-11-25)

### Bugfix

- Fix regression in actions vocabularies calls because the change to use contextual schemas @sneridagh
- Include block schema enhancers (main block schema enhancer + variation schema enhancer) when calculating block default data @tiberiuichim

### Internal

- Fix references to old configuration style in apiExpanders documentation @tiberiuichim
- Add `applySchemaDefaults`, in addition to `applyBlockDefaults`, to allow reuse in object widgets and other advanced scenarios @tiberiuichim

## 14.0.0-alpha.35 (2021-11-24)

### Bugfix

- Fix `isInternalURL` when `settings.internalApiPath` is empty @tiberiuichim
- Fix external link not supported by Navigation component #2853. @ericof
- Get Add/Edit schema contextually #2852 @ericof

### Internal

- Upgrade p.restapi to 8.15.2 @sneridagh

## 14.0.0-alpha.34 (2021-11-20)

### Feature

- Apply form defaults from RenderBlocks and block Edit using a new helper, `applyBlockDefaults` @tiberiuichim
- Now each block config object can declare a schema factory (a function that can produce a schema) and this will be used to derive the default data for the block @tiberiuichim

## 14.0.0-alpha.33 (2021-11-20)

### Bugfix

- Fix downloadableObjects default value @giuliaghisini
- Folder contents table header and breadcrumbs dropdown now appear only from the
  bottom, fixing an issue where the breadcrumb dropdown content was clipped
  by the header area @ichim-david
- Folder contents sort dropdown is now also simple as the other dropdowns
  ensuring we have the same behavior between adjecent dropdown @ichim-david
- Fix documention on block extensions, replace `render` with `template` to match Listing block @tiberiuichim

### Internal

- Upgrade stylelint to v14 (vscode-stylelint requires it now) @sneridagh
- Add several more stories for Storybook @tiberiuichim
- Add 2 new Volto websites by Eau de web for EEA @tiberiuichim

## 14.0.0-alpha.32 (2021-11-09)

### Breaking

- Listing block no longer use `fullobjects` to retrieve backend data. It uses the catalog data instead. @plone/volto-team

### Internal

- Updated i18n link into the README file @macagua
- Updated Spanish translations @macagua
- Remove bundlesize @tisto
- Upgrade plone.restapi from 8.12.1 -> 8.13.0 @tisto

## 14.0.0-alpha.31 (2021-11-07)

### Feature

- Added LinkMore component and link more in HeroImageLeft block. @giuliaghisini

### Bugfix

- Fix the selection of Maps Block @iRohitSingh
- UniversalLink: handle direct download for content-type File if user is not logged. @giuliaghisini
- Fixed ObjectBrowserWidget when is multiple or maximumSelectionSize is not set @giuliaghisini
- Fix full-width image overlaps the drag handle @iRohitSingh
- Fix move item to top of the folder when clicking on move to top action button @iRohitSingh

### Internal

- Removing the hardcoded default block type from text block @iRohitSingh
- updated Volto sites list @giuliaghisini
- Cleanup dangling virtualenv files that should not be committed @pnicolli
- Improve italian translation @pnicolli

## 14.0.0-alpha.30 (2021-11-07)

### Feature

- Support typescript usage in Volto sites @pnicolli

## 14.0.0-alpha.29 (2021-11-06)

### Bugfix

- Fix reset pagination in searchblock when changing facet filters @tiberiuichim

## 14.0.0-alpha.28 (2021-11-03)

### Feature

- Defaults are observed in block data if `InlineForm` or `BlockDataForm` are used. @sneridagh @tiberiuichim

## 14.0.0-alpha.27 (2021-11-02)

### Breaking

- Use title instead of id as a source of translation in "Variation" field in block enhancers @sneridagh

## 14.0.0-alpha.26 (2021-11-01)

### Feature

- Provide Server-Side Rendering capabilities for blocks with async-based content (such as the listing block). A block needs to provide its own `getAsyncData` implementation, which is similar to an `asyncConnect` wrapper promise. @tiberiuichim @sneridagh

## 14.0.0-alpha.25 (2021-11-01)

### Feature

- FormFieldWrapper accepts now strings and elements for description @nzambello
- Image block:
  - When uploading an image or selecting that from the object browser, Image block will set an empty string as alternative text @nzambello
  - Adds a description to the alt-tag with w3c explaination @nzambello

### Bugfix

- Fix disable mode of `QuerystringWidget` when all criteria are deleted @kreafox

### Internal

- Add RawMaterial website in Volto production sites @nzambello

## 14.0.0-alpha.24 (2021-10-29)

### Feature

- Support Node 16 @timo

### Bugfix

- Prevent ua-parser-js security breach. See: https://github.com/advisories/GHSA-pjwm-rvh2-c87w @thet
- Fix storybook errors in the connected components, api is undefined. Using now a mock of the store instead of the whole thing @sneridagh
- CSS fix on `QueryWidget` to prevent line jumping for clear button when the multi selection widget has multiple items @kreafox

## 14.0.0-alpha.23 (2021-10-21)

### Feature

- Enable to be able to use the internal proxy in production as well @sneridagh

### Bugfix

- Fix loading of cookie on SSR for certain requests, revert slight change in how they are loaded introduced in alpha 16 @sneridagh

## 14.0.0-alpha.22 (2021-10-20)

### Breaking

- Improve mobile navigation menu with a nicer interaction and a fixed overlay with a drawer (customizable via CSSTransitionGroup) animation @sneridagh

### Internal

- Add locales to existing block variations @sneridagh

## 14.0.0-alpha.21 (2021-10-17)

### Feature

- In the search block, allow editors to specify the sort on criteria.
  @tiberiuichim
- Updated Volto production sites list @giuliaghisini

### Bugfix

- Bugfixes to search block. By default search block, when empty, makes a simple
  query to the nav root, to list all content. Fix reading search text from URL.
  Implement a simple compression of URL. Don't count searched text as filter.
  Fix an edge case with showSearchInput in schema. Rename title to Section
  Title in facet column settings. Avoid double calls to querystring endpoint.
  @tiberiuichim
- Use correct shade of black in Plone logo @sneridagh

## 14.0.0-alpha.20 (2021-10-15)

### Breaking

- Revisited, rethought and refactored Seamless mode @sneridagh
  For more information, please read the deploying guide
  https://docs.voltocms.com/deploying/seamless-mode/

and the upgrade guide
https://docs.voltocms.com/upgrade-guide/

### Bugfix

- Fixed SelectWidget: when there was a selected value, the selection was lost when the tab was changed. @giuliaghisini

## 14.0.0-alpha.19 (2021-10-15)

### Feature

- Make VocabularyTermsWidget orderable @ksuess
- Get widget by tagged values @ksuess

## 14.0.0-alpha.18 (2021-10-11)

### Internal

- Re-release last release, since it does not show on NPM @sneridagh

## 14.0.0-alpha.17 (2021-10-11)

### Breaking

- Fix logout action using the backend @logout endpoint, effectively removing the `__ac` cookie. It is recommended to upgrade to the latest p.restapi version to take full advantage of this feature @sneridagh

### Bugfix

- Add spinner on sharing View Button @iRohitSingh

## 14.0.0-alpha.16 (2021-10-10)

### Bugfix

- Yet another attempt at fixing devproxy. Split the devproxy into a separate
  express middleware. Introduce the `DEBUG_HPM` env var to make the devproxy
  verbose @tiberiuichim

## 14.0.0-alpha.15 (2021-10-10)

### Breaking

- Adjusted main `Logo` component styling @sneridagh

For more information, please read the upgrade guide
https://docs.voltocms.com/upgrade-guide/

### Feature

- Add `volto-guillotina` addon to core @sneridagh

### Internal

- Improved developer documentation. Proof read several chapters, most importantly the upgrade guide @ichim-david
- Use Plone logo (Closes #2632) @ericof
- Updated Brazilian Portuguese translations @ericof
- Footer: Point to plone.org instead of plone.com @ericof
- Fix "make start-frontend" @tisto
- Update all the tests infrastructure for the new `volto-guillotina` addon @sneridagh

## 14.0.0-alpha.14 (2021-10-01)

### Bugfix

- Get `blocks` and `blocks_layout` defaults from existing behavior when enabling TTW editable DX Layout @avoinea

### Internal

- Add development dependency on use-trace-update, useful for performance debugging @tiberiuichim
- Upgrade to `@plone/scripts` 1.0.3 @sneridagh

## 14.0.0-alpha.13 (2021-09-30)

### Feature

- Add the new search block @tiberiuichim @kreafox @sneridagh

## 14.0.0-alpha.12 (2021-09-29)

### Bugfix

- Show correct fieldname and not internal field id in Toast error messages on Add/Edit forms @jackahl
- sitemap.xml.gz obeys Plone Search settings @erral

### Internal

- Use plone.volto instead of kitconcept.volto @tisto
- Silence customization errors, they are now behind a `debug` library namespace @sneridagh
- Remove recently introduced `RAZZLE_I18NDEBUGMODE` in favor of a `debug` library namespace @sneridagh

## 14.0.0-alpha.11 (2021-09-25)

### Internal

- Use released @plone/scripts, since the builds are broken if it's a local package @sneridagh

## 14.0.0-alpha.10 (2021-09-25)

### Breaking

- New i18n infrastructure in the new `@plone/scripts` package @sneridagh
- Removed `src/i18n.js` in favor of the above change @sneridagh

### Feature

- Add RAZZLE_I18NDEBUGMODE env var and corresponding i18nDebugMode config setting to enable/disable react-intl error messages. @sneridagh

### Bugfix

- Missing default messages from JSON EN language file @sneridagh

## 14.0.0-alpha.9 (2021-09-21)

### Breaking

- Use the block's title as the source of the translation instead of using the id of the block. See upgrade guide for more information @sneridagh

### Bugfix

- Do not show lead image block when the content type does not have the behavior enabled @sneridagh

## 14.0.0-alpha.8 (2021-09-20)

### Bugfix

- Fix logout action, removing the `__ac` cookie as well, if present. @sneridagh

## 14.0.0-alpha.7 (2021-09-20)

### Feature

- Japanese translation updated @terapyon
- German translations updated @tisto

## 14.0.0-alpha.6 (2021-09-20)

### Bugfix

- Fix SSR on /edit with dev proxy @tiberiuichim

## 14.0.0-alpha.5 (2021-09-20)

### Bugfix

- Fix on form errors in block editor, not changing to metadata tab @sneridagh

## 14.0.0-alpha.4 (2021-09-20)

### Internal

- Bring back the `cypress` folder from the npm ignore files, since the libs in there are required and helpful for projects, remove only the `tests` and `fixtures` @sneridagh

## 14.0.0-alpha.3 (2021-09-20)

### Bugfix

- Fix /edit and /add nonContentRoutes to fix isCmsUi fn @giuliaghisini
- Register the dev api proxy after the express middleware @tiberiuichim

### Internal

- Update to latest p.restapi (8.9.1) @sneridagh
- Remove `workingcopy` from checkouts info for kitconcept.volto @sneridagh
- Remove built workingcopy fixture environment based on local, back to docker based one @sneridagh
- Add `omelette` to the local Plone backend build @sneridagh
- Optimize npm package by adding docs/ cypress/ and tests/ to .npmignore @avoinea

## 14.0.0-alpha.2 (2021-09-14)

### Internal

- Revert: Detect when a user has logged in by means other than JWT, such as ZMI `Basic`
  authentication or the classic HTML Plone `@login` view @rpatterson

## 14.0.0-alpha.1 (2021-09-13)

### Breaking

- Detect when a user has logged in by means other than JWT, such as ZMI `Basic`
  authentication or the classic HTML Plone `@login` view @rpatterson

### Bugfix

- Fix SelectWidget vocabulary load on second component mount @avoinea #2655

## 14.0.0-alpha.0 (2021-09-08)

### Breaking

- Remove compatibility for old configuration (based on imports) system. Migrate your configuration to the new configuration system for your project before upgrading to Volto 14. See https://docs.voltocms.com/upgrade-guide/#volto-configuration-registry @sneridagh
- Content locking is not a breaking change, but it's worth noting that Volto 14 comes with locking support enabled by default. Latest `plone.restapi` versions is required. See https://docs.voltocms.com/upgrade-guide/ for more information

### Feature

- Content locking support for Plone (plone.locking) @avoinea

## 13.15.0 (2021-09-07)

### Feature

- Show item title and item type when hovering over item title and item type icon in folder content view @iFlameing
- Change the batch size of folder content @iFlameing
- Show loading indicator for listing view @iFlameing

### Bugfix

- Validate `required` touched-only fields in Form everywhere @nileshgulia1

### Internal

- Add placeholder to WysiwygWidget @nzambello
- Update italian translations @nzambello
- Get SchemaWidget field factories from backend @avoinea

## 13.14.0 (2021-09-02)

### Feature

- Refactor users and groups controlpanel @nileshgulia1

## 13.13.0 (2021-09-01)

### Feature

- Show version in history view @iFlameing
- Contents shows also array indexes @nzambello

### Bugfix

- Fix SearchWidget required `pathname` @avoinea #2645
- Fix for Contents tag modal @nzambello
- Cut/Copy blocks: fixed cut/copy unselected blocks. @giuliaghisini
- Properly style QueryWidget when used standalone, outside of QuerystringWidget @kreafox
- Add location.search as criteria in `ScrollToTop` component @kreafox
- Scroll to top only if the location pathname changes @kreafox

### Internal

- Disabled all the other configuration options when user did not choose any criteria in listing block @iFlameing
- Updated Brazilian Portuguese translations @ericof
- Footer: Point to plone.org instead of plone.com @ericof
- Array and token widget available as named widget @nzambello

## 13.12.0 (2021-08-20)

### Feature

- Multilingual routing was added for sitemap, search, contact-form, change-password, register and password-reset @ionlizarazu
- Opening the search input in the object browser, it will get the focus @nzambello

### Bugfix

- Fix ObjectBrowserNav items key @nzambello
- Fix ObjectBrowserNav aria label: id => title @nzambello
- Fix missing code in `ArrayWidget` from refactored `SelectWidget` @sneridagh

## 13.11.0 (2021-08-18)

### Feature

- Add select utils `normalizerValue`, add state to the basic select field forcing it to be fully controlled @sneridagh

### Bugfix

- Improve consistency of `TokenWidget`'s use of the choice labels as "values" instead of internal uids assigned by `react-select`. @tiberiuichim
- Solve glitch in async loading options in `AsyncSelect` components @sneridagh

### Internal

- Add tests for `Select` component, document the use cases propely @sneridagh
- Upgrade `AsyncSelect` to a version compatible with `react-select` v4 @sneridagh
- Upgrade to latest `react-select` @sneridagh

## 13.10.0 (2021-08-18)

### Feature

- Increase clickable area of right-arrow in objectBrowser @iFlameing
- Prevent form submit when clicking on BlockChooserButton @giuliaghisini
- Make selectedItems Filter work in Contents folder @nileshgulia1

### Bugfix

- Fix SearchWidget search by path @giuliaghisini

## 13.9.0 (2021-08-18)

### Feature

- Removed unnecessary set-cookies for the removal of the authentication cookie when the user is not logged in @mamico
- Add additional classnames for the field wrappers and the fieldsets in forms, this helps to be more addressable in CSS if required @sneridagh

### Bugfix

- Add title/tooltip on Toolbar buttons @avoinea #1384
- Slight CSS fix on `ObjectWidget` for supporting long add element button messages @sneridagh
- Fix the babel view cancel button redirect @iFlameing
- Show toast error when trying to delete item and it's not permitted @danielamormocea

## 13.8.3 (2021-08-16)

### Bugfix

- Prevent form submit when clicking on BlockChooserButton @giuliaghisini
- Add missing `publicURL` to the list of `window.env` serialized variables coming from the hosts configuration to complete the support for seamless mode @sneridagh

## 13.8.2 (2021-07-20)

### Bugfix

- Improve `URLWidget` component, so it uses `flattenToURL` for the value @sneridagh

## 13.8.1 (2021-07-16)

### Bugfix

- Missing prop `properties` passed down required for #2579 to work properly @sneridagh

## 13.8.0 (2021-07-14)

### Feature

- A new component was added, `BlockChooserButton`, it encapsulate the logic of show/hiding the `BlockChooser` @tiberiuichim
- Overload `required` property for blocks config, it supports a function as value taken `properties` (current object data) and `block` (the block being evaluated in `BlockChooser`). The purpose is to enable more control over the available blocks in the Blocks chooser. @sneridagh

### Bugfix

- Add fallback to the "image" field in Image Gallery if the listingPreviewImageField defined in the project is not available on an object @jackahl

## 13.7.0 (2021-07-12)

### Feature

- VocabularyTermsWidget option with translations for config.settings.supportedLanguages @ksuess

### Bugfix

- Fix InlineForm's understanding of missing default values @rexalex
- Guard in `isInternalURL` to catch non-string values @sneridagh

### Internal

- Update `browserlist` DB @sneridagh
- Install `luxon` explicitly to fix `rrule` package flickering deps (yarn problem) @sneridagh
- Add a11y cypress test for table block @ThomasKindermann
- Add Cypress test for Link content type @tisto
- Upgrade plone.restapi to 8.4.1 in the dev buildout @tisto

## 13.6.0 (2021-07-03)

### Feature

- Add VocabularyTermsWidget and map to field with widget attribute set to 'vocabularyterms'. @ksuess

### Bugfix

- added "Complementary" landmark-role to skiplink-container for a11y @ThomasKindermann
- changed breadcrumb link text-color slightly for a11y color contrast @ThomasKindermann
- changed table headline text color to black for a11y @ThomasKindermann

### Internal

- Updated Brazilian Portuguese translations @ericof

## 13.5.0 (2021-06-30)

### Feature

- Add og tags for social sharing @giuliaghisini @nzambello
- Add interface for plone seo extensions to use values added by them as metadata @jackahl

### Internal

- Upgrade to Storybook 6.3, refresh deps version for babel @sneridagh

## 13.4.0 (2021-06-29)

### Feature

- Working copy support for Plone (plone.app.iterate) @sneridagh

## 13.3.1 (2021-06-29)

### Internal

- Remove locales .json files pushed again by mistake, now they are no longer needed to be in the repo, since they are generated at runtime, and included in the released versions @sneridagh

## 13.3.0 (2021-06-29)

### Feature

- Allowing user to paste url in search box in objectBrowser @iFlameing
- Allowing user to click on the breadcrumbs of objectBrowser @iFlameing
- `Navigation` and `Breadcrumbs` are `apiExpanders` aware and run the action depending on them @sneridagh

### Bugfix

- Fixed docs for config.settings.externalRoutes @giuliaghisini
- Fix `Pluggable` in the use case that a `Plug` is empty @sneridagh
- Fix `Login` component navigation for `INavigationRoot` structures @sneridagh
- Hyphenation block chooser labels (no html changes) @ksuess

### Internal

- Bumps prismjs from 1.23.0 to 1.24.0. @timo

## 13.2.2 (2021-06-18)

### Bugfix

- Avoid debugging error in toolbar @tiberiuichim
- Fix the bug related to specific versioning view @iFlameing
- Fix blocks-listing Cypress test @giuliaghisini
- Fix the translation of header in babel view @iFlameing
- Fix German translations for leadimage and listing block @timo
- Show toast success message when adding a new local role @iFlameing
- Bump postcss from 7.0.29 to 7.0.36 @timo
- Complete Spanish translation @erral
- Complete German translation @timo

## 13.2.1 (2021-06-14)

### Bugfix

- Changed 'batch_size' attribute in 'b_size' in querystring widget. @giuliaghisini

### Internal

- Upgrade generator deps @sneridagh

## 13.2.0 (2021-06-12)

### Feature

- Allow passing a schemaEnhancer to QuerystringWidget @tiberiuichim
- Add internal URL blacklist to avoid render custom routes in Volto @nzambello
- In listing blocks, scroll to start of listing block instead page start @giuliaghisini

### Bugfix

- Fix addBreaklinesInline when string ends with new line @giuliaghisini
- Changed 'batch_size' attribute in 'b_size' in querystring widget. @giuliaghisini
- Properly respect batching and result limits in listing block @tiberiuichim
- Changed 'batch_size' attribute in 'b_size' in querystring widget. @giuliaghisini
- Properly respect batching and result limits in listing block @tiberiuichim
- Improve folder_contents workflow state (#2017) @avoinea
- Making placeholder image of video block to take 100% width when it is right or left aligned @iFlameing
- Showing clear icon when title is too long in objectbrowser selected items in multiple mode @iFlameing
- Use querystring prop in ListingBody @giuliaghisini
- Set default value selected for variation in listing block @giuliaghisini

### Internal

- Add [Volta](https://volta.sh) support @nzambello
- Various minor `Makefile` cleanup @rpatterson
- Improve error handling in UniversalLink @nzambello

## 13.1.2 (2021-05-26)

### Internal

- Make the `AddLinkForm` component generic, to allow reuse in volto-slate @tiberiuichim
- Adding hover effect on ObjectBrowserNav icon @iFlameing

## 13.1.1 (2021-05-25)

### Bugfix

- Second try to fix images in dev mode when api path is present (e.g. using the Robot server in Cypress tests) @sneridagh

## 13.1.0 (2021-05-24)

### Feature

- enabled ability to set 'extractScripts' for error pages @giuliaghisini

### Bugfix

- Modify Default and Summary templates to render the LinkMore @ionlizarazu
- Revert #2472, this broke normal development mode images @sneridagh

## 13.0.2 (2021-05-22)

### Bugfix

- Apply the `schemaEnhancer` from the main block even if no variations are found @sneridagh

### Internal

## 13.0.1 (2021-05-18)

### Bugfix

- Backwards compatibility for existing listing blocks with templates @sneridagh

## 13.0.0 (2021-05-18)

### Breaking

- Seamless mode by default in development. Added `Host` header support for production
  deployments, so no `RAZZLE_API_PATH` is required in production builds anymore if the
  header is present. Not an strictly breaking change, but it's a default behavior change
  worth to notice on its own. No change required in your deployments if you suply
  currently `RAZZLE_API_PATH` in build time. See documentation for more information.
  @sneridagh
- Deprecate Node 10 since it's out of LTS since April 30th, 2021 @sneridagh
- Remove the "inverted" option in Table Block since it was useless with the current CSS
  set. Better naming of options and labels in table block (English). Updating the i18n messages for the used translations is advisable, but not required. @iFlameing
- Get rid of the font icons in the control panels overview @sneridagh
- Refactored `src/components/manage/Widgets/QuerystringWidget` using `ObjectWidget` and schemas @sneridagh
- Refactored `Listing` block using the new `src/components/manage/Widgets/QuerystringWidget`. Introducing a new `showLinkMore` block option opt-in for the additional feature instead of always-in. Deprecated `ListingSidebar` and `src/components/manage/Blocks/Listing/QuerystringWidget` in favor of the new `src/components/manage/Widgets/QuerystringWidget` @sneridagh

For a more information, please read the upgrade guide
https://docs.voltocms.com/upgrade-guide/

### Feature

- Compile i18n json locales only at build time on the fly and at release time @sneridagh
- Change login form fixing accessibility issues @nzambello

### Bugfix

- Fix the Listing block with criteria to render correctly on a non-multilingual homepage. @ionlizarazu
- Fix selection of previous block when deleting a block @tiberiuichim
- Disable `Select` components family to lazy load on SSR, since it's breaking and the fix is quite obscure. They are not valuable on SSR responses anyway. @sneridagh
- Fix leftover from the multilingual fix for composed language names @sneridagh @ericof
- Translate 'All' label in Contents view pagination. @giuliaghisini
- Replace `langmap` dependency with internal code that supports composite language names @sneridagh @ericof
- RenderBlocks: Blocks like the listing block need a path. @ksuess
- Normalize language to get the correct filename in lazy imports for composite language names @sneridagh @ericof
- Checkbox not using `null` as false @sneridagh
- Use params prop in api middleware @giuliaghisini
- Fix PORT env var handling, if you have set the PORT in build time, the setting was
  removed back to defaults, now the build time setting is kept (unsetting in build time
  and set it in runtime is now the recommended setup) @sneridagh
- Fix sort_order restapi call, works on action for existing listing blocks
  and in ListingData saving correctly new ones @nzambello
- Fix `contextURL` in `ObjectBrowser` for special (add/edit) views using `getBaseUrl` @sneridagh

### Internal

- Full real zero configuration achievement by turning the stock default
  `RAZZLE_PUBLIC_DIR` into a relative path, so we can enable truly movable builds
  @sneridagh
- Upgrade Cypress to latest @sneridagh
- Remove surge since it's not used anymore @sneridagh
- Upgrade `react-redux` and friends @sneridagh
- Upgrade `yarnhook` and `yarn-deduplicate` @sneridagh
- Add Listing block test for root path @ionlizarazu
- Only log changes to po (`poToJson`) if running as a script @sneridagh
- Remove json locales from the repo to avoid merge conflicts @sneridagh
- All the `Select` components family in core are loaded through `Loadables` helper @sneridagh
- Updated Brazilian Portuguese translations @ericof
- Improve Github Actions names, separate the code analysis from the main core @sneridagh

## 13.0.0-alpha.10 (2021-05-16)

### Bugfix

- Fix the Listing block with criteria to render correctly on a non-multilingual homepage. @ionlizarazu
- Fix selection of previous block when deleting a block @tiberiuichim

### Internal

- Upgrade Cypress to latest @sneridagh
- Remove surge since it's not used anymore @sneridagh
- Upgrade `react-redux` and friends @sneridagh
- Upgrade `yarnhook` and `yarn-deduplicate` @sneridagh
- Add Listing block test for root path @ionlizarazu
- Only log changes to po (`poToJson`) if running as a script @sneridagh

## 13.0.0-alpha.9 (2021-05-13)

### Feature

- Compile i18n json locales only at build time on the fly and at release time @sneridagh

### Internal

- Remove json locales from the repo to avoid merge conflicts @sneridagh

## 13.0.0-alpha.8 (2021-05-12)

### Bugfix

- Disable `Select` components family to lazy load on SSR, since it's breaking and the fix is quite obscure. They are not valuable on SSR responses anyway. @sneridagh

### Internal

- All the `Select` components family in core are loaded through `Loadables` helper @sneridagh

## 13.0.0-alpha.7 (2021-05-11)

### Bugfix

- Fix leftover from the multilingual fix for composed language names @sneridagh @ericof

### Internal

- Updated Brazilian Portuguese translations @ericof

## 13.0.0-alpha.6 (2021-05-11)

### Bugfix

- Translate 'All' label in Contents view pagination. @giuliaghisini
- Replace langmap dependency with internal code that supports composite language names @sneridagh @ericof

## 13.0.0-alpha.5 (2021-05-10)

### Bugfix

- RenderBlocks: Blocks like the listing block need a path. @ksuess
- Normalize language to get the correct filename in lazy imports for composite language names @sneridagh @ericof

### Internal

- Updated Brazilian Portuguese translations @ericof

## 13.0.0-alpha.4 (2021-05-07)

### Breaking

- Refactored `src/components/manage/Widgets/QuerystringWidget` using `ObjectWidget` and schemas @sneridagh
- Refactored `Listing` block using the new `src/components/manage/Widgets/QuerystringWidget`. Introducing a new `showLinkMore` block option opt-in for the additional feature instead of always-in. Deprecated `ListingSidebar` and `src/components/manage/Blocks/Listing/QuerystringWidget` in favor of the new `src/components/manage/Widgets/QuerystringWidget` @sneridagh

For a more information, please read the upgrade guide
https://docs.voltocms.com/upgrade-guide/

### Bugfix

- Checkbox not using `null` as false @sneridagh

## 13.0.0-alpha.3 (2021-05-06)

### Bugfix

- Use params prop in api middleware @giuliaghisini

- Fix PORT env var handling, if you have set the PORT in build time, the setting was
  removed back to defaults, now the build time setting is kept (unsetting in build time
  and set it in runtime is now the recommended setup) @sneridagh

## 13.0.0-alpha.2 (2021-05-05)

### Bugfix

- Fix sort_order restapi call, works on action for existing listing blocks
  and in ListingData saving correctly new ones @nzambello

### Internal

- Updated Brazilian Portuguese translations @ericof

## 13.0.0-alpha.1 (2021-05-03)

### Internal

- Full real zero configuration achievement by turning the stock default
  `RAZZLE_PUBLIC_DIR` into a relative path, so we can enable truly movable builds
  @sneridagh

## 13.0.0-alpha.0 (2021-05-03)

### Breaking

- Seamless mode by default. Added `Host` header support for deployments, so no
  `RAZZLE_API_PATH` is required in production builds anymore if the header is present.
  Not an strictly breaking change, but it's a default behavior change worth to notice on
  its own. No change required in your deployments if you suply currently
  `RAZZLE_API_PATH` in build time. See documentation for more information. @sneridagh
- Deprecate Node 10 since it's out of LTS since April 30th, 2021 @sneridagh
- Remove the "inverted" option in Table Block since it was useless with the current CSS
  set. Better naming of options and labels in table block (English). Updating the i18n messages for the used translations is advisable, but not required. @iFlameing
- Get rid of the font icons in the control panels overview @sneridagh

For a complete list of actions to follow, please read the upgrade guide
https://docs.voltocms.com/upgrade-guide/

### Feature

- Change login form fixing accessibility issues @nzambello

### Internal

- Improve Github Actions names, separate the code analysis from the main core @sneridagh

## 12.14.0 (2021-05-03)

### Feature

- Provide api for block extensions. See `/blocks/extensions` in documentation @tiberiuichim

### Bugfix

- In BlockDataForm, always clone schema before applying enhancers @tiberiuichim
- In BlockDataForm, don't add the variations field multiple times @tiberiuichim

## 12.13.0 (2021-04-30)

### Feature

- Making objectBrowserWidget context aware @iFlameing

### Bugfix

- Adding `flattenToAppURL` in Link component @iFlameing

- Disable click event of the outside the engine click detection, since it leads to bad
  behavior for custom and library elements that try to mount things attaching them in
  the Body or outside the detected container @sneridagh

## 12.12.0 (2021-04-29)

### Feature

- Translations german: Login/Register @ksuess

### Bugfix

- Fix image gallery in listing block for contained (non-query based) images @sneridagh

## 12.11.0 (2021-04-28)

### Feature

- Implemented Babel view, to compare translated items in add and edit mode. @giuliaghisini
- as in Plone, hide controlpanel for users that are no 'Manager' or 'Site Administrator'. @giuliaghisini
- Improve the blocks engine by adding a detector for clicking outside in the `BlocksForm` @sneridagh
- Include a pluggable architecture for pluggable render-time insertions (similar to <Portal>) @tiberiuichim
- Add parseDateTime helper from DatetimeWidget to handle timezones @nzambello

### Bugfix

- Include selected block in multiselections @sneridagh
- Correct the selected values rendering at isMulti SelectWidget @ionlizarazu

### Internal

- Implement Github actions workflow to deploy the documentation to the Plone Foundation server @ericof
- Pin `immutable` to an updated version that does not produce continuous deprecation notices in console on every change @sneridagh
- Print console.error in SSR if not an ignored error code @nzambello
- Fetch addons with https using mrs-developer @nzambello
- Fix sitemap URL generation @nzambello

## 12.10.1 (2021-04-14)

### Bugfix

- Better error handling code in SSR when an error occurs in the code @ksuess @sneridagh

## 12.10.0 (2021-04-14)

### Feature

- Add support in FileWidget for raw file data in base64 (control panels, not really NamedFile fields) @sneridagh

### Bugfix

- ObjectListWidget: edit mode: expand last added item, not first of list. @ksuess
- Improve error handling in SSR when an error occurs in the code @sneridagh

### Internal

- Ignore files in addons when building i18n messages in the i18n script, since it's useless (they should be done in the addon itself) and lead to errors when parsing also internal `node_modules` and other utility files @sneridagh

## 12.9.0 (2021-04-10)

### Bugfix

- Avoid double calling asyncPropsExtenders @ksuess @tiberiuichim

### Internal

- Fix server when ECONNRESET is received from the backend @sneridagh
- Remove all appearences of `UNSAFE_componentWillMount` since it loads also on the SSR calls too @sneridagh

## 12.8.0 (2021-04-08)

### Feature

- Add configurable api expanders @csenger @nileshgulia1 @tiberiuichim @sneridagh
- In Text block, keep text selection on focus, and move focus to end of text if there's no selection @giuliaghisini

### Bugfix

- Fix `fieldset` instead of `fieldSet` in ObjectWidget component @sneridagh

## 12.7.0 (2021-04-07)

### Feature

- Use `onInsertBlock` callback when adding new blocks if available, otherwise fallback to `onMutateBlock` refs #2330 @avoinea

### Bugfix

- fix universal link @nileshgulia1s
- fixed recurrence widget when weekly recurrence is selected and event start date is on sunday. @giuliaghisini
- Fix default value for checkbox widget @alexbueckig
- Fix for forms in content types, the fieldset was not being passed over to the field. This affected form generation ids and labels. @sneridagh
- Add a bit of a11y love to the `ObjectListWidget` @sneridagh
- fix universal link when no item content obj passed @nileshgulia1

### Internal

- Add Blocks helpers docs and tests @avoinea

## 12.6.1 (2021-04-06)

### Bugfix

- Remove duplicated wrapper on block edit form @sneridagh
- Fix small catched up issues in tests @sneridagh

## 12.6.0 (2021-04-05)

### Feature

- Add ObjectWidget and ObjectListWidget @sneridagh
- Add `BlockForm` component, variations and schemaExtender aware @sneridagh
- Improvements to the `InlineForm` @sneridagh

### Bugfix

- Remove InlineForm default focus on first input @avoinea

### Internal

- Add Storybook to the main docs (docs.voltocms.com/storybook) build @sneridagh

## 12.5.0 (2021-03-31)

### Feature

- New setting, `config.settings.showTags` to be able to configure tags visibility on default View @avoinea

### Bugfix

### Internal

- Add toPublicURL helper @nzambello
- Don't show empty groups in BlockChooser @tiberiuichim
- Fix Text Block placeholder regression refs #2322 @avoinea

### Internal

- BlocksForm and RenderBlocks now allow a `blocksConfig` configuration object as a prop @tiberiuichim
- Updated italian translations @nzambello

## 12.4.2 (2021-03-29)

### Bugfix

- Re-add formTitle, formDescription, metadata to BlocksForm @avoinea

## 12.4.1 (2021-03-29)

### Bugfix

- Fixed InlineForm boolean false value @razvanMiu
- Fix warning message in console, move open/close detection to the aside itself @sneridagh
- Revert SidebarPortal min-height @avoinea
- Add proper proptype in `SidebarPopup` @sneridagh

### Internal

- Update plone/volto Docker image to use latest yo generator and support ADDONS env @avoinea
- Add `docker-compose.yml` to the repo for quick demoing @sneridagh
- Fixed babel config when loading addons (in testing mode) @sneridagh

## 12.4.0 (2021-03-25)

### Feature

- Improved comments @rexalex @avoinea
- Added SidebarPopup component for extra sidebar handling @avoinea
- Use SidebarPopup component in place of CSS transition sidebar @nileshgulia1

### Bugfix

- Fixed multiSelected propType and BlocksForm multiSelected.includes @avoinea
- Fixed italian translations for block `Maps` @giuliaghisini
- Fixed SidebarPortal min-height @avoinea
- Fixed CheckboxWidget state @razvanMiu

### Internal

- Upgrade API to Plone 5.2.4 and p.restapi 7.1.0 @sneridagh
- Reorganization of the Cypress tests, now they live in `cypress/tests` @sneridagh
- Splitted Cypress tests into `core` tests and `guillotina` ones for better overall handling @sneridagh

### Docs

- Update internal proxy docs @nzambello

## 12.3.0 (2021-03-18)

### Feature

- Improve `ObjectBrowserWidget` adding a manual input field and allow external URLs. Add feature to paste internal URLs and convert them to selected objects. Added the `allowExternals` prop in order to allow this behavior (opt-in).

### Bugfix

- Fix storybook initial config registry setup @sneridagh
- Search page now follows Plone's ISearchSchema settings @tiberiuichim
- Improve `ContextNavigation` component, adding the level you are in each iteration @sneridagh

### Internal

- Add testing add-on for enable special testing use cases and configuration options @sneridagh
- Add `RAZZLE_TESTING_ADDONS` environment variable for adding addons for testing purposes @sneridagh
- Add "Humboldt Labor" to show cases.
- Updated "Volto in Production" list @alecghica

### Docs

- Explicitly mention `src/config` in the "Internal proxy to API" documentation @pigeonflight

## 12.2.0 (2021-03-03)

### Feature

- Adds skiplinks @nzambello
- Fix some semantic tags as nav @nzambello
- Allow addons to specify their own dependencies in their package.json `addons` key, just like the regular Volto projects. This means that it's no longer required to list all possible addons in the Volto project and they can be bootstrapped as being part of a dependency @tiberiuichim
- insert a dimmer with the loading message in the form when the status changes in the content folder. @martina.bustacchini

### Bugfix

- Enable draftjs links to open in target blank if is external url. @giuliaghisini

### Internal

- Use correct status code for static files error handling @nzambello
- Remove dangling `.replaces(...` for the apiPath and use flattenToAppURL instead @sneridagh

## 12.1.2 (2021-02-28)

### Bugfix

- Fix addon reducers registration @tiberiuichim

## 12.1.1 (2021-02-26)

### Bugfix

- Import asyncConnected actions directly from actions module, the resolution order is different in projects @tiberiuichim @avoinea

## 12.1.0 (2021-02-24)

**This is a brown bag release and should not be used, upgrade to Volto 12.1.1 instead.**

### Feature

- A new setting, `config.settings.storeExtenders` which allows customization of used Redux middleware @tiberiuichim
- Introduce `config.settings.asyncPropsExtenders` which allows customizing, per route, the `asyncConnected` actions @tiberiuichim @sneridagh

### Bugfix

- Adapt to BlocksForm in Blocks Engine @nileshgulia1
- a11y improvements in `ObjectBrowser` and `BlockChooser` @sneridagh
- Fix UniversalLink for download link. @giuliaghisini

### Internal

- Fork redux-connect code in `src/helpers/AsyncConnect`, to allow mixing in config-based asyncConnects. Provide a webpack alias that overloads the redux-connect imports. @tiberiuichim

### Docs

- Update wording @svx

## 12.0.0 (2021-02-20)

### Breaking

- Introduction of the new Volto Configuration Registry @sneridagh @tiberiuichim
  For more information about this breaking change: https://docs.voltocms.com/upgrade-guide/#upgrading-to-volto-12xx

### Feature

- New breadcrumbs `INavigationRoot` aware for the _Home_ icon. This allows inner subsites navigation and better support for multilingual sites. @sneridagh

### Internal

- Upgrade plone.restapi to 7.0.0 and Plone to 5.2.3 @sneridagh

## 12.0.0-alpha.0 (2021-02-17)

### Breaking

- Introduction of the new Volto Configuration Registry @sneridagh @tiberiuichim
  For more information about this breaking change: https://docs.voltocms.com/upgrade-guide/#upgrading-to-volto-12xx

## 11.1.0 (2021-02-08)

### Feature

- Add `preloadLazyLibs` and `settings.lazyBundles` to allow preloading bundles of lazy libraries @tiberiuichim @silviubogan
- Added onChangeFormData prop to Form component @giuliaghisini
- Internationalization story for add-ons @sneridagh
- robots.txt from plone as fallback (if /public/robots.txt not exists and .env VOLTO_ROBOTSTXT variable not exists.) @giuliaghisini
- UniversalLink and ConditionalLink accepts also an item to link to. If item is of @type Link, a direct link to remote url is generated if user is not logged. @giuliaghisini

### Bugfix

- temporarly removed linkDetectionPlugin for draftjs (for some conflicts with AnchorPlugin) @giuliaghisini
- German translation: aria-label of '/contents' button : "Inhalte" not "Inhaltsverzeichnis" @ksuess
- fix view links and others styles of entities on editing Text Block. @giuliaghisini
- Make sidebar-collapsed visible on small mobile. @giuliaghisini
- Fix regresion on the imagesizes styling due to the removal of the id in 11 @sneridagh

### Internal

- Update docs: configuration of routes and addonRoutes @ksuess

## 11.0.0 (2021-01-29)

### Breaking

- [circular deps] Move `AlignBlock` component to its rightful place @sneridagh
- Removing id from FormFieldWrapper @iFlameing
- Change default Listing Template to include only Text and renamed the old default Template to Summary Template @jackahl

### Feature

- Add `ContextNavigation` component, it can fetch the `@contextnavigation` plone.restapi
  endpoint and display a navigation portlet, similar to Plone's classic
  navigation portlet.
- added linkDetectionPlugin plugin to draftjs to automatically create links for urls and mails when editing text. @giuliaghisini
- An initial Storybook setup. Start it with `yarn storybook`. Feel free to contribute more stories! @sneridagh
- Add storybook Wrapper utility component. Add ContactForm initial story @tiberiuichim
- make and load configurable reducers in the client `window.__data`, decreasing the html size @nileshgulia1 @tiberiuichim
- Custom group component for selectStyling @nileshgulia1
- Add new components: RenderBlocks, BlocksForm, DragDropList and EditBlockWrapper @tiberiuichim
- Add `noValueOption` prop to `SelectWidget` so you can opt-out from the "no-value" option so the choices are a closed list @sneridagh
- Provide `injectLazyLibs()` wrapper and `settings.loadables` config to deal with loadable libraries @tiberiuichim

### Bugfix

- Better handling of a condition in the new breadcrumbs @sneridagh

### Internal

- Upgrade react-select to 4.0.2 @sneridagh
- Upgrade react ecosystem to 13.14.0 @sneridagh
- Add shouldComponentUpdate to blocks @nileshgulia1
- Update old entry in upgrade guide @tiberiuichim
- Add `@testing-library/cypress` as a dep @sneridagh
- Fix an internal link in documentation @tiberiuichim

## 10.10.0 (2021-01-22)

### Feature

- Simple optional critical-CSS inclusion feature (without the actual building of
  the critical CSS) @silviubogan @tiberiuichim @nileshgulia1
- added support for allowedBlocks and showRestricted for BlockChooser in Form @giuliaghisini
- added objectBrowser to UrlWidget, and attached UrlWidget to remoteUrl field of ContentType Link @giuliaghisini
- managed tel link in UrlWidget and draftjs @giuliaghisini
- added support for allowedBlocks and showRestricted for BlockChooser in Form @giuliaghisini
- Improvements in InlineForm @nileshgulia1
- Improved form validation. Tested required fields when field is array or richtext @giuliaghisini

### Bugfix

- Fix 'All' button batch size in Contents @nzambello
- Fixed field type for 'from' field in ContactForm @giuliaghisini
- handle SelectWidget null value and isMulti(#1915) &(1878) @nileshgulia1
- Fix typo in ita locales @nzambello
- Wrap objectBrowserWidget with FormFieldWrapper @nileshgulia1
- Added preventDefault and stopPropagation for toolbar buttons of Table block. @giuliaghisini
- Fix `Contents` breadcrumbs for multilingual sites @sneridagh

### Internal

- Add support for `nav_title` in breadcrumbs and navigation @sneridagh
- Add `settings.serverConfig` in the settings object of `~/config`. Add another module, `config/server.js` which is conditionally imported if `__SERVER__`. This module will host settings that are only relevant to the server. Being conditionally imported means that the code is safe to require server-only nodejs packages. @tiberiuichim
- Update browserlist and caniuse-lite @sneridagh
- Document deprecation of `@plone/create-volto-app` @sneridagh @nileshgulia1
- Adding classname in TextWidget and ObjectBrowserBody so that we can target those element in tests. @iFlameing
- Add support for `nav_title` in breadcrumbs and navigation @sneridagh

## 10.9.2 (2021-01-15)

### Bugfix

- Make a cypress test more resilient to platform differences @tiberiuichim
- Fix regression introduced by improve CSS in the inner toolbar for the image block to support narrower width (like for using it inside grid blocks) @sneridagh
- Avoid a bug in cypress tests caused by multi-block copy/paste @tiberiuichim

### Internal

- i18n for a literal in the table block @sneridagh

## 10.9.1 (2021-01-14)

### Bugfix

- Fix regression introduced by improve CSS in the inner toolbar for the image block to support narrower width (like for using it inside grid blocks) @sneridagh

## 10.9.0 (2021-01-14)

### Feature

- Enhance `BlockChooser` by adding support for `allowedBlocks` and `showRestricted` @avoinea @sneridagh

### Bugfix

- Better handling of @@images pipeline errors @tiberiuichim
- Fix `More` menu when using with Plone 4 backend / history action is undefined (#2120) @avoinea
- Fix `/sharing` page when using with Guillotina (#2122) @avoinea
- Improve CSS in the inner toolbar for the image block to support narrower width (like for using it inside grid blocks) @sneridagh

### Internal

- Move express middleware routes (sitemap, download, images and robotstxt) out of server.jsx into their own `express-middleware/*.js` modules. All express middleware now has access to the redux store, api middleware and an errorHandler, available under `req.app.locals` @tiberiuichim

## 10.8.0 (2021-01-11)

### Feature

- Add proper icons to the table block @sneridagh

### Internal

- Add `packages` directory to the `modulePathIgnorePatterns` for the jest tests @sneridagh
- Add `packages` directory in npmignore @sneridagh

## 10.7.0 (2021-01-05)

### Feature

- Lazy load image in blocks Image and HeroImage @mamico

### Bugfix

- Fix redirection for Link objects. @cekk
- Fix import order in server.jsx. @cekk @tiberiuichim
- Make sentry config more resilient to edge cases (SPA, storybook) @sneridagh
- Handle errors on file and image download (#2098) @cekk
- Remove test dependant on the year in `Copyright` footer section @sneridagh
- Increase maxResponseSize for superagent calls. Now is 500mb (#2098) @cekk

### Internal

- Translations german: Unauthorized, Login/Register @ksuess
- Removing id from FormFieldWrapper @iFlameing

## 10.6.1 (2020-12-21)

### Bugfix

- Better API helper end request handling, since the existing one was causing problems and rendered the SSR server unusable in case of the request was rejected @sneridagh

### Internal

- Add a paragraph on dealing with CORS errors in Deploying doc page @tiberiuichim
- Remove useless RobotFramework related packages, keep only the minimum required ones @sneridagh
- Updated italian translations @nzambello

## 10.6.0 (2020-12-18)

### Feature

- Allow setting a custom robots.txt from environment with the `VOLTO_ROBOTSTXT` environment variable @tiberiuichim

### Bugfix

- Replace `__SERVER__` occurrence from table `Edit` component @sneridagh

## 10.5.0 (2020-12-17)

### Feature

- Adding `All` button to folder content @iFlameing

### Bugfix

- Fix "is client" check for SidebarPortal @tiberiuichim @sneridagh

## 10.4.3 (2020-12-15)

### Internal

- Bring back `App` to `components/index.js` for now, since it's breaking the projects
  where it gets referenced from `routes.js`. @sneridagh

## 10.4.2 (2020-12-15)

**This is a brown bag release and should not be used, upgrade to Volto 10.4.3 instead.**

### Bugfix

- Fix numeric widget console warnings regarding flex styling refs #2059 @ichim-david
- Fix numeric widget crash once we click inside it refs #2059 @ichim-david

### Internal

- Fix some key points to improve the circular imports problem @sneridagh

  - `App` and `View` components are meant to be used only by Volto internals, so it's no
    point into having them exported in `components/index.js` that facilitated a path for
    circular imports.
  - `withObjectBrowser` and friends also are prone to facilitate a path for having
    circular imports, so we are using there only absolute imports.
  - All these changes are non-breaking and non-intrusive.

## 10.4.1 (2020-12-12)

### Bugfix

- Make sure that prism is loaded before rendering HTML block @tiberiuichim

## 10.4.0 (2020-12-11)

### Feature

- Add ability to filter the attributes that are saved in the ObjectBrowserWidget @sneridagh
- Add `object_browser` as widget @sneridagh

### Bugfix

- Adding video thumbnail for the .mp4 extension @iFlameing.

### Internal

- Added new in productions sites to README @terapyon

## 10.3.0 (2020-12-04)

### Feature

- added search depth in listing and updated it locales @giuliaghisini
- Add emailSend action @nzambello
- lazy load react-dropzone @nileshgulia1

### Bugfix

- Fix addons loader name generation on Windows @tiberiuichim
- For python3.9 compatibility, install wheel package in build-backend targets @tiberiuichim

### Internal

- Tweak Cypress command `waitForResourceToLoad` to timeout after 50 tries. @tiberiuichim

## 10.2.0 (2020-12-04)

### Feature

- Generate language file of added missing German translations by @tisto. @ksuess

### Bugfix

- Fix regression in the `getContent` action with the expandable missing @sneridagh

## 10.1.0 (2020-11-30)

### Feature

- Add missing German translations @tisto

## 10.0.0 (2020-11-30)

### Feature

- Provide operations on multiple-selected blocks: delete, cut/copy and paste. You can trigger the "multiselected blocks" by holding the shift key and clicking on another block. You can add/remove blocks to the selection with the Control key. Holding Control when you click on the Paste button doesn't clear the clipboard, so you can paste multiple times. The blocks clipboard uses the browser's local storage to synchronize between tabs. @tiberiuichim
- Allow reducers to be persisted using localstorage @tiberiuichim

### Breaking

- Removal of the Razzle patch that was introduced in 9.0.0 @sneridagh
  See https://docs.voltocms.com/upgrade-guide/ for more details.
- Fetched content with `getContent` no longer includes fullobjects by default @tiberiuichim

### Bugfix

- Fix link to login in the Unauthorised component @sneridagh

### Internal

- Add details on how to run Cypress integration tests @tiberiuichim
- Upgrade `@testing-library/react` to 11.2.2. Add `jest-environment-jsdom-sixteen as upgraded jsdom implementation @tiberiuichim
- Split some small prismjs related files (used in HTML block) in separate chunks @tiberiuichim
- Remove dangling analyzer plugin @sneridagh
- Support for Guillotina 6 @bloodbare @sneridagh
- Update Cypress to version 5.6.0 @sneridagh
- Terse `react-intl` errors in console during development turning them into warnings @sneridagh

## 9.2.0 (2020-11-24)

**This is a brown bag release and should not be used, upgrade to Volto 10.x.x instead.**
See https://docs.voltocms.com/upgrade-guide/ for more information.

### Feature

- Remove the Razzle patch for the local, "inline" Volto Razzle plugins @tiberiuichim @sneridagh

### Bugfix

- Move missplaced `appExtras` into settings @sneridagh

### Internal

- Make filewidget label more consistent @tisto

## 9.1.0 (2020-11-20)

### Feature

- Extend the internal proxy capabilities, now the target is overridable and SSL aware @sneridagh
- Added new environment variables for the internal proxy `RAZZLE_PROXY_REWRITE_TARGET` and `RAZZLE_PROXY_REWRITE_TARGET` @sneridagh
- Enhance `AppExtras` component to make it pluggable through the
  `config.settings.appExtras`. These are router-path filtered components that
  are rendered inside the `AppExtras` component @tiberiuichim

### Bugfix

- Fix Sentry tags and extra via settings.sentryOptions @avoinea
- Fix `yarn analyze` command by packing our own version of
  webpack-bundle-analyzer integration. It has a few changes to the old default
  configuration. There is an alternative way of triggering the bundle analyzer,
  with the `OFFLINE_BUNDLE_ANALYZE=true` env variable, which avoids starting
  the HTTP bundle analyzer server. Also, it always saves a report html file.
  @tiberiuichim

### Internal

- Improve developer documentation. Add several new chapters @tiberiuichim

## 9.0.0 (2020-11-15)

### Breaking

- Upgrade Razzle to 3.3.7 @tiberiuichim @sneridagh

  Razzle 3.3.7 prepares the transition to the upcoming Razzle 4 so it improves and
  unifies the extensibility story at the cost of change the signature of the
  `razzle.config.js` and how plugins are declared. It also enables by default the new
  _React Fast Refresh_ feature implemented by the React community, which improves the
  refresh of the code while in development.

- Babel plugins housekeeping

  Deprecated proposals:

  - @babel/plugin-proposal-function-bind
  - @babel/plugin-proposal-do-expressions
  - @babel/plugin-proposal-logical-assignment-operators
  - @babel/plugin-proposal-pipeline-operator
  - @babel/plugin-proposal-function-sent

For a complete list of actions to follow, please read the upgrade guide
https://docs.voltocms.com/upgrade-guide/

### Feature

- Add `webpack-relative-resolver` plugin. For addons and Volto, it normalizes local relative imports to package-rooted imports. An import such as `import Something from './Something'` would be rerouted internally as `import Something from '@collective/someaddon/Something'`. By doing so we get easier customization of addons, as they don't have to be so strict with their import and exports @tiberiuichim
- Posibility to configure Sentry via `settings.sentryOptions` configuration key @avoinea
- Catch `console.error` by default with Sentry @avoinea
- Refactor CT icons helper: add getContentIcons @nzambello

### Bugfix

- Properly return 404, 401 and 403 on SSR, when appropriate @tiberiuichim
- Fix Guillotina PATCH by adding the `@static_behaviors` field inconditionally @sneridagh

### Internal

## 8.10.1 (2020-11-13)

### Bugfix

- Fix leaking input CSS in the link widget in draftjs @sneridagh

### Internal

- Move Guillotina CI job to GH actions @sneridagh

## 8.10.0 (2020-11-12)

### Feature

- Adding show all button in UsersControlpanel @iFlameing
- Now you can prettify the html code in HTML block @iFlameing
- Adding preview image placeholder in Video Block @iFlameing

### Bugfix

- Fix error object in clipboard reducer @iFlameing
- Making QuerystringWidget more resilient by handeling null value @iFlameing
- Fixing bug related to initiation of table block with previous table block data @iFlameing
- enabled no-folderish CT to be translated @giuliaghisini

### Internal

- Changing checkbox widget of exclude-nav to select widget @iFlameing

## 8.9.2 (2020-11-06)

### Bugfix

- Revert type-in detection in draftjs link widget, as that leads to a regression @sneridagh
- Fix and refactoring FileWidget @iFlameing

## 8.9.1 (2020-11-06)

### Bugfix

- Fix SSR rendering in table blocks @sneridagh

## 8.9.0 (2020-11-05)

### Feature

- Added Dropzone in FileWidget @iFlameing
- Making inline link toolbar, location aware in content browser @iFlameing.
- Detect if the link typed or pasted in the link widget of the text block is internal @sneridagh

## 8.8.1 (2020-11-04)

### Bugfix

- Improve misleading translations deleted message @sneridagh
- Fixing overlap of labels with each other in select widget @iFlameing
- Throw error in crashReporter; also log sentry errors in server @tiberiuichim

### Internal

- Split razzle svg and sentry loaders to separate files @tiberiuichim
- prevent form without blocks. Form always have at least the default block. @giuliaghisini
- Fix default target for links in text blocks @giuliaghisini

### Internal

## 8.8.0 (2020-11-02)

### Feature

- Add support for the new active LTS NodeJS version 14. NodeJS 10 eol will happen on 2021-04-30 and Volto will update accordingly. More information on https://nodejs.org/en/about/releases @sneridagh

## 8.7.1 (2020-10-29)

### Bugfix

- Added loading icon when doing actions in folder-contents @giuliaghisini
- Fix German translation "from" -> "E-Mail" in contact form @tisto

## 8.7.0 (2020-10-27)

### Feature

- Manage translations view @sneridagh

### Internal

- Update docs build and include pygments support for jsx @sneridagh

## 8.6.0 (2020-10-25)

### Feature

- Added placeholder background color same as selected one @iFlameing
- Showing notification when user sort the folder-content @iFlameing
- Render full language name (e.g. "English") instead of 2 character language code in language selector, matching Plone default behavior. @mikejmets

### Bugfix

- A pathname like /policy/edit does not show the Unauthorized or Forbidden component when not logged in, ref #1936. @silviubogan
- Fixes secondary views in toolbar @iFlameing @sneridagh
- Fixing overlay expansion during link assign from objectbrowser in edit mode @iFlameing

### Internal

- Added new in productions sites to README @wkbkhard
- Writing test for the lisiting block location relative criteria @iFlameing
- Add `UniversalLink` to handle internal/external/download links @nzambello

## 8.5.4 (2020-10-23)

### Breaking

### Feature

### Bugfix

- Fixing bug for link when inseting break lines in list tag for view mode @iFlameing

## 8.5.3 (2020-10-22)

### Bugfix

- Removed timezone initialization for DatetimeWidget, ref #1923. @razvanMiu

## 8.5.2 (2020-10-21)

### Bugfix

- Showing error notification when user try to paste disallowed content type. @iFlameing

### Internal

- Added environment parameter `RAZZLE_BIND_ADDRESS` to be able to bind server to localhost or other specific IPs instead of 0.0.0.0 @achimwilde

## 8.5.1 (2020-10-21)

### Bugfix

- Fix sharing for when users has dots on them @sneridagh

## 8.5.0 (2020-10-20)

### Bugfix

- Japanese translation updated @terapyon

## 8.5.0-alpha.2 (2020-10-20)

### Bugfix

- Update German translation @ksuess

### Internal

- Fix runtimeConfig relative vs absolute import @avoinea

## 8.5.1-alpha.0 (2020-10-19)

### Feature

- Adding softlinebreak in list tag @iFlameing

### Bugfix

- Errors catched by the default error handler are sent to sentry @zotya
- Fixed a problem what occured when RAZZLE*SENTRY_DSN was missing but the other RAZZLE_SENTRY*\* variables were set @zotya

### Internal

- Fix sentry docs markdown format @avoinea

## 8.5.0-alpha.0 (2020-10-14)

### Feature

- Sentry integration @zotya
- All the environment variables defined at runtime that have the `RAZZLE_` prefix, are now available in the browser under window.env @zotya

## 8.4.0 (2020-10-14)

### Feature

- Add `Style`, a wrapper component that applies float and width classes to wrapped content (typically blocks) @tiberiuichim
- Add `AlignWidget`, a widget that wraps the `AlignBlock` helper @tiberiuichim

### Bugfix

- Folder contents view: Save additional columns and updated order of columns @ksuess
- Fixed edit link in draft-js when link is selected from word-end to word-start @giuliaghisini
- Revert PR No. 1820 to fix linebreaks on inline links in draftJS @steffenri

### Internal

- Keep `@babel/core` in Volto core in sync with `babel-preset-razzle` it fixes #1897 @sneridagh

## 8.3.0 (2020-10-12)

### Feature

- Adding droppable placeholder for Image Block @iFlameing

### Bugfix

- Test if content exists in ListingBody, for addon Dropdownmenu @giuliaghisini

## 8.2.6 (2020-10-12)

### Bugfix

- Fix break-line in view mode @iFlameing

## 8.2.5 (2020-10-08)

### Bugfix

- Fixing the bleed out of the modal for long filename @iFlameing

## 8.2.4 (2020-10-08)

### Bugfix

- Fixing table block edit @iFlameing

## 8.2.3 (2020-10-07)

### Bugfix

- Use Plone `I18N_LANGUAGE` cookie instead of `language` @cekk

## 8.2.2 (2020-10-06)

### Bugfix

- Upgrade react-dropzone from 5.1.0 to 11.1.0 @nileshgulia1
- Update German translations @tisto

## 8.2.1 (2020-10-06)

### Bugfix

- Querystingsearch action now uses correct relative path, if specified. Fixes #1861 @jackahl
- Fixing ObjectBrowser search input reload @iFlameing
- Fix broken current folder by default in content browser for image links, solves #1860 @sneridagh

## 8.2.0 (2020-09-27)

### Feature

- Add Basque translation @erral

### Bugfix

- Added prop resettable to DatetimeWidget @damiDevRT
- Removed the ability to reset the datepicker in the recurrence widget to prevent the uncontrolled creation of recurrences @damiDevRT
- Fix regression in setting selected sidebar tab by blocks @tiberiuichim

## 8.1.1 (2020-09-27)

### Bugfix

- Japanese translation updated @terapyon

## 8.1.0 (2020-09-22)

### Breaking

### Feature

- Create link in Draftjs using Objectbrowser @giuliaghisini

### Bugfix

- Allow select widget to reset when the incoming props change. The react-select widget has its own internal state, so if you initialise the widget without choices, then populate the choices, it wouldn't properly show the default value @tiberiuichim

### Internal

- Fix console warning in ToHTML @iFlameing

## 8.0.1 (2020-09-22)

### Bugfix

- Fix word overflow from html-block @iFlameing
- Fix Cypress test for image upload @zotya

### Internal

- Improve developer experience, don't logout on hot-reload @tiberiuichim
- Cleanup eslint in razzle.config.js @tiberiuichim

## 8.0.0 (2020-09-18)

### Breaking

- Change dummy-addons-loader.js fixture name to `jest-addons-loader.js`, to match existing `jest-svgsystem-transform.js` @tiberiuichim

### Feature

- Added Schema Editor within Dexterity Content-Types Controlpanel @rexalex @avoinea #1517
- Added Blocks Layout Editor within Dexterity Content-Types Controlpanel @avoinea #1517
- Added missing components for Email and Url widgets #1246 @rexalex
- Use content title instead of image id in alt tag @nileshgulia1

### Bugfix

- Fix the broken profile view in Toolbar @iFlameing

### Internal

- Hide block chooser button using React logic instead of CSS. This makes it easier to support nested blocks @tiberiuichim

- Wrap addon configuration loaders in a wrapper to check that they return back config @tiberiuichim

## 7.15.0 (2020-09-15)

### Feature

- Added missing components for Email and Url widgets #1246 @rexalex
- Show backend validation errors on corresponding fields #1246 @rexalex
- Validation implemented for add user/group @rexalex
- Show Username when Firstname attr is missing in UsersControlPanelUser @iFlameing

### Bugfix

- When dealing with authentication token expiration set to 0, auto-refresh token in one hour instead of logging out use @tiberiuichim
- Fixed front-end field validation #1246 @rexalex
- Fixed date only widget rendering #1246 @rexalex
- Fix errors with SelectWidget when removing the only element @rexalex

## 7.14.2 (2020-09-10)

### Bugfix

- Hyphenate sidebar labels @ksuess
- Update German translations @tisto

## 7.14.1 (2020-09-09)

### Bugfix

- Fix customization mechanism where customization paths end with `/` @tiberiuichim

## 7.14.0 (2020-09-08)

### Feature

- Render form with vertical tabs, setting the property `verticalFormTabs` in config.js @giuliaghisini

### Bugfix

- Imported locales by razzle and fixed import locale @giuliaghisini
- Fix console warning due to uncontrolled selectWidget component @nileshgulia1

## 7.13.0 (2020-09-07)

### Feature

- Add NumberWidget, an input widget for numbers @tiberiuichim

### Bugfix

- Fixing the Image size settings in sidebar when Image alignment changes @iFlameing

## 7.12.1 (2020-09-04)

### Bugfix

- Fix checkbox widget styles @nzambello

## 7.12.0 (2020-09-04)

### Feature

- Allow Volto projects to customize (via webpack resolve aliases) addons. Allow addons to customize Volto and other addons. Allow Volto projects to customize Volto in a `src/customizations/volto` folder, for better organization of the customizations folder. @tiberiuichim @sneridagh

## 7.11.3 (2020-08-28)

### Bugfix

- On image upload in a block, don't overwrite the global `state.content.data` with new image data @tiberiuichim @silviubogan

### Internal

- Add a `subrequest` option to the `createContent` action @tiberiuichim @silviubogan

## 7.11.2 (2020-08-28)

### Bugfix

- Fix bug introduced in 7.9.0, properly return a list of results when dealing with batched api requests @tiberiuichim
- In folder contents batch upload, use a subrequest to avoid breaking the global `content.data` state @tiberiuichim
- Fix `null` response issue when passing custom `Accept:` headers to actions #1771 @avoinea
- Removed all artifacts from translations @steffenri
- Increase z-index of `block-add-button` @steffenri

## 7.11.1 (2020-08-27)

### Breaking

### Feature

### Bugfix

- Update German translations @tisto

### Internal

## 7.11.0 (2020-08-27)

### Feature

- Add sort option to search @iFlameing

### Bugfix

- Turn autocomplete off for the search input field @timo

## 7.10.0 (2020-08-26)

### Feature

- Added toast notifications for form errors @nzambello @avoinea
- Added italian translations and translated array, token and select widget. @giuliaghisini

## 7.9.2 (2020-08-26)

### Bugfix

- Open content browser sidebar on parent object when editing an existing document. @iFlameing

### Internal

- Added developer-guidelines/redux documentation @tiberiuichim

## 7.9.1 (2020-08-25)

### Bugfix

- Fix bug related to closing the More menu of Toolbar @iFlameing

- Fix cosmetic issue, add links were not properly generated in Contents view not under the root. This didn't impact functionality as the content was properly created @tiberiuichim

- Fix bug for text block with new line and styles applyed to all text. @giuliaghisini

### Internal

- Removed unused component `src/components/manage/Contents/ContentsToolbar.jsx` @tiberiuichim
- Add no-console eslint rule @tisto

## 7.9.0 (2020-08-24)

### Breaking

### Feature

- Adding support of pasting link of voltoCMS video link to video blocks @iFlameing
- Allow serial processing of API requests when `mode:'serial'` is passed in the action. @tiberiuichim
- Adding cypress test from image-gallery in edit mode @iFlameing

### Bugfix

- On mutating a block, don't create extra placeholder block if such block already exists @tiberiuichim
- Fixing broken file-preview placeholder for other file type than image @iFlameing

### Internal

- When passed an array of items (for example in batch upload content), the `createContent` action now serializes those requests @tiberiuichim

## 7.8.3 (2020-08-21)

### Bugfix

- Change ImageGallery image scale from preview to large. @tisto
- Also use `settings.internalApiPath` in url helpers `isInternalURL`, `flattenToAppUrl` and `flattenHTMLToAppURL` @tiberiuichim
- Fix getBlocks helper when blocks_layout has no `items` (default PloneSite with no volto homepage) @avoinea

### Internal

- Docs: Review of "How to use and addon" @ksuess
- Addon: Hint for addon developers if function applying config is missing @ksuess

## 7.8.2 (2020-08-18)

### Bugfix

- Include cypress folder in release @timo

## 7.8.1 (2020-08-18)

### Bugfix

- Remove supposed fix to form.jsx again, as it apparently did not really fix anything but only broke stuff @jackahl

## 7.8.0 (2020-08-18)

### Breaking

### Feature

- Add cms-only theme that allows to completely remove semantic-ui from public facing views @pnicolli @nzambello

### Internal

## 7.7.2 (2020-08-18)

### Bugfix

- Fix bug showing wrong data in the edit view, that occured in some cases, when one would enter the edit view of a page from another page @jackahl

### Internal

- Remove "\$" from all examples in install docs and README @timo

## 7.7.1 (2020-08-12)

### Bugfix

- Japanese translation updated @terapyon
- Bugfix Edit page through Contents list #1594 @terapyon @csenger

### Internal

- Bump serialize-javascript from 2.1.1 to 3.1.0 @timo
- Bump prismjs from 1.17.1 to 1.21.0 @timo
- Make Table Block Cypress test more reliable @timo
- Make listing template Cypress test more reliable @timo

## 7.7.0 (2020-08-04)

### Feature

- Allow addons to provide less files @tiberiuichim
- Making Content browser aware of context @iFlameing

### Bugfix

- Fix click-select block on unknown block type @nileshgulia1
- Fix Image Gallery Template in Listing Block crashing when no criteria are set (#1722) @jackahl

## 7.6.0 (2020-07-31)

### Feature

- Added recurrence widget @giuliaghisini

## 7.5.1 (2020-07-29)

### Bugfix

- Avoid React hydration complaining about mismatched server output in toolbar. In component rendering, replaced the use of `__CLIENT__` with a state-stored `isClient`, as that is more correct. @tiberiuichim

## 7.5.0 (2020-07-29)

### Feature

- Used moment-timezone to set a specific server timezone as default for DatetimeWidget. @razvanMiu

## 7.4.0 (2020-07-29)

### Feature

- Highlight the sidebar toggle button with a small flashing animation @silviubogan @tiberiuichim

## 7.3.1 (2020-07-28)

### Bugfix

- Solved a browser console error in /contents view (#1695) @silviubogan
- Pagination icon fix @nileshgulia1

## 7.3.0 (2020-07-26)

### Feature

- Add Placeholder attribute to Textwidget and TextAreaWidget @iFlameing
- Make the default block type (currently draftjs text) configurable @tiberiuichim @silviubogan

### Internal

- Upgrade lodash dependency to 4.17.19 @tisto
- Add a new blocks helper method, `getBlocks`. It simplifies using `getBlocksFieldname` and `getBlocksLayoutFieldname` under a single method that returns ordered pairs of `[blockid, blockvalue]` @tiberiuichim

## 7.2.1 (2020-07-16)

### Internal

- Upgrade to Cypress 4.10.0 @tisto
- Upgrade to cypress-file-upload 4.0.7 @iFlameing

## 7.2.0 (2020-07-13)

### Feature

- Provide a new webpack alias, `volto-themes`, which points to Volto's theme folder. See details in the https://docs.voltocms.com/upgrade-guide/

### Internal

- Upgrade razzle to `^3.1.5`. @tiberiuichim

## 7.1.0 (2020-07-09)

### Feature

- Addons can optionally include a `razzle.extend.js` file in their root. This module needs to follow the same rules as the `razzle.config.js`. They change the default Volto Razzle configuration, before it is passed to the Volto project @tiberiuichim @sneridagh

### Bugfix

- Managed hidden fields @giuliaghisini
- Fix bug in addon loading with namespaced packages @tiberiuichim
- Japanese translation updated @terapyon

- Upgrade razzle to `^3.1.5`. @tiberiuichim

## 7.0.1 (2020-07-07)

### Bugfix

- Adding absolute url in ObjectBrowser for image type @iFlameing

## 7.0.0 (2020-07-06)

### Breaking

- Fix filename of strickthrough.svg to strikethrough.svg @tiberiuichim

### Feature

- Addons configuration loading. You can now declare addons in the addons key of
  package.json and they'll be automatically loaded. @tiberiuichim @sneridagh

## 6.5.0 (2020-07-03)

### Feature

- Added default Export for the QuerystringWidget for the ListingBlock @steffenri

### Bugfix

- Fix text overflow in pastanaga-menu header if title is too long. @giuliaghisini
- Fixing bug to correctly assign classes to image sizes in View @steffenri
- Center aligned Images are now displayed like they are center aligned in the View @steffenri
- Fix datepicker z-index @giuliaghisini

### Internal

- Upgrade insecure packages `http-proxy`, `http-proxy-middleware` and `handlebars` @tiberiuichim

## 6.4.1 (2020-07-01)

### Breaking

### Feature

- Allow JSON API calls to made to third-party servers @tiberiuichim

### Bugfix

- Fix styling and use of csss classes in `InlineForm.jsx` @tiberiuichim

- Fixing bug for Image Preview on upload @iFlameing

### Internal

- Fix formatting of `src/server.jsx` @tiberiuichim

## 6.4.0 (2020-06-29)

### Feature

- Translated workflow state in contents @nzambello
- Added item type as a tooltip in contents @nzambello
- Added Italian translations and translated array, token and select widget. @giuliaghisini
- Added uploading image preview in FileWidget @iFlameing
- Allow custom express middleware declared with `settings.expressMiddleware`. See [Customizing Express](docs/source/customizing/express.md) @tiberiuichim

### Bugfix

- Fix the toolbar dropdown to add content types if isMultilingual is enabled
  but a type is not marked as translatable. @csenger
- Usage of Contettype label in Add component. @giuliaghisini

### Internal

- Update upgrade-guide to for `addonRoutes` and `addonReducers` @jackahl

## 6.3.0 (2020-06-22)

### Feature

- Added internationalization for French language @bsuttor #1588
- use of maximumSelectionSize from plone in ObjectBrowserWidget. @giuliaghisini
- Added selectableTypes in ObjectBrowserWidget @giuliaghisini

### Bugfix

- Added export for ObjectBrowserWidget in component/index.js @giuliaghisini
- Fixed duplicated items in SelectWidget and ArrayWidget @giuliaghisini
- Update German translation @timo
- Removed broken preview image in ContentsUploadModal if uploaded item is not an image. @giuliaghisini
- Localized content upload modal last modified date @nzambello
- Fix overflow in folder contents with long titles @nzambello
- Fixed object browser widget when a selected items is deleted. Plone.restapi returns a null object. @giuliaghisini
- Fixed error on adding new item if parent item is not translated when multilingual is set @giuliaghisini
- Added translations for select in querystring widget @nzambello

## 6.2.0 (2020-06-14)

### Feature

- Added database information component in ControlPanels @iFlameing

### Internal

- Add yarn-deduplicate. @timo

## 6.1.0 (2020-06-12)

### Feature

- Include `config.addonRoutes` in router configuration. This allows addons to
  override route children defined for the `App` component.
- Added param 'wrapped' for widgets, to use widgets without form wrappers. @giuliaghisini
- Added internationalization for Romanian language @alecghica #1521
- Support loading additional reducers from the `config.addonReducers` key,
  to allow addons to provide their own reducers @tiberiuichim
- Add a no brainer image sizing option, using scales. This will be vastly improved when
  we adopt srcsets. @sneridagh

### Bugfix

- Removed a regex check in default view, we already have that check implemented in `toHTML.jsx` L173s @nileshgulia1
- UX and UI improvements to `DateTimeWidget` @sneridagh
- Fix an UTC handling for edge cases in `DateTimeWidget` @sneridagh
- Do not store the server information of the image block in the block @sneridagh
- expose `blocks` and `blocks_layout` only editing content types @nileshgulia1
- Small fix for `TextAreaWidget` and max_lenght @sneridagh

## 6.0.0 (2020-05-18)

### Breaking

- Removed support for CSS modules, since Razzle 3.1.x do not support them @sneridagh
- Updated Volto dependencies - See https://docs.voltocms.com/upgrade-guide/ for more information @sneridagh
- By adding `react-beautiful-dnd` in the block editor we are introducing new wrappers
  (belonging to the lib machinery) in the structure. The original structure and class
  names are still in there for maintain maximum backwards compatibility. Those might be
  cleaned up in next major versions, so if for some reason you have customized the
  styling of your blocks in edit mode relying in the old structure, you might want to
  review and adapt them @sneridagh

### Feature

- Added `react-beautiful-dnd` in core for edit form @iFlameing

### Bugfix

- Improve `isInternalURL` helper to match also anchors @sneridagh
- Fix local build when no RAZZLE_API_PATH is set @sneridagh
- Fix `WysiwygWidget` redraft HTML conversion when creating an empty paragraph force a `<br />` on it @sneridagh

### Internal

- Update to Razzle 3.1.2 @sneridagh
- Update to React 16.13.1 @sneridagh
- Removal of unused (and deprecated) `@babel/preset-stage-0` @sneridagh
- Update `react-router` @sneridagh
- Update `react-redux` and friends @sneridagh
- Update `connected-react-router` @sneridagh
- Update low hanging fruits deps @sneridagh
- Update style/less loaders and friends @sneridagh
- Update stylelint and friends @sneridagh
- Update prettier @sneridagh
- Update eslint plugins @sneridagh
- Update `cypress-axe`, `detectbrowser`, `lint-staged` and `release-it` @sneridagh

## 5.10.0 (2020-05-16)

### Feature

- Refactor createContent command to accept a single json object @iFlameing
- enable hyperlinks in comments when intelligent text is enabled for comments @jackahl
- Added InlineForm, a generic form implementation that can be used to edit, among others, block data. @tiberiuichim

### Internal

- Make available some internal artifacts (Router, Redux Store and Settings) to the Cypress acceptance tests, add docs @sneridagh
- Added a cypress test for the comment @iFlameing
- Add a cypress function to set registry entries @jackahl

## 5.9.1 (2020-05-15)

### Bugfix

- Fix Bug in Form Component, that lead to site crash when transmitting a comment @jackahl #1475
- Fix for the long lasted issue when creating links in newly created text blocks not showing as links until you save @avoinea

### Internal

- add a cypress function to set registry entries @jackahl

## 5.9.0 (2020-05-12)

### Feature

- Implemented a new ObjectBrowserWidget @giuliaghisini
- Add system information in controlpanel @iFlameing #1457
- Added Dexterity Types Controlpanel @avoinea #1285
- Remember sort order of folder contents view. @ksuess

### Bugfix

- Fix new lines inside blockquotes are not rendered @iFlameing #1249
- Fix blockquote style render error: unique key @iFlameing #1097
- Added Dexterity control panel Cypress tests @iFlameing

## 5.8.0 (2020-05-11)

### Feature

- Adding Image Gallery template in Listing view @iFlameing

## 5.7.1 (2020-05-08)

### Bugfix

- Fix translation locator lookup in `CreateTranslation` component and remove the no longer needed store reducer @sneridagh

## 5.7.0 (2020-05-08)

### Feature

- Enable `@querystringresults` action to use the new context aware query feature @sneridagh

## 5.6.1 (2020-05-08)

### Bugfix

- REALLY load the current object language on SSR, instead of relying on the cookie @sneridagh

### Internal

- Pin some api devs (ZCatalog and p.namedfile improvements) @sneridagh

## 5.6.0 (2020-05-06)

### Feature

- Load the current object language on SSR, instead of relying on the cookie @sneridagh

### Bugfix

- Correct the `defaultLanguage` intend in `react-intl-redux` configuration @sneridagh

### Internal

- Add default `src` alias for addons detecting if there is a released or a mrs-developer one @sneridagh

## 5.5.0 (2020-05-06)

### Feature

- Added label expired if expiration date is smaller that current date #1413 @iFlameing
- Added word limit widget @iFlameing
- Addons control panel @esteele @iFlameing

### Internal

- Cypress test for Table Block @steffenri @iFlameing
- Cypress tests upgraded for Image, Hero and HTML Block @steffenri @iFlameing
- Added cypress test for sort method in folder content #1035 @iFlameing

## 5.4.0 (2020-05-04)

### Feature

- Add babel and externals support in Webpack for add-on infrastructure @sneridagh
- Forward the images and files cache headers in Volto SSR passthrough @sneridagh

### Bugfix

- Fix handling of external links in ToHTML config @nzambello
- Remove the title field from right dropdown in folder content view

### Internal

- Periodical upgrade of `browserlist` lib @sneridagh

## 5.3.0 (2020-04-29)

### Feature

- Add general @navigation endpoint depth setting @sneridagh

### Bugfix

- Fix `<html>` `lang` attribute @sneridagh

## 5.2.1 (2020-04-27)

### Internal

- Remove console log in workflow asyncConnect :( @sneridagh

## 5.2.0 (2020-04-27)

### Feature

- Improvement of API requests error handling @sneridagh
- Unauthorized on folder contents if no proper credentials @sneridagh

### Bugfix

- Improve German translations for folder contents view @timo
- Make label of checkboxwidget clickable @pbauer #1414
- Show new added user in user control panel @iFlameing #1271
- Support multi selection in roles and groups and polish add user #1372
- Listing block: removed message 'No results found' only in view mode on public site, in editMode is still present. @giuliaghisini

### Internal

- Add crossorigin to the preload resources tags while in development @sneridagh
- Permissions in contents and Edit @sneridagh
- Fix the error on content Edit no credentials now shows `Unauthorized` @sneridagh
- Improve console server output showing info @sneridagh

## 5.1.0 (2020-04-23)

### Breaking

### Feature

- Full screen right sidebar @rexalex #1345
- Enable internal API proxy for not to rely on CORS on development @sneridagh
- Added Print CSS @iFlameing #1289
- Added error handling for Add and Edit forms #1392 @nzambello

### Bugfix

- Japanese translation @terapyon
- Fix `ArrayWidget` to support multiselect schema `schema.List`/`schema.Set`-> `schema.Choice` hardcoded (not using vocabularies) combination @sneridagh
- Remove Back button from control panels, since it's redundant @sneridagh
- Show past dates in date time widget calendar @nzambello

### Internal

- Translated labels in Eventi View @nzambello
- Improve i18n script, so shadowed components are not overriding their original translations. For the record, any override of i18n messages, should be done somewhere else (eg. config object) @sneridagh

## 5.0.1 (2020-04-16)

### Bugfix

- Show new added user in user control panel @iFlameing #1271
- Fixes for contact form @nzambello

## 5.0.0 (2020-04-12)

### Breaking

- Added basic lazy loading dependencies and boilerplate @sneridagh
- Change component to where page title is set to `View.jsx`, remove all `Helmet` calls from inner views @jackahl

### Feature

- Added date time widget @nzambello
- Add meta description tags and meta generator @sneridagh
- Add lang property in `html` tag depending on the site/content language @sneridagh
- Add `App.jsx` component insertion point @sneridagh
- Lazy load `EventView.jsx`, splitting out all its big dependencies (Luxon) along with it @sneridagh
- Lazy load `pretty` library, used in the HTML block @sneridagh
- Lazy load `Raven` library @sneridagh
- Lazy load `React Select` library @sneridagh

### Bugfix

- Show save/cancel on control panels @avoinea #850
- Fix listing "show more" link rendering conditions @nzambello

### Internal

- Make Jest only looks up in `src` folder @sneridagh
- Re-arrange `components/index.js` @sneridagh
- Added a patch for Razzle Jest config generator to include `modulePathIgnorePatterns` option @sneridagh
- Fix Travis random no sound card found error @sneridagh
- docs: add release documentation @tisto

## 4.6.0 (2020-04-06)

### Feature

- pagination on site search results @giuliaghisini

### Bugfix

- Fix use case for non-multilingual setups and on projects on lang loading @sneridagh

### Internal

- Typo in German translations @steffenri
- Complete more Italian translations @nzambello

## 4.5.0 (2020-04-06)

### Feature

- /sitemap to view sitemap based on @navigation with depth 4 @giuliaghisini

### Bugfix

- Fix ArrayWidget to support static supermodel vocabulary @datakurre
- Bring back the OutdatedBrowser component, it got removed in a bad merge :( @sneridagh

### Internal

- Improve the i18n script, only write the pot file if it's really different @sneridagh

## 4.4.0 (2020-04-03)

### Feature

- /contents (folder content view) is sortable @ksuess
- Updated the (folder content icons to Pastanaga Icons) @iFlameing

### Bugfix

- Fix conversion from DraftJS to HTML using redraft for atomic entities (IMAGE) @sneridagh

## 4.3.0 (2020-04-01)

### Feature

- Added recursive workflow changes @robgietema

### Bugfix

- Fixed ssr link view @robgietema

## 4.2.0 (2020-03-31)

### Feature

- Add Multilingual Support @sneridagh

## 4.1.2 (2020-03-30)

### Bugfix

- Fix typo for Japanese translation @terapyon
- Fix refresh of the `Breadcrumbs` and `Navigation` components on calling `/login` and `/logout` @sneridagh
- Fix refresh of the `Navigation` component on calling `/login` and `/logout` @sneridagh
- Adjust implementation of the download link behavior for files @sneridagh
- Fix Maps block to use maps-inner instead of video-inner class @timo
- Add div with class "table-of-contents" to ToC block @timo

### Internal

- Upgrade critical Plone 5.2.1 deps in api folder @sneridagh
- Improve Cypress Video Block tests @sneridagh @timo
- Run `yarn i18n` on any JSX change @sneridagh
- Add link mailto Cypress test @timo
- Added design guidelines manifesto @sneridagh

## 4.1.1 (2020-03-18)

### Bugfix

- Fix for #1267 - Link inside text for content-type without blocks breaks the site @sneridagh
- Japanese translation @terapyon
- Fix production mode for newly created `__DEVELOPMENT__` global @sneridagh

### Internal

- Upgrade to Cypress 4 @timo

## 4.1.0 (2020-03-13)

### Feature

- Add `flattenHTMLToAppURL` helper method for remove api url from TinyMCE generated HTML @cekk
- Add development mode global @sneridagh

### Bugfix

- Improve the UX of the listing block when queries are running @sneridagh
- Added table of content cypress test @steffenri

## 4.0.1 (2020-03-09)

### Bugfix

- Fixes #1262 - SSR support for "undetected" browsers
- Japanese translation @terapyon
- Site settings styling fixed in the Controlpanel
- Increase ObjectBrowser limit per folder to 1000, partially fixes #1259 @sneridagh
- Deprecate `utils.less` as it's a leftover and it collides with some use cases depending on the viewport, see: #1265

### Internal

- Use kitconcept.volto as integration package @sneridagh

## 4.0.0 (2020-03-01)

### Feature

Summary of the most important features in this final release. For more detailed information
refer to all of them in https://github.com/plone/volto/releases

- Improved Pastanaga Editor
- New Pastanaga Editor sidebar
- New mobile first toolbar
- Developing blocks experience simplified
- New Object Browser
- Listing, TOC, Lead Image blocks
- Improved existing blocks (Image, Video, Maps)
- New blocks chooser and future proof blocks definitions
- Definition of default Blocks per content type
- Body classes like the Plone ones hinting content types, section and current view
- New message system
- React hooks support
- Several internal libraries updated, including Redux, Router ones that support hooks as well
- New locales (es, it, ja, pt, pt_BR)

### Bugfixes

- Tons of bug fixes

## 4.0.0-alpha.43 (2020-03-01)

### Changes

- Fixes #982 - History compare/diff @avoinea
- Responsive header @ksuess
  - Anontools (login, register) wrapping under long navigation.
  - Breaking change: Hamburger menu also on tablet.
  - Mobile: compact display of anontools and search.

## 4.0.0-alpha.42 (2020-02-26)

### Changes

- Revert "Fix Scrolling Functionality if there are many columns in table" since it has non desired secondary effects in the table block and other tables @sneridagh

## 4.0.0-alpha.41 (2020-02-26)

### Changes

- Fixes for the `ListingView` (Issue #1188, Listing View) @wkbkhard
- Fix date widgets on QueryString widget on listings and in the widget @sneridagh
- Update German translation @tisto
- i18n in toolbar and folder contents view @ksuess

## 4.0.0-alpha.40 (2020-02-24)

### Added

- Add pagination support to listing blocks @sneridagh

### Changes

- Fix Video and Maps blocks hydration quirks on view mode @sneridagh
- Deleted Empty Select Component @aryamanpuri
- Fix `RichText` Widget on normal forms @sneridagh
- Fix Guillotina tests @bloodbare
- Fix problem with not wrapped element in `Provider` store in `WysiwygWidget` component
  due that now, the links are wrapped with a connected component @sneridagh

## 4.0.0-alpha.39 (2020-02-18)

### Added

- Add permission check to edit form @sneridagh

### Changes

- Fix and improve Error in SSR @sneridagh
- Fix `LinkAnchorPlugin` press Enter key inside blocks with draftJS widgets @sneridagh

### Internal

- Replace all relative paths to `@plone/volto` absolute paths to ensure you can override all the resources via component shadowing @sneridagh

## 4.0.0-alpha.38 (2020-02-18)

### Internal

- Update to use ESLint 6 @timo

## 4.0.0-alpha.37 (2020-02-18)

### Added

- Chose template for listing block @giuliaghisini
- Event type view @nileshgulia1 @pnicolli
- Add ability to define the starting blocks per content type @sneridagh
- Reference widget: show item title and path in search and hover items selected @giuliaghisini

### Changes

- Fix the "jump" on the blocks editor on focusing blocks @sneridagh
- Include link and size info to the full size image in `ImageView` view component @sneridagh
- In the Display menu, only show views that are implemented @pnicolli
- Hide Blocks fields in Layout fieldset in Add/Edit forms @pnicolli
- Updated italian translations @nzambello
- Fallback for non existing layout views registered in `constants/Layouts` when selected in the widget @sneridagh
- Fix select widget for array inline choices fields and `z-index` problem @sneridagh
- Improve UX of the edit block Image component @sneridagh
- Fix on creating a new block, it should show the sidebar block properties (#1167) @sneridagh
- Send only the changed fields on PATCH (edit content) operations @sneridagh
- Japanese translation @terapyon

### Internal

- Added forest.eea.europa.eu as deployed Volto in production @tiberiuichim
- Add SemanticUI responsive variables to the responsive utils @sneridagh
- Added `yarnhook` to the build @sneridagh

## 4.0.0-alpha.36 (2020-02-03)

### Changes

- Fix unable to login from /logout page (#1147) @sneridagh
- Fix sitemap.xml by increasing the batch size @robgietema
- Browser detect feature, adding a deprecation message for ancient browsers in the `App` component @sneridagh
- Adding fallback in the edit form, in case the blocks related fields are empty, so we are sure that the edit form shows at least the default blocks @sneridagh
- Fix shift return in tables @robgietema

## 4.0.0-alpha.35 (2020-01-31)

### Changes

- Fix CSS when multiselection widgets have multiple items, then provoke a line jump @sneridagh
- added new italian translations, added italian to available languages, translated some static string
- updated italian translations
- Fix listing block sidebar focus @sneridagh
- Fix getBaseUrl helper method to not match inner occurrences of nonContentRoutes @sneridagh

## 4.0.0-alpha.34 (2020-01-26)

### Changes

- Fix token expiration/renewer timer, this fixes #674 @sneridagh

## 4.0.0-alpha.33 (2020-01-26)

### Changes

- Updated Maps block to the sidebar and image block look and feel @sneridagh
- Update video block to the sidebar and get the image block look and feel @sneridagh

### Internal

- Fix and update to latest husky and lint-staged @sneridagh
- Fix for i18n to use defaultMessages instead to default to the id @sneridagh
- Update `babel-plugin-react-intl` to latest @sneridagh

## 4.0.0-alpha.32 (2020-01-24)

### Added

- Lead image behavior block @sneridagh sponsored by CMSCOM.jp @terapyon

### Changes

- Make login component honors the returnUrl prop if called from any pathname @sneridagh

### Internal

- Try to improve the realibility of the Cypress tests, reorganize commands @sneridagh
- Upgrade to Plone 5.2.1, add `Products.PloneHotfix20200121` @sneridagh
- Force global use of `browserslist` package to get rid of message on build @sneridagh

## 4.0.0-alpha.31 (2020-01-22)

### Changes

- fix `SelectWidget`, when there is a vocabulary and no choices @sneridagh

## 4.0.0-alpha.30 (2020-01-22)

### Added

- Added listing block @pnicolli @rodfersou @sneridagh @giuliaghisini

### Changes

- fix bug in TokenWidget and ArrayWidget when removing all elements. @giuliaghisini
- fix listing block customization @giuliaghisini
- fix Querystring widgets failing to render if the `MultipleSelectionWidget` field applied is not included in the site vocabulary returned by `@querystring`. This applies to `Subject` field when the tag value is not there any more. @sneridagh
- fix QueryString widget on creation when query is empty, fixed broken when editing after too @sneridagh

## 4.0.0-alpha.29 (2020-01-18)

### Changes

- Remove dangling reference to external data in Image block not used anymore, causing confusion and lead to dead (and wrong) code @sneridagh
- Remove last remains of the append secondary actions, remove Image block toolbar. Update i18n, fix small issues in Image block @sneridagh

## 4.0.0-alpha.28 (2020-01-17)

### Changes

- Fix ToC anchor links in Firefox @robgietema

## 4.0.0-alpha.27 (2020-01-17)

### Changes

- Fix removing links in blocks @robgietema

## 4.0.0-alpha.26 (2020-01-15)

### Added

- German translation updated @timo

## 4.0.0-alpha.25 (2020-01-14)

### Added

- German translation for TOC @timo

## 4.0.0-alpha.24 (2020-01-14)

### Added

- Added customStyleMap param to Editor of draftjs @giuliaghisini
- Added Table of Contents block @robgietema

## 4.0.0-alpha.23 (2020-01-14)

### Added

- Support for indexable blocks (requires plone.restapi 6.1.0) @timo
- Set alt tag of image when selecting image in image block @robgietema

### Changes

- Avoid console warnings in AddLinkForm.jsx @tiberiuichim
- More cleaning the body classname from the current displayname view @sneridagh
- Make it possible to paste links, lists, b and i Elements into text-blocks
  @jackahl
- added option to include mp4 files from a remote source in video Block @steffenri @jackahl
- Make it possible to paste links, lists, b and i Elements into text-blocks @jackahl

## 4.0.0-alpha.22 (2020-01-04)

### Changes

- Disable all styling when copying text from another source (e.g. MS Word) into a text block @jackahl
- Avoid console warnings in QuerystringWidget @tiberiuichim
- Fix body classname based on the current content type @sneridagh

## 4.0.0-alpha.21 (2020-01-02)

### Changes

- Fix failing test on Footer due to year change in Copyright notice @sneridagh

## 4.0.0-alpha.20 (2020-01-02)

### Added

- Added translations to Portuguese @emansije

### Changes

- Fix wysiwyg widget help tag, for styling consistency @tiberiuichim
- Added more i18n improvements @macagua
- Disable submit button on save, to avoid multiple content creation @tiberiuichim
- Fix focus on sidebar @robgietema

### Internal

- Upgrade version pin for lxml, for compatibility with Python3.8
- Bump handlebars from 4.1.2 to 4.3.0 @timo

## 4.0.0-alpha.19 (2019-12-20)

### Added

- Implementation of `Portuguese (BR)` translation @LeuAlmeida
- Added translations to spanish @macagua
- Added AlbumView @wkbktill @alexbueckig

### Changes

- empty text blocks are shown as `<br />` in the view.
- Fix double fetch due to asyncConnect being executed in browser too @robgietema @sneridagh

## 4.0.0-alpha.18 (2019-12-12)

### Added

- Added CTRL+ENTER feature in text blocks by default. It creates a newline inside the same text chunk (`<p>`) @sneridagh
- Automatically switch sidebar on block change @robgietema
- Japanese translation @terapyon

### Changes

- Remove "documentDescription" class in table block @sverbois
- Added possibility to work with vimeo-videos instead of youtube-videos in the video block @wkbkhard
- Fixed Issue 1021: typing in a "wrong" URL leads to error @wkbkhard
- General toolbar more and personal tools menu CSS fixes @sneridagh
- Fix bug that lead to crashing the view when deleting the last row of a table
- Fix Select widget bug if the field has already the options in the `choices` schema, do not trigger the vocabulary request @sneridagh

### Internal

- Updated to react-select v3 @robdayz
- Fix file and link redirect views @robgietema
- Restrict moment.js locales to available languages @tisto @robgietema
- Fix history view @robgietema

## 4.0.0-alpha.17 (2019-12-03)

### Internal

- Revert eslint upgrade, because of problems with the react-app preset typescript settings @sneridagh

## 4.0.0-alpha.16 (2019-12-02)

### Changes

- Fix small CSS issues in Blocks @sneridagh

### Internal

- Pin Guillotina docker image @sneridagh
- Forked `react-helmet` since it seems unmaintained. Now it's a Named import in helpers. @sneridagh
- Update internal dependencies, fix "unmet peer dependencies" console logs by adding the peer dependencies to the local dependencies @sneridagh
- Update some dependencies, including: react-router, eslint engine and plugins/config and others @sneridagh
- Lodash improvements for decrease bundle size @sneridagh

## 4.0.0-alpha.15 (2019-11-27)

### Internal

- Export the resetContent action @pnicolli
- Fix toolbar collapsed color @sneridagh
- Minor CSS fixes @sneridagh
- Remove @testing-library/cypress dep, as it breaks builds if the internal cypress release is different than the one in this package @sneridagh

## 4.0.0-alpha.14 (2019-11-24)

### Internal

- Proper config for stylelint-prettier integration, add husky integration and scripts for stylelint, review stylelint rules @sneridagh

## 4.0.0-alpha.13 (2019-11-23)

### Internal

- Upgrade autoprefixer, remove deprecated `browsers` option, move to `browserlist` in `package.json` @sneridagh
- Upgrade react and react-dom to 16.12.0 @pnicolli
- Upgrade Cypress to 3.6.1 @timo

## 4.0.0-alpha.12 (2019-11-13)

### Changes

- Add loading animation for save and edit buttons in toolbar @pgrunewald
- Move Body class depending on content type to `App` component in order to make it available everywhere @sneridagh
- Add root class name to `Tags` component @sneridagh

## 4.0.0-alpha.11 (2019-11-08)

### Added

- Improved `ObjectBrowser` API to allow arbitrary field names and a custom `onSelectItem` @sneridagh

### Changes

- Fix icon in `TextWidget` @sneridagh
- Improve documentation for `Icon` @jackahl
- Fix ability to develop Volto itself (as and addon with a mrs.developer checkout) inside a Volto project @sneridagh

### Internal

- Add internationalization section to docs @pgrunewald

### Internal

- Set Cypress viewport width to 1280px @timo

## 4.0.0-alpha.10 (2019-10-31)

### Added

- Add Node 12 support @timo

### Changes

- Removed wrapper `p` tag from image block in edit mode for better layout purposes @sneridagh
- Make SelectWidget more robust @robgietema
- Add image to listing view @robgietema
- Fix `SchemaWidget` @robgietema
- Move styles import to a separate file @pnicolli
- Fix crash when user enters only whitespace in required fields @JeffersonBledsoe
- Fix the _real_ focus thief in new tiles @sneridagh

### Internal

- Report port number on startup @fredvd
- Retry Cypress tests two times before failing @timo
- Add waitForResourceToLoad to Cypress @timo
- Add use cases to README @timo
- Re-enabled Guillotina tests @sneridagh
- Remove Docker build from tests @sneridagh
- Removed Enzyme @pnicolli
- Added testing-library (react and cypress) @pnicolli
- Tiles -> Blocks renaming @sneridagh

## 4.0.0-alpha.9 (2019-10-09)

### Changes

- Rename `blockID` to `id` for view block components, to unify naming in edit-view @sneridagh
- Change the order of the widget decider algorithm to `choices` is chosen before the vocabularies one @sneridagh
- Remove old messages container since it's not used anymore @sneridagh
- Improve the Pastanaga Editor block wrapper container layout, deprecating the hack `.ui.wrapper > *` @sneridagh
- Fix `ArrayWidget` and amend users control panel arrays instantiations @sneridagh

## 4.0.0-alpha.8 (2019-10-05)

### Added

- Upgrade react-intl to latest version @sneridagh

### Changes

- Fix `DefaultView.jsx` warning on missing key @sneridagh

### Internal

- Enable run yarn install on git checkout and git pull in husky @sneridagh
- Disable Cypress blocks tests @sneridagh
- Remove dockerized unit tests @timo
- Add Cypress link test for text blocks @timo

## 4.0.0-alpha.7 (2019-10-02)

### Added

- Add CSS class names to block chooser @timo
- Add Cypress tests for blocks @timo @rodrigo @jakahl

### Changes

- Fix page jump on edit route @sneridagh
- Fixes to users and groups controlpanel i18n strings @nileshgulia1

### Internal

- Change the general naming of the documentation to `developer` documentation @sneridagh
- Add `blockID` prop to block tiles render view, this is handy for some blocks use cases @sneridagh
- Fix flaky Cypress test @sneridagh

## 4.0.0-alpha.6 (2019-09-30)

### Added

- Transfer focus management and keyboard navigation to the tiles engine @sneridagh

### Changes

- Slight amendment to Blocks chooser styling @sneridagh
- The default view for content types `DocumentView.jsx` has been renamed to a more appropiate `DefaultView.jsx` @sneridagh

### Internal

- Add complete husky config @sneridagh
- Add COC.md file @timo

## 4.0.0-alpha.5 (2019-09-28)

### Added

- Default body classes were enhanced to accept path and content type based ones as in Plone @sneridagh

### Changes

- Fix for checkboxes when setting `false` values, this fixes #888 @sneridagh

## 4.0.0-alpha.4 (2019-09-27)

### Added

- Added Users and Groups Controlpanel @nileshgulia1 @csenger @jackahl

### Changes

- Move the Tile Edit wrapper one level up to the tiles engine, so we can simplify how edit tiles are made @sneridagh
- Rename Metadata and Properties in sidebar to Document and Block @jackahl
- Add some German Translations @steffenri, @jackahl

### Internal

- Fix cypress test for file Upload @jackahl
- Dependencies upgrades (router, redux) @sneridagh
- Enhance Cypress createContent keyword to create files and images @timo
- Fix docs build locally @sneridagh

## 4.0.0-alpha.3 (2019-09-22)

### Added

- New tiles chooser @sneridagh

### Internal

- Fail eslint check on any warnings @timo
- Add i18n check on Travis @timo

## 4.0.0-alpha.2 (2019-09-19)

### Changes

- Fix parameter handling in Search view to avoid limiting search results with empty parameters #845 @csenger
- Fix SearchTags handling of keyword vocabulary for anonymous users @csenger
- Fix hero tile being next to a left or right aligned image @jackahl
- Fix toolbar elements showing depending on user permissions @sneridagh

## 4.0.0-alpha.1 (2019-09-17)

### Changes

- Fix test failure for `VersionOverview` component in master after release process @sneridagh
- Improve usability of login form @sneridagh
- Fix creation of image objects from image tile by adding the id as well @sneridagh
- Remove description tile from the default tiles on new content @sneridagh

### Internal

- Update release-it to fix some deprecation messages @sneridagh

## 4.0.0-alpha.0 (2019-09-13)

### Added

- Show images in Rich Text editor @rodfersou @sneridagh
- Full Pastanaga Toolbabr implementation @sneridagh
- Internal API path for containers @bloodbare
- Add toast component @sneridagh
- Add sidebar support for components @sneridagh
- Add Volto version number in control panel @nzambello
- Remove Mosaic component @tisto
- Added toast component in actions @nzambello
- Added translations to italian @nzambello
- Add table tile @robgietema
- Add image sidebar @sneridagh @gomez
- Add delete file button to file Widget @jackahl
- Add link redirect view @robgietema
- Add proper unique id to all fields, based on the fieldset and field name @sneridagh
- Add QueryString widget @robgietema @sneridagh

### Changes

- Add a delay when filtering content in folder contents so it doesn't overload backend @vangheem
- Small UX/UI fixes @sneridagh
- Fix query string search in subjects vocab field @gomez
- Removed the delete button from the title tile @pnicolli
- Rewrite sidebar @robgietma @sneridagh
- Added SidebarPortal component for easier sidebar handling @pnicolli
- Fixed tiles outline in Pastanaga editor @pnicolli
- Fix typos @balavec
- Fix warnings for boolean fields @miziodel
- Fix dropdown styling @robgietema
- Update connected-react-router and fix instantiation of the wrapper component
  to fix the sync problems with the router and the store @sneridagh
- Fix link popup in case you dismiss it without setting anything @sneridagh
- Export history in start-client.jsx for being able to import it from the project for trackers (Matomo, etc) @csenger
- Workflow change awareness on toolbar @robgietema
- Fix reordering in folder contents view and problems with previous windowing settings leaked to current one. @robgietema
- Fix remove link entity of only a part it only removes that part, not the whole entity @robgietema
- Add proper placeholder to the add link feature in the editor @sneridagh
- Fix bulk workflow change in contents view @sneridagh
- Fix regresion on uploading image to root @sneridagh
- Fix hero tile on view if image is missing @sneridagh
- Fix link to contextual contents in toolbar @sneridagh
- Add automatically the wildcard for the `SearchableText` on the @search action @sneridagh

### Internal

- Upgrade lodash to 4.17.15 @tisto
- Fix console errors on tests @sneridagh
- Add development mode for kitkoncept.voltodemo to /api plonebacked @fredvd
- Cleanup map dispatch to props @robgietema
- Fix linting warnings @robgietema
- Remove decorators @robgietema
- Pin mem to 4.0.0 @tisto
- Add razzle-plugin-bundle-analyzer @tisto
- Add bundlewatch @tisto
- Add bundlesize @tisto
- Update base buildout @sneridagh

## 3.1.0 (2019-06-14)

### Added

- Upgrade to react-redux 7.1. It includes the new official hooks for Redux. @sneridagh
- Make Login Route accessible from anywhere in path url @nileshgulia1

### Changes

- Fix basic tiles classes @rodfersou
- Fix video alignment @sneridagh

### Internal

- Upgrade handlebars to 4.1.2 @timo
- Upgrade js-yaml to 3.13.3 @timo
- Upgrade Plone api folder to 5.2rc3 @sneridagh
- Fixes for image/file fields widgets for Guillotina @sneridagh
- Fixes for Cypress Guillotina tests @sneridagh

## 3.0.4 (2019-05-30)

### Changes

### Internal

- Add cypress a11y tests. @timo
- Fix order of arguments when sending the contact form @csenger
- Fix @babel/core import on i18n script @sneridagh

## 3.0.3 (2019-05-13)

### Internal

- Use eslint-config-react-app instead of airbnb + custom config for linting @timo
- More eslint fixes for avoiding parsing errors on decorators @sneridagh
- Add 'prettier' command to check if there are any missing prettier fixes @timo
- Run 'prettier' on Travis and fail the build if there are missing prettier fixes @timo
- Add 'prettier:fix' command to fix all missing prettier fixes at once @timo
- Run 'prettier:fix' once and commit all fixes @timo
- Fix the most important violations reported with the new config @sneridagh

## 3.0.2 (2019-05-10)

### Changes

- Re-add babel-eslint because of the decorators @sneridagh
- Upgrade eslint-config-airbnb @sneridagh

## 3.0.1 (2019-05-10)

### Changes

- Small fix for a missplacement of the hooks plugin in .eslintrc @sneridagh

## 3.0.0 (2019-05-10)

### Added

- Upgrade to Razzle 3 @sneridagh
- contact-form view @cekk
- Add cypress setup for both Plone and Guillotina @sneridagh
- Update SelectWidget and ArrayWidget and related vocabularies actions/reducers
  for the breaking changes in plone.restapi 4.0.0 @davisagli @sneridagh
- Expose request on the promise returned by the api helper @csenger

### Changes

- Several dependencies upgraded @sneridagh
- Fix image of Hero Tile for images in private containers @sneridagh
- Remove enforcement of JSdocs in Volto ESlint rules @sneridagh
- Remove RobotFramework tests in favor of the cypress ones @sneridagh
- Updated docs to highlight some code changes @pigeonflight

## 2.1.3 (2019-04-17)

### Changes

- Update api folder to Plone 5.2 and Python3, update the whole story @sneridagh

## 2.1.2 (2019-04-16)

### Changes

- Fixed issue where it was not possible to click into the title tile above the
  small red bar at the beginning of the line in some browsers. @jackahl
- Docs content editing. @esteele
- Fix the folder_contents view component bby preventing the SearchableText be
  empty if you haven't typed anything in the filter fields yet. This is caused
  by the new ZCatalog in Zope 4. @sneridagh

## 2.1.1 (2019-04-04)

### Changes

- Improved search action, now it supports passing directly the arrayed values
  and it converts it to Plone's query syntax @sneridagh

- Added depth argument to the navigation action, to match the @navigation
  endpoint feature @sneridagh

## 2.1.0 (2019-04-02)

### Added

- Added specific `onMutateTile` for solely use of the Text tile when it mutates
  to another type of tile. This prevents onChangeTile do one thing that it was
  not designed lifting responsibilities from it. @sneridagh
- Added `detached` mode for the text tile so it will be able to render outside
  the Volto editor without all the tile mutation machinery and the keyboard
  handlers. @sneridagh

### Changes

- Small improvements to the internal tile api @sneridagh
- Fix for tiles having dialog box `ENTER` key captured by global tile onKeyDown
  handler, then creating a tile instead of the intended behavior. @sneridagh
- Fix small CSS and import issues @sneridagh
- Fix Invalid Redraft object warning on console @sneridagh

## 2.0.0 (2019-03-25)

### Added

- Tiles refactor, move keyboard listeners and Trash icon to Tiles HOC
  @sneridagh
- Fix tiles navigation via cursors on all available tiles @sneridagh
- Fix UX on HTML tile when navigating via cursors @sneridagh
- Add ability to add new text tile via `Enter` key @sneridagh
- Add create new text tile at the bottom on adding tiles @sneridagh
- Improve general UX on tiles creation and focusing on creation @sneridagh

## 1.10.0 (2019-03-25)

### Added

- Fix npm package generation @sneridagh

## 1.9.0 (2019-03-25)

### Added

- Upgraded to React 16.8 (the one with hooks) @sneridagh
- Upgraded to the recent (at last) released react-redux 7.0beta.0, this release
  solves the performance issues with the new React context and leave them ready
  for the upcoming useRedux hook. This release supports the latest React 16.8.
  @sneridagh
- Upgraded to the latest Router and react-router-config and other required
  upgrades. @sneridagh
- Upgraded to latest redux-connect @sneridagh
- Upgraded to latest razzle @sneridagh

## 1.8.3 (2019-03-21)

### Changes

- Several CSS fixes @sneridagh
- Add several icons @sneridagh

## 1.8.2 (2019-03-21)

### Changes

- Improve README @svx @fredvd
- Pretty Pastanaga UI .overrides stylesheets @sneridagh

## 1.8.1 (2019-03-19)

### Changes

- Fix hero tile View styling, add definitive icon @sneridagh
- Fix the trash icon on the tiles that was displaced by other change @sneridagh

## 1.8.0 (2019-03-15)

### Added

- Hero Tile @nileshgulia1 @sneridagh

### Changes

## 1.7.0 (2019-03-03)

### Added

- Add image-zooming functionality @nileshgulia1

### Changes

- Fix image float/left right on image tile @timo

## 1.6.1 (2019-03-01)

### Changes

- Fix a regression on the add tile button alignment @sneridagh

## 1.6.0 (2019-03-01)

### Added

- Set image width in Volto editor to 50% for images that float left/right @timo
- Ability to navigate through the existing tiles with the cursors. @sneridagh
- HTML Tile for Volto Editor with preview and code prettifier
  @ajayns @nileshgulia1 @sneridagh
- Add error log in the SSR console @sneridagh
- Add SSR helper to get resources (images/files) from the server using the API
  headers. This fixes the missing images on non published resources while editing @sneridagh
- Fix not valid `<div>` tag nested in a `<p>` tag error on tiles and wysiwyg
  field @sneridagh

### Changes

- Clean .variables files from Pastanaga theme since they are already applied by
  the theming engine from the default theme. @sneridagh
- Fix edit forms with richtext fields coming from SSR @sneridagh

## 1.5.2 (2019-02-20)

### Changes

- Fix external images on Image Tile render @sneridagh
- Several fixes reagarding correctness of markup @sneridagh
- Issue with dangerouslySetInnerHTML RichText fields on first SSR load
  apparently fixed (due to the above fix) :) @sneridagh

## 1.5.1 (2019-02-19)

### Changes

- Fix build for projects created with `create-volto-app` @sneridagh
- Fix link view @nileshgulia1

## 1.5.0 (2019-02-19)

### Added

- Add Google Maps tile @nileshgulia1
- Add support for extending Semantic UI Styling using the semantic theme engine
  by adding an `extras` file that can bring into the engine new styles coming
  from third party libs or custom styling code for the local theme. Being this
  applied after semantic default styling, it's the last one in the styling
  cascade easing the develop of new themes. @sneridagh

### Changes

- Prevent Volto hit the @types endpoint (via its action, getTypes()) if the
  user is not authenticated, since it's useless and always returns a 401
  @sneridagh
- Improved readme @sneridagh
- New logo for the Pastanaga Theme referring to Volto and fix header @sneridagh
- Disable SocialSharing component by default @sneridagh
- Fix login tab index for username autofocus and password after tab @sneridagh
- Fix hamburgers menu @sneridagh
- Fix CSS sourcemaps by make postcss stage to accept other stages sourcemaps
  @sneridagh
- Add IE11 fixes by pinning some packages, added documentation in `docs` about
  it and how to deal with it. However, compatibility is _NOT_ guaranteed in
  future Volto releases @sneridagh
- Fix Header scroll in Firefox in case that there are lot of items in the nav
  @sneridagh
- Add supported browsers in README @sneridagh
- Default tile position to center for all the existing tiles @sneridagh

## 1.4.0 (2019-02-15)

### Added

- Add the ability to detect the edit Plone Site hack for show the tiles editor
  on Plone site edit @sneridagh

### Changes

- Bring back the stylelint default configs for IDEs @sneridagh
- Improve ESlint resolvers for special paths (@plone/volto and ~), so IDEs do
  not complain any more with no-unresolved active @sneridagh
- Fix the floating image problem in the Volto Editor @sneridagh

## 1.3.0 (2019-02-13)

### Added

- Improve the definitions of the view/edit tiles components for better
  extensibility. This might be a BREAKING change if you have already used the
  old way to extend/add more tiles, please update to the new one @sneridagh

### Changes

- Fix Travis unit testing false green @sneridagh
- Fix bad Proptype for location in ScrollToTop component @sneridagh

## 1.2.1 (2019-02-04)

### Changes

- Bring back the scroll to top on every route change feature @sneridagh
- Loosen node version, allow LTS (v8 and v10) @sneridagh

## 1.2.0 (2019-01-22)

### Added

- be able to specify custom headers in actions @vangheem
- fix icons used in contents @vangheem
- be able to work with mr.developer @vangheem
- add alias `@plone/volto-original` and `@package` webpack aliases @vangheem
- add `errorViews` configuration @vangheem

### Changes

- Upgrade to Node 10.14.2 @nileshgulia1

## 1.1.0 (2018-12-24)

### Changes

- Fix edit on root @robgietema
- Fix sharing @robgietema
- Fix error on token renew @robgietema
- Fix layout fieldname @bloodbare
- First field in a form will get the focus @robgietema
- Fix download file links @mikejmets
- Fix HMR missbehaving on both server and client @sneridagh
- Upgrade to Node 8.14.0 @timo
- Relaxed node runtime constraints @sneridagh
- Update to latest LESS and Semantic UI version @sneridagh

## Added

- Add .gitattributes file to avoid most Changelog merge conflicts @pnicolli
- Buildout for Python 3 @pbauer
- Websockets support @robgietema
- Subrequests to search and get content actions @robgietema
- Add logos @sneridagh @albertcasado

## 1.0.0 (2018-10-31)

### Added

- Training documentation link @robgietema

## 0.9.5 (2018-10-24)

### Changes

- Fix API*PATH variable using RAZZLE* prefix instead @sneridagh
- Fix FUOC (flash of unstyled content) in production mode @sneridagh
- Fix missing buttons on RichText tiles @sneridagh
- Fix original external `overrides.css` position in the cascade was applied in
  the wrong order in site.overrides in Pastanaga theme @sneridagh
- Fatten widget config @robgietema

## 0.9.4 (2018-10-10)

### Changes

- Fix tags layout @robgietema @jaroel
- Fix imports of views, widgets and tiles @robgietema @jaroel

## 0.9.3 (2018-10-10)

### Changes

- Fix logo import path @robgietema @jaroel

## 0.9.2 (2018-10-10)

### Added

- Automatic customization imports for images @robgietema @jaroel

## 0.9.1 (2018-10-10)

### Added

- Automatic customization imports @robgietema @jaroel

## 0.9.0 (2018-10-04)

### Changes

- Renamed package to Volto @robgietema

## 0.8.3 (2018-10-03)

### Changes

- Fix i18n script for dependency @robgietema

## 0.8.2 (2018-10-03)

### Changes

- Move all dev dependencies to dependencies @robgietema

## 0.8.1 (2018-10-03)

### Changes

- Fix compiling when used as a library @robgietema
- Fix buildout security issue @robgietema

## 0.8.0 (2018-10-03)

### Added

- Move the webpack config to Razzle @sneridagh @robgietema
- Upgrade React to 16.5 @tisto
- Upgrade React to 16.4.2 to fix a server-side vulnerability @tisto
- Support for base url @bloodbare

### Changes

- Merged Guillotina and Plone robot tests @bloodbare
- Don't reset total and batching on pending search @robgietema

## 0.7.0 (2018-07-31)

### Added

- Add Pastanaga Icon System @sneridagh
- Support for nested schemas @robgietema
- New block on return in editor @robgietema
- Added 404 page on page not found @robgietema
- Custom tiles support @sneridagh
- Add full register/password reset views @sneridagh
- Make the list block types configurable @robgietema
- Add all missing German translations @tisto
- Add helper `BodyClass` for appending classes to the `body` tag from View components @sneridagh
- Add Tiles support for Guillotina CMS @bloodbare @sneridagh @robgietema

### Changes

- Pastanaga Editor look and feel improvements and polishment @sneridagh @albertcasado
- Refactor configuration of routes, views and widgets for extensibility @sneridagh @davilima6
- Fix view name class in body element @sneridagh @davilima6
- Refactor actions @robgietema
- Store text tile data in json @robgietema
- Fixed tile add menu @robgietema
- Change to use root import on all config calls @sneridagh
- Fix CSS on tile image view @sneridagh
- Fix broken CSS on alignments left/right @sneridagh
- Tile DE literals translations @sneridagh
- Pass location as prop to child views in main View component in case we require it in some views @sneridagh
- Fix computed displayName from add-display-name Babel plugin for connected components @sneridagh

## 0.6.0 (2018-07-14)

### Added

- Schema widget @robgietema
- User actions and reducers @robgietema
- Group actions and reducers @robgietema
- Roles actions and reducers @robgietema
- Move combineReducers to the store creation level. This will ease the extensibility of them in Plone-React apps. @sneridagh
- Upgrade node to 8.11.2 @sneridagh
- Basic user listing in users controlpanel @robgietema
- Add missing FileWidget import @sneridagh
- Option to delete tiles @robgietema
- Option to add tiles @robgietema
- Image tiles in editor @robgietema
- Align images in editor @robgietema
- Video tiles in editor @robgietema
- Video tiles in editor @robgietema
- Sitemap.xml.gz view @robgietema
- Upload image indicator @robgietema
- Video tile view @robgietema
- Option to reset image @robgietema
- Drag and drop to reorder tiles @robgietema
- Enhanced DraftJS AnchorLink Plugin @robgietema @sneridagh
- Added the configuration required in Webpack config to load CSS modules in the project, required by DraftJS AnchorLink plugin @sneridagh

### Changes

- Styled wysiwyg widget @robgietema
- Switch from accordion to tabs in forms @robgietema
- Upgrade to Node 8.11.1 @tisto
- Replace ExtractionTextCSSPlugin with the new mini-css-extract-plugin, adapt universal-webpack config @sneridagh
- Removed flow @robgietema
- Fix eslint prettier config @robgietema
- Refactor actions and reducers to match restapi docs naming @robgietema
- Fix site root api calls @robgietema
- Change visual editor to use the new tiles api @robgietema
- Fix bug with wrong order input @robgietema
- Fix several problems in the DraftJS AnchorLink plugin @sneridagh
- Replace DraftJS Toolbar plugin H1/H2 buttons for H2/H3 ones @sneridagh
- Sync i18n translations @sneridagh
- Fix CSS .input class scope intrusion on the project introduced by the AnchorLink plugin fork @sneridagh
- Improve search reducer by adding the batching property in the search store.
- Upgrade to Node 8.11.3 @sneridagh

## 0.5.0 (2018-03-23)

### Added

- Pastanaga theme package @jaroel, @robgietema
- Registry based controlpanels @robgietema
- Component documentation @robgietema
- Component documentation examples @VaysseB
- Folder listing view @cekk
- Prettier docs for SCA @nileshgulia1
- Comments, email notification and vocabularies reducers @robgietema
- Pastanaga theme @robgietema
- Pastanaga manage views @robgietema
- Pastanaga theme views @robgietema
- Callout styling to draftjs @robgietema
- Image, file and news item view @robgietema
- Social sharing @robgietema
- Commenting @robgietema
- Tags @robgietema
- Renew login token when almost expired @robgietema
- Cctions reducers @robgietema
- Error reporting with Sentry support on client (default ErrorBoundary), server and Redux middleware @sneridagh
- Tiles reducers @robgietema
- Context aware toolbar @robgietema
- Hamburger menu navigation on mobile @sneridagh
- Editor prototype @robgietema
- Support for null values when reseting a field value @sneridagh

### Changes

- Update plone api versions / bootstrap process @thet
- Fix textwidget proptypes @cekk
- Remove phantomjs @tulikavijay
- Upgrade to node 8 @robgietema
- Switched to draft js plugins editor @robgietema
- Fix paragraph styling in draftjs @robgietema
- Fixed summary and tabular views @robgietema
- Upgrade to React 16 @sneridagh
- Upgrade to Webpack 4 @sneridagh
- Review chunks policy. Keep it in sync with Webpack 4 policy with entrypoint bundles @sneridagh
- Merged block styling to inline toolbar @robgietema
- Actions aware toolbar @sneridagh
- Fix permissions on the toolbar display menu @sneridagh

## 0.4.0 (2017-05-03)

### Added

- Adding tiles @robgietema
- Handle different tiles @robgietema
- Resizing of tiles @robgietema
- Deletion of tiles @robgietema
- Drag and drop of tiles @robgietema
- Basic mosaic grid rendering @robgietema
- Form validation @robgietema
- Notification messages @robgietema

### Changes

- Updated to new history api @robgietema
- Deselect on click outside grid @robgietema

## 0.3.0 (2017-04-29)

### Added

- Personal information @robgietema
- Change password @robgietema
- Password widget @robgietema
- I18n support and translations @robgietema
- Personal preferences @robgietema
- Rename action @robgietema

### Changed

- Fixed favicon @robgietema

## 0.2.0 (2017-04-27)

### Added

- Batch state in folder contents @robgietema
- Batch properties in folder contents @robgietema
- Batch tags in folder contents @robgietema
- Batch rename in folder contents @robgietema
- Diff view @robgietema
- Add revert to version @robgietema
- Create view revision page @robgietema
- Create history list view @robgietema
- Sorting of items in folder contents @robgietema
- Upload files in folder contents @robgietema
- Ordering of columns in folder contents @robgietema
- Ordering of items in folder contents @robgietema
- Pagination in folder contents @robgietema
- Delete in folder contents @robgietema

### Changed

- Only show add and contents in the toolbar when folderish @robgietema
- Diff on words not chars @robgietema

## 0.1.0 (2017-04-20)

### Added

- Folder contents @robgietema
- Sharing menu and view @robgietema
- Display menu @robgietema
- Semantic UI integration @robgietema
- Basic Mosaic setup @robgietema
- Basic Server Side Rendering @robgietema
- Search view @robgietema
- Actions menu @robgietema
- Workflow menu @robgietema
- Add menu @robgietema
- Add and edit forms including widgets @robgietema
- Basic components (navigation, toolbar, breadcrumbs etc) @robgietema
- Authentication including login / logout @robgietema
- Setup build environment @robgietema

### Changed

- Fixed passing intl to the schemaExtender in the ObjectListWidget component. @1bsilver

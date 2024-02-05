const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')


    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    .enableSassLoader(options => {
        options.implementation = require('sass');
    })
    .enablePostCssLoader()

    // Place your CSS files in dev/scss and import them here
    // Place your js files in dev/js and import them here

    .addStyleEntry('style/RoofX', './dev/scss/global.scss')
    .addStyleEntry('style/map', './dev/scss/pages/map/map.scss')
    .addStyleEntry('style/login', './dev/scss/pages/login/login.scss')
    .addStyleEntry('style/registration', './dev/scss/pages/registration/registration.scss')
    .addStyleEntry('style/profile', './dev/scss/pages/profile/profile.scss')
    .addStyleEntry('style/base', './dev/scss/base/base.scss')
    .addStyleEntry('style/components', './dev/scss/components/components.scss')
    .addStyleEntry('style/estimates', './dev/scss/pages/estimates/estimates.scss')
    .addStyleEntry('style/estimate', './dev/scss/pages/estimates/estimate.scss')
    .addStyleEntry('style/error_page', './dev/scss/pages/errors/error_page.scss')
    .addStyleEntry('style/reset', './dev/scss/pages/reset/reset.scss')
    .addEntry('js/home', './assets/js/pages/home.js')
    .addEntry('js/map', './assets/js/pages/map/map.js')
    .addEntry('js/profile', './assets/js/pages/profile/profile.js')
    .addEntry('js/estimates', './assets/js/pages/estimates/estimates.js')
    .addEntry('js/estimate', './assets/js/pages/estimate/estimate.js')
    .addEntry('js/graphs', './assets/js/graphs.js')



    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23';
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();

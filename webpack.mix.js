let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .browserSync('http://admin.com');

mix.react('resources/assets/js/product/UploadProductPage.js', 'public/js/product/UploadProductPage.js')
mix.react('resources/assets/js/product/ManageCategoryPage.js', 'public/js/product/ManageCategoryPage.js')

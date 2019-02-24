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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .js([
   		'resources/assets/js/controllers/main.js',
         'resources/assets/js/controllers/auth.js',
         'resources/assets/js/services/authdata.js',
         'resources/assets/js/services/modal.js',
         'resources/assets/js/directives/spinner.js',
         'resources/assets/js/directives/navbar.js',
   		'resources/assets/js/factories/bootstrap4.js',
         'resources/assets/js/factories/alert.js',
   		], 'public/js/app.js')
   .copy([
   		'resources/assets/js/views/main.html',
   		'resources/assets/js/views/login.html',
   		], 'public/js/views');

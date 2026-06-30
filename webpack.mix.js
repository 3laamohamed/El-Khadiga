const mix = require('laravel-mix');

mix.js('resources/js/Admin/app.js', 'public/js/Admin')
    .vue({ version: 3 })
    // .extract()
    .postCss('resources/css/admin-app.css', 'public/css', [
        //
    ])
    .version();



// mix.js('resources/js/Shop/app.js', 'public/js/Shop')
//     .vue({ version: 3 })
//     // .extract()
//     .postCss('resources/css/shop-app.css', 'public/css', [
//         //
//     ])
//     .version();

// mix.js('resources/js/Casher/app.js', 'public/js/Casher')
//     .vue({ version: 3 })
//     // .extract()
//     .postCss('resources/css/casher-app.css', 'public/css', [
//         //
//     ])
//     .version();


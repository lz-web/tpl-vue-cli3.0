module.exports = {
    'plugins': {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-aspect-ratio-mini': {},
        'postcss-write-svg': {
            utf8: false
        },
        'postcss-cssnext': {},
        'postcss-px-to-viewport': {
            viewportWidth: 750, // (Number) The width of the viewport.
            /* viewportHeight: 1334, // (Number) The height of the viewport. */
            unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'vw', // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines', '.city-page', '.top-part', '.city-search', '.search-clear', 'em::before'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        },
        'postcss-viewport-units': {
            "silence": true
        },
        'cssnano': {
            preset: 'advanced',
            autoprefixer: false,
            'postcss-zindex': false
        },

    },
    'css': {
        loaderOptions: {
            postcss: {
                exclude: ['node_modules/vant','vant']
            }
        }
    }
}

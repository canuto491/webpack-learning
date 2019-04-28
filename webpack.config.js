const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path : path.resolve(__dirname, 'dist/'),
        filename: "bundle.js"
    },

    module:  {
        rules: [
            {
                test: /\.css$/,
                use: [ // este array ejecuta las lineas de derecha a izquierda
                    'style-loader', // inyecta el css procesado directamente en el head del dom
                    'css-loader' //  permite la interpretacion del css
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
    ],

    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                // cache: true,
                parallel: true, // Use multi-process parallel running to improve the build speed
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true,
                    output: {
                        comments: false,
                    },
                },
                sourceMap: true,
            })
        ]
    }
}

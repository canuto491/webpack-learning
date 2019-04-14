var webpack = require('webpack');

var path = require('path');

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
                use: [ // ese array ejecuta las lineas de derecha a izquierda
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
    }
}

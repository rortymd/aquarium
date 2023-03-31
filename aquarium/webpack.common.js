// devtools
const path = require('path');
// html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        shared: 'core-js/actual',
        homePage: './src/pages/Home/Home.js',
    },
    output: {
        filename: 'scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.ejs$/i,
                use: ['html-loader', 'template-ejs-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.(mp4|webm)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'videos/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/Home/Home.ejs',
            filename: 'index.html',
            chunks: ['homePage', 'shared'],
        }),
    ],
    resolve: {
        alias: {
            Src: path.resolve(__dirname, 'src'),
            /* project pages */
            Pages: path.resolve(__dirname, 'src/pages'),
            /* components, that may be used throughout the whole project (lazyload, dropdowns, modal windows etc.) */
            Components: path.resolve(__dirname, 'src/components'),
            /* sections, that may be used throughout the whole project (header, footer etc.) */
            Sections: path.resolve(__dirname, 'src/sections'),
        },
    },
};

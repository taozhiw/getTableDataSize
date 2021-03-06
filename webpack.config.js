const path = require('path');
const webpack = require('webpack');
const packageInfo = require('./package.json');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gettabledatasize.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }]
        }]
    },
    plugins: [
        new webpack.BannerPlugin(`${packageInfo.name}@${packageInfo.version} | ${packageInfo.homepage}`),
    ]
};

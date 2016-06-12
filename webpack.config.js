var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: APP_PATH,

    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },

    plugins: [
        new HtmlwebpackPlugin({
            title: 'React Demo',
            template: 'index.html'
        })
    ]
};

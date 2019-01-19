
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = true;

class WebpackDonePlugin{
    apply(compiler){
        compiler.hooks.done.tap('compilation',  (stats)=> {

        });
    }
}

module.exports = (env={})=>{

    console.log('run builder with env:',env);

    const entry = {
        'app.bundle':['./src/main.ts'],
    };

    const output = {
        path: path.resolve('./build/'),
        filename:'js/[name].js'
    };


    console.log('webpack started at',new Date());

    let config = {
        entry,
        output,
        mode: 'production', //debug ? 'development' : 'production',
        watchOptions: {
            poll: true
        },
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "awesome-typescript-loader",
                    options: {}
                },

            ]
        },
        resolve: {
            extensions: ['.ts'],
            modules: [
                path.resolve(__dirname, 'node_modules'),
            ],
        },
        optimization: {
            minimize: !debug,
            noEmitOnErrors: true
        },
    };

    config.plugins = [
        new WebpackDonePlugin()
    ];

    return config;
};
var webpack = require('webpack');
var path = require('path');

module.exports  = {
    mode: 'development',
    entry : __dirname + '/client/index.jsx',
    module : {
        rules : [
            {
                test : [/\.jsx$/],
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ["@babel/preset-react", "@babel/preset-env"]
                 }
             }
            
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    output : {
        path: __dirname + '/public/dist/',
        filename: 'bundle.js'
    }
}
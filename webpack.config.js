module.exports = function(env) {

    let webpack = require('webpack'),
        path = require('path'),
        ExtractTextPlugin = require("extract-text-webpack-plugin"),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        extractCSS = new ExtractTextPlugin({ filename: '[name].css'}),
        plugins = [
            new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor'] }),
            extractCSS,
            new HtmlWebpackPlugin({ template: './src/index.html', hash: true }),
        ]

    if (env && env.release) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({ mangle:false }))
        plugins.push(new webpack.NoEmitOnErrorsPlugin())
    }

    return  {
        entry: {
            vendor: './src/vendor.jsx',
            app: "./src/index.jsx",
        },
        output: {
            path: path.resolve('dist'),
            filename: "[name].js"
        },
        resolve: {
            extensions: ['.js', ".jsx", ".css", ".less"]
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader', 
                },
                {
                    test: /\.jsx$/,
                    exclude: /bower_components/,
                    loader: 'babel-loader', 
                },
                {
                    test: /(\.less|\.css)$/,
                    loader: extractCSS.extract({
                        fallback: 'style-loader',
                        use: ["css-loader", "less-loader"]
                    })
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader'
                }
            ]
        },
    //     devServer: {
    //         proxy: {
    //             "**": { 
    //                 target: "http://localhost:10000",
    //                 changeOrigin: true
    //             }
    //         }
    //    }
    }
}
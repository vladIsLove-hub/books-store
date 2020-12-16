const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimzeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if(isProd){
        config.minimizer = [
            new OptimzeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const getPlugins = () => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            cache: true,
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].[contenthash:8].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/favicon'),
                    to: path.resolve(__dirname, 'public/favicon'),
                }
            ]
        })
    ]

    if(isProd){
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill','./js/index.js']
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devtool: isDev? 'source-map' : '',
    optimization: optimization(),
    devServer: {
        port: 3000,
        hot: isDev,
        open: true,
        historyApiFallback: true,
    },
    plugins: getPlugins(),
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true,
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                  },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
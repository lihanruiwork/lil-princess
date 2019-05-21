
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js' 
    },
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'app.js' 
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'), //用于优化\最小化 CSS 的 CSS处理器，默认为 cssnano
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给 cssProcessor 的选项，默认为{}
            canPrint: true //布尔值，指示插件是否可以将消息打印到控制台，默认为 true
        })
    ],
    module: {
        rules: [
          {
            test: /\.(scss|css)$/, 
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                }, 
                'css-loader',
                'sass-loader'
            ]
          }
        ]
    }
};
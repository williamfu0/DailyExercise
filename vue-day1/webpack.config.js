const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    /* 入口 */
    entry: './src/color.js',
    /* 出口 */
    output: {
        path: path.resolve(__dirname, 'color'),
        filename: 'color.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './color.html' // 以此为基准生成打包后html文件
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader",],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset'
            },
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:6][ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },
    devServer: {
        port: 3000 // 端口号
    }
}


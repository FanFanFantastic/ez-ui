const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'build'),
        libraryTarget: 'umd', // 采用通用模块定义
        libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
    },
    module: {
        rules:[
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|build)/,
                use: {
                    //babel-loader
                    loader: 'babel-loader',
                    options: {
                        presets:  ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"]
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ],

    },
    plugins: [

    ],
    externals: {
        react: "react"
    }
}
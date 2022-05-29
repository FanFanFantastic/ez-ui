module.exports = {
    module: {
        rules: [
        {
            // 使用 babel-loader 来编译处理 js 和 jsx 文件
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    // presets: ['@babel/preset-env']
                    "presets": ["@babel/preset-react", "@babel/preset-env"],
                }
            },
            exclude: /node_modules/,

        }
        ]
    },
};
  
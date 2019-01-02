module.exports = {
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ "style-loader" ,"css-loader", "sass-loader" ]
            }
        ]
    }
};
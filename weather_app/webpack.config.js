module.exports ={
    entry : {
        app : "./resource/assets/js/app.js"
    },
    output: {
        path: __dirname + "/public/assets/js/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2016']
                }
            }
        ]
    }

}
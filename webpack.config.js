module.exports = {
    entry:[
        "./src/index.js",
    ],
    module:{
        rules:[
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use:'url-loader'
            },
            {
                test: /\.css$/,
                exclude: /\.module.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/,
                include: /\.module.css$/,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            importLoader: 1,
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    },
    output:{
        path: __dirname,
        filename: "bundle.js"
    }
}

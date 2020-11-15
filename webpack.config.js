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
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'src/images/[name].[ext]',
                            },
                        },
                ]            
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:{
                    loader: 'file-loader',
                    options:{
                        name: '[name].[ext]',
			outputPath: 'fonts/'
                    }
                }
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
                            importLoaders: 1,
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
    },
}

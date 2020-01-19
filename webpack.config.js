/*module.exports = {
    output: {
        filename: "index.pack.js"
    },
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [
			{
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react', ['@babel/env', {
                                targets: {
                                    browsers: ['last 7 versions']
                                }
                            }]
                        ]
                    }
                }
            },
            {
                test: /.woff|.woff2|.svg|.eot|.ttf/,
                use: 'url-loader?prefix=font/&limit=10000'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {},
                }]
            }
        ]
    }
};*/
const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "styles.css",
    }),
];

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join(__dirname, "src"),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./client.js",
    },
    resolve: {
        modules: [
            path.resolve("./src"),
            "node_modules",
        ],
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader",
                    /*{
                        loader: MiniCssExtractPlugin.loader,
                    },*/
                    "css-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {},
                }]
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    plugins,
};
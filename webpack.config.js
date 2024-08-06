const path = require('path');

module.exports = {
entry: './src/main.js', // Adjust the entry point as needed
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
},
    module: {
        rules: [
{
    test: /\.js$/,
    exclude: /node_modules/,
        use: {
        loader: 'babel-loader', // Make sure Babel is set up to transpile your code
        },
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // For processing CSS files, including Tailwind CSS
    },
    ],
},
resolve: {
    extensions: ['.js'],
},
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
},
};
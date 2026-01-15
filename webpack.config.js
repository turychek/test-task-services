// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',

//   entry: path.resolve(__dirname, 'src/index.js'),

//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     clean: true,
//     publicPath: '/',
//   },

//   devtool: 'source-map',

//   devServer: {
//     static: {
//       directory: path.resolve(__dirname, 'public'),
//     },
//     historyApiFallback: true,
//     port: 3000,
//     open: true,
//     hot: true,
//   },

//   resolve: {
//     extensions: ['.js', '.jsx'],
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//     },
//   },

//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },

//       {
//         test: /\.module\.css$/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: {
//                 localIdentName: '[name]__[local]__[hash:base64:5]',
//               },
//             },
//           },
//         ],
//       },

//       {
//         test: /\.module\.scss$/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: {
//                 localIdentName: '[name]__[local]__[hash:base64:5]',
//               },
//             },
//           },
//           'sass-loader',
//         ],
//       },

//       {
//         test: /\.(css|scss)$/,
//         exclude: /\.module\.(css|scss)$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },

//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'public/index.html'),
//     }),
//   ],
// };

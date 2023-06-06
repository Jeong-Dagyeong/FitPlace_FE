// const path = require('path');

// module.exports = {
//   entry: './src/index.tsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname + '/build'),
//   },
//   mode: 'none',
//   module: {
//     rules: [
//       {
//         test: /.jsx?$/,
//         include: [path.resolve(__dirname, 'src')],
//         exclude: [path.resolve(__dirname, 'node_modules')],
//         loader: 'babel-loader',
//       },
//       {
//         test: /.css?$/,
//         exclude: [],
//         use: ['style-loader', 'css-loader', 'postcss-loader'],
//       },
//     ],
//   },
// };

const path = require('path');

module.exports = {
 entry: './src/JS/index.js',
 output: {
  path: path.resolve(__dirname, './dist/JS'),
  filename: 'bundle.js',
  publicPath: 'dist/'
 },
 mode: 'development',
 devtool: 'source-map',
 module: {
  rules: [
   // {
   //  test: /\.s[ac]ss$/i,
   //  use: [
   //   "style-loader",
   //   "css-loader",
   //   "sass-loader"
   //  ]
   // },
   {
    test: /\.(ttf)$/,
    type: 'asset/resource',
   },
   {
    test: /\.css$/,
    use: [
     'style-loader',
     'css-loader'
    ]
   },
   {
    test: /\.scss$/,
    use: [
     'style-loader',
     'css-loader',
     'sass-loader'
    ]
   },
   {
    test: /\.(png|jpg)$/,
    type: 'asset/inline',
    parser: {
     dataUrlCondition: {
      maxSize: 3 * 1024
     }
    }
   }
  ],
 }

 // module: {
 //  rules: [
 //   {
 //    test: /.(scss|css)$/,
 //    exclude: /node_modules/,
 //    use: [
 //     {
 //      loader: MiniCssExtractPlugin.loader,
 //      options: {
 //       reloadAll: true
 //      }
 //     },
 //     'css-loader',
 //     'postcss-loader',
 //     'sass-loader',
 //    ]
 //   }
 //  ]
 // },
 // plugins: [
 //  new MiniCssExtractPlugin({
 //   filename: '[name].css'
 //  })
 // ]
}
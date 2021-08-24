const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 entry: './src/Controller/index.js',
 output: {
  filename: 'bundle.js',
  path: path.join(__dirname, '/dist'),
 },
 devServer: {
  static: '/src',
  contentBase: './dist'
 },
 mode: 'production',
 module: {
  rules: [
   {
    test: /\.m?js$/,
    include: /(node_modules|bower_components)/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-object-rest-spread']
     }
    }
   },
   {
    test: /\.(png|jpg)$/,
    type: 'asset',
    parser: {
     dataUrlCondition: {
      maxSize: 3 * 1024
     }
    }
   },
   {
    test: /\.txt/,
    type: 'asset/source'
   },
   {
    test: /\.css$/i,
    use: [
     MiniCssExtractPlugin.loader, 'css-loader'
    ]
   },
   {
    test: /\.s[ac]ss$/i,
    use: [
     process.env.NODE_ENV !== "production" ?
      "style-loader" :
      MiniCssExtractPlugin.loader,
     "css-loader",
     "sass-loader"
    ],
   }
  ] 
 },
 plugins: [
  new MiniCssExtractPlugin({
   filename: 'style.css',
   chunkFilename: '1.css'
  })
 ]
};

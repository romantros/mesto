const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/scripts/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].js',
                publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), 
        compress: true, 
        port: 8080, 
    
        open: true 
    },
    module: {
        rules: [ 
          
          {
            
            test: /\.js$/,
            
            loader: 'babel-loader',
            
            exclude: '/node_modules/',
            options: {
                plugins: ['transform-class-properties']
              } 
          },
          {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            'postcss-loader']
          }
          ]
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' 
          }),
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin()
      ]
}
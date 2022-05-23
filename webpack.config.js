module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: 'dist',
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
    {
      test: /.(png|jpg|gif|svg|mp3)$/,
      type: 'asset/resource',
    },
    {
      test: /.css$/,
      use: ['style-loader', 'css-loader'],
    },
    ],
  },

}

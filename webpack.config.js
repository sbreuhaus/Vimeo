var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Video: 'app/components/Video.jsx',
      VideoForm: 'app/components/VideoForm.jsx',
      ajaxHelpers: 'app/utils/ajaxHelpers.jsx',
      ajaxHelpersAuth: 'app/utils/ajaxHelpersAuth.jsx',
      Keys: 'app/utils/Keys.js',
      HelpersAuth: 'app/utils/HelpersAuth.jsx',
      DisplayVideo: 'app/components/DisplayVideo',
      NewVideos: 'app/components/NewVideos',
      Styles: 'app/styles/Styles.js',
      applicationStyles: 'app/styles/app.css',
      About: 'app/components/About.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};

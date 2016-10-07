module.exports = {
  entry: './app/app.jsx',
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
      Styles: 'app/styles/Styles.js'
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
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = {root: path.resolve(__dirname, 'src/')};
Object.assign(src, {
  img: path.resolve(src.root, 'img/'),
  font: path.resolve(src.root, 'font/'),
  ico: path.resolve(src.root, 'ico/'),
  pug: path.resolve(src.root, 'pug/'),
  js: path.resolve(src.root, 'js/')
});

const dist = {root: path.resolve(__dirname, './dist/')};

const config = {
  context: src.root,

  performance: {hints: false},

  entry: {
    app: './',
    assets: './ico.js',
    less: './less.js',
    pug: './pug.js'
  },

  resolve: {
    alias: {
      Img: src.img,
      Font: src.font,
      Js: src.js
    },

    extensions: ['.js', '.json']
  },

  output: {
    filename: './js/[name].js',
    path: dist.root
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: src.root,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff)$/,
        include: src.root,
        exclude: src.ico,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: src.ico,
        use: [

          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false}
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: src.root,
        use: ExtractTextPlugin.extract({
          fallback: {loader: 'style-loader', options: {sourceMap: true}},
          publicPath: './',
          use: [
            {loader: 'css-loader', options: {sourceMap: true}},
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('postcss-cssnext')({
                    browsers: ['last 25 version'],
                    sourceMap: true
                  }),
                  require('postcss-csso')({
                    sourceMap: true
                  })
                ]
              }
            },
            {loader: 'less-loader', options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].html',
              context: src.pug
            }
          },
          {
            loader: 'extract-loader',
            options: {
              publicPath: null
            }
          },
          {
            loader: 'html-loader',
            options: {
              attrs: false
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              exports: false,
              doctype: 'html',
              basedir: src.pug,
              data: {
                data() {
                  return JSON.parse(fs.readFileSync(path.resolve(src.pug, 'data/global.json'), 'utf8'));
                }
              },
              filters: {
                // filter for include json data as empty string
                'json-watch': () => ''
              }
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: true
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        context: src.root,
        from: path.resolve(src.img, '**/*'),
        to: dist.root
      }
    ]),
    new ExtractTextPlugin({
      filename: './css/app.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};

module.exports = (env, options) => {
  const production = options.mode === 'production';

  if (!production) {
    Object.assign(config, {
      devServer: {
        contentBase: './dist/',
        watchContentBase: true,
        openPage: 'pages-list.html',
        open: true,
        port: '3000'
      },
      devtool: 'eval-source-map'
    });
  }

  return config;
};

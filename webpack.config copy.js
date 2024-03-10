const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const glob = require('glob');
// const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


//Для того щоб код jquery був в окремому файлі
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  return config
}


module.exports = {
  plugins: [new NodePolyfillPlugin()],
  mode,
  target,
  devtool,
  devServer: {
    port: 3010,
    open: true,
    hot: true,
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  },
  // entry: path.resolve(__dirname, 'src', 'index.js'),
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   clean: true,
  //   filename: '[name].[contenthash].js',
  //   assetModuleFilename: 'assets/[name][ext]',
  // },
  // entry: path.resolve(__dirname, 'src', 'catalog.js'),
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   clean: true,
  //   filename: 'catalog.[contenthash].js',
  //   assetModuleFilename: 'assets/catalog[ext]',
  // },
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    // another: {
    //   import: './src/catalog.js',
    //   dependOn: 'shared',
    // },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },


  optimization: optimization(),//Для того щоб код jquery був в окремому файлі
  plugins: [

    // new HtmlWebpackPlugin({
    //   template: (__dirname, 'src', 'about.html'),
    // }),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src', 'index.html'),
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/catalog.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/product.html'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'static', to: './' }],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

// function globHtmlFiles() {
//   const glob = require('glob');

//   const htmlFiles = glob.sync('./src/**/*.html');
//   // console.log(htmlFiles)
//   return htmlFiles.map((file) => {
//     // console.log(file)
//     return new HtmlWebpackPlugin({
//       filename: path.basename(file), // Встановлюємо ім'я файлу як ім'я вихідного HTML файлу
//       template: file,
//     });
//   });
// }


function globHtmlFiles() {
  const htmlFiles = glob.sync('./src/**/*.html');

  return htmlFiles.map((file) => {
    return new HtmlWebpackPlugin({
      filename: path.basename(file), // Встановлюємо ім'я файлу як ім'я вихідного HTML файлу
      template: file,
    });
  });
}
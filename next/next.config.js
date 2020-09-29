const fs = require('fs');
const path = require('path');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/style/antd-custom.less'), 'utf8')
);

module.exports = withCss(withLess({
  pageExtensions: ['jsx', 'js'],
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  generateEtags: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd-mobile\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    // 全局引入less全局变量、mixins等
    config.module.rules.push({
      test: /\.less$/,
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.resolve(__dirname, './static/style/vars.less'),
          path.resolve(__dirname, './static/style/mixins.less'),
        ],
      },
    },)

    // lodash 按需引入
    config.plugins.push(new LodashModuleReplacementPlugin({ paths: true }));
    
    // 处理@路径
    config.resolve.alias['@'] = path.join(__dirname, '');

    return config;
  },
}))

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569567266981_1111';

  config.static = {
    prefix: '/',
  };

  // add your middleware config here
  config.middleware = [];

  config.next = {
    dev: process.env.NODE_ENV !== 'production',
    dir: './next/',
  }

  // add your user config here
  const userConfig = {
    pcDomain: 'http://test.xxx.com',
    wapDomain: 'http://m.test.xxx.com',
    strapiPath: 'http://localhost:1337',
    strapiAssetsPath: 'http://test.strapixxx.com',
    pcPath: 'http://www.abc.com/api',
    mobilePath: 'http://www.abc.com/api'
  };

  return {
    ...config,
    ...userConfig,
  };
};

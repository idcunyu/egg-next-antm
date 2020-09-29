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

  // add your user config here
  const userConfig = {
    // 使用测试环境配置及数据
    strapiPath: 'http://test.strapixxx.com',

    // 使用本地strapi配置及数据
    // strapiPath: 'http://192.168.195.99:1337',
    // strapiAssetsPath: 'http://192.168.195.99:1337',
  };

  return {
    ...config,
    ...userConfig,
  };
};

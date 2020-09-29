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
  const config = exports = {
    cluster: {
      listen: { port: 7007 }
    }
  };

  // add your user config here
  const userConfig = {
    pcDomain: 'https://www.xxx.com',
    wapDomain: 'https://m.xxx.com',
    strapiPath: 'https://www.strapixxx.com',
    strapiAssetsPath: 'https://www.strapixxx.com',
    pcPath: 'https://www.abc.com/api',
    mobilePath: 'https://m.abc.com/api'
  };

  return {
    ...config,
    ...userConfig,
  };
};

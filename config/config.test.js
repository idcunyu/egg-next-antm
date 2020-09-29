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
    
  };

  return {
    ...config,
    ...userConfig,
  };
};

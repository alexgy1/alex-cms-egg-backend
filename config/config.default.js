/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1615604671569_2385";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //config csrf
  config.security = {
    csrf: {
      enable: false
    }
  };

  //config template
  config.view = {
    defaultViewEngine: "nunjucks"
  };

  config.cors = {
    //allow all the origin
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  return {
    ...config,
    ...userConfig
  };
};

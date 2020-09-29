'use strict';

const Controller = require('egg').Controller;
const Axios = require('axios');

class AxiosController extends Controller {
  // strapi接口
  async strapi() {
    const { ctx, app } = this
    const url = app.config.strapiPath + ctx.url.replace(/^\/strapi/, '')
    await Axios.get(url).then(res => {
      const all = {
        success: true,
        data: res.data || null
      }
      ctx.body = all
    }).catch(err => {
      const all = {
        success: false,
        err: err || null
      }
      ctx.body = all
    })
  }
}

module.exports = AxiosController;

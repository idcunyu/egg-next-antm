

const Controller = require('egg').Controller;

class SourceController extends Controller {
  // strapi图片
  async image() {
    const { ctx, app } = this;
    const { req, res } = ctx;
    let imageUrl = app.config.strapiAssetsPath + ctx.url
    ctx.redirect(imageUrl);
  }
}

module.exports = SourceController;

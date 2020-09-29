const Controller = require('egg').Controller;
const Axios = require('axios');

class SitemapController extends Controller {
  // sitemap
  async all() {
    const { ctx, app } = this
    const { req, res } = ctx
    let sitemap = ''
    const domain = app.config.wapDomain || 'https://m.xxx.com'

    // 固定页面
    const staticPageList = [
      '/',
    ]
    staticPageList.map((item) => {
      sitemap += `${domain}${item}\n`
    })

    // 动态页面 - 文章列表页

    ctx.body = sitemap
  }
}

module.exports = SitemapController;

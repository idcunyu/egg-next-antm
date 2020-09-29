

const Controller = require('egg').Controller;
const Axios = require('axios');

class IndexController extends Controller {
  async all() {
    const { ctx, app, config } = this;
    const { req, res } = ctx;

    // await Axios.all([
    //   Axios.get(config.strapiPath + '/frags', {params: {
    //     'category.code': 'header-code',
    //     _sort: 'sort:asc',
    //     _limit: 5
    //   }}),
    //   Axios.get(config.strapiPath + '/frags', {params: {
    //     'category.code': 'footer-code',
    //     _sort: 'sort:asc',
    //   }}),
    // ]).then(Axios.spread((
    //   {data: data1},
    //   {data: data2},
    // ) => {
    //   res.locals = {
    //     ...res.locals,
    //     headerData: data1 || [],
    //     footerData: data2 || [],
    //   }
    // })).catch(err => {
    //   ctx.redirect(`/error`);
    // })

    ctx.body = await this.app.next.render(req, res, '/');
  }
}

module.exports = IndexController;

'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app
  // 获取中间件实例
  const pageHandle = middleware.pageHandle()
  
  // strapi接口(node层请求)
  router.all('/strapi/*', controller.axios.strapi)

  // 资源(图片等)
  router.get(/^\/uploads\/*/, controller.source.image)

  // next page
  router.get('/', pageHandle, controller.page.index.all)
  
  // 生成sitemap
  router.get('/sitemap.txt', controller.sitemap.all)
}

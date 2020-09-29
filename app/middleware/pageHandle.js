module.exports = () => {
  return async function pageHandle(ctx, next) {
    const { req, res, app } = ctx
    res.statusCode = 200
    res.userConfig = app.config

    // 处理query
    res.query = ctx.query

    let ctxUrl = String(ctx.url || '')
    
    if (ctxUrl.length > 1 && ctxUrl.substr(ctxUrl.length - 1, 1) == '/') {
      ctx.url = ctxUrl.substring(0, ctxUrl.length - 1)
    }
    
    await next();
  };
};
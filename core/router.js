const router = require('koa-router')()
const files = fs.readdirSync('../../pages/mainer')
const route = function(handler) {
  files
    .filter(file => file.endsWith('.html'))
    .forEach(file => {
      router.get(`/${file.substring(0, file.indexOf('.'))}`, ctx => {
        handler(ctx)
      })
    })
  files
    .filter(file => file.endsWith('.html'))
    .forEach(file => {
      router.get(`/${file}`, ctx => {
        handler(ctx)
      })
    })
  return [router.routes(), router.allowedMethods()]
}

export default route

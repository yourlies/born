const router = require('koa-router')()
const fs = require('fs')
const files = fs.readdirSync('./pages/views')

const route = function(handler) {
  files
    .filter(file => file.endsWith('.html'))
    .forEach(file => {
      router.get(`/${file}`, ctx => {
        handler(ctx)
      })
    })
  return [router.routes(), router.allowedMethods()]
}

module.exports = { route }

const router = require('koa-router')()
const fs = require('fs')
const files = fs.readdirSync('./pages/views')
const routes = require('../config/routes')

const route = function(handler) {
  files
    .filter(file => file.endsWith('.html'))
    .forEach(file => {
      router.get(`/${file}`, ctx => {
        handler(ctx)
      })
    })
  for (let [key, value] of Object.entries(routes)) {
    router.get(`/${key}`, ctx => {
      handler(ctx, value)
    })
  }
  return [router.routes(), router.allowedMethods()]
}

module.exports = { route }

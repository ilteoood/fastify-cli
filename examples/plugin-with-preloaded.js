/* global GLOBAL_MODULE_1, GLOBAL_MODULE_3 */
'use strict'
const { ok } = require('node:assert')

module.exports = async function (fastify, options) {
  fastify.get('/', async function (req, reply) {
    return { hasPreloaded: GLOBAL_MODULE_1 && GLOBAL_MODULE_3 }
  })
  fastify.addHook('onReady', function () {
    ok(GLOBAL_MODULE_1)
    ok(GLOBAL_MODULE_3)
  })
}

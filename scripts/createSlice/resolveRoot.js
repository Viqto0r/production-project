const path = require('path')

const resolveRoot = (...segments) => path.resolve('src', ...segments)

module.exports = { resolveRoot }

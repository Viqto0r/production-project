const { createTemplate } = require('./templates/createTemplate')

const layer = process.argv[2]
const slice = process.argv[3]

createTemplate(layer, slice)

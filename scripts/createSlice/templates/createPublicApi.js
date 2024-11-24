const fs = require('fs/promises')
const { resolveRoot } = require('../resolveRoot')

const getPublicApiTemplate = (
  slice
) => `export { ${slice} } from './ui/${slice}/${slice}'
export type { I${slice}Schema } from './model/types/${slice.toLowerCase()}Schema'
`

const createPublicApi = async (layer, slice) => {
  const filePath = resolveRoot(layer, slice, 'index.ts')
  try {
    await fs.writeFile(filePath, getPublicApiTemplate(slice))
  } catch {
    return console.log('Не удалось создать index.ts')
  }
}

module.exports = { createPublicApi }

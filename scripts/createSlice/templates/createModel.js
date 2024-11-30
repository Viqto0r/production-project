const fs = require('fs/promises')
const path = require('path')

const { resolveRoot } = require('../resolveRoot')
const { reduxSliceTemplate } = require('./reduxSliceTemplate')
const { capitalize } = require('../capitalize')
const { schemaTypeTemplate } = require('./schemaTypeTemplate')

const createModel = async (layer, slice) => {
  const capitalizedSliceName = capitalize(slice)
  const modelFolderPath = resolveRoot(layer, slice, 'model')
  const selectorsFolderPath = path.join(modelFolderPath, 'selectors')
  const sliceFolderPath = path.join(modelFolderPath, 'slice')
  const typesFolderPath = path.join(modelFolderPath, 'types')
  const servicesFolderPath = path.join(modelFolderPath, 'services')

  try {
    await fs.mkdir(modelFolderPath)
    await fs.mkdir(selectorsFolderPath)
    await fs.mkdir(sliceFolderPath)
    await fs.mkdir(typesFolderPath)
    await fs.mkdir(servicesFolderPath)
  } catch {
    return console.log('Не удалось создать структура папок модели')
  }

  try {
    await fs.writeFile(
      path.join(sliceFolderPath, `${slice}Slice.ts`),
      reduxSliceTemplate(slice)
    )
    await fs.writeFile(
      path.join(typesFolderPath, `${slice}Schema.ts`),
      schemaTypeTemplate(capitalizedSliceName)
    )
  } catch {
    return console.log('Не удалось создать файлы модели')
  }
}

module.exports = { createModel }

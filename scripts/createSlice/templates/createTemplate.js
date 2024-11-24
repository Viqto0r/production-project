const fs = require('fs/promises')
const { resolveRoot } = require('../resolveRoot')
const { createPublicApi } = require('./createPublicApi')
const { capitalize } = require('../capitalize')
const { createUI } = require('./createUI')
const { createModel } = require('./createModel')

const layers = ['pages', 'entities', 'features']

const createTemplate = async (layer, slice) => {
  if (!layer || !layers.includes(layer)) {
    return console.log('Указан неверный слой')
  }

  if (!slice) {
    return console.log('Не указан слайс')
  }

  const capitalizedSliceName = capitalize(slice)

  const templateFolderPath = resolveRoot(layer, capitalizedSliceName)

  try {
    await fs.stat(templateFolderPath)
    console.log(
      `Папка ${capitalizedSliceName} уже существовала и была перезаписана`
    )
    await fs.rm(templateFolderPath, { recursive: true, force: true })
  } catch {}

  try {
    await fs.mkdir(templateFolderPath)
  } catch {
    return console.log('Не удалось создать шаблон')
  }

  await createPublicApi(layer, capitalizedSliceName)
  await createUI(layer, slice)
  await createModel(layer, slice)
}

module.exports = { createTemplate }

const fs = require('fs/promises')
const { capitalize } = require('../capitalize')
const { resolveRoot } = require('../resolveRoot')
const path = require('path')
const { componentTemplate } = require('./componentTemplate')
const { storyTemplate } = require('./storyTemplate')
const { stylesTemplate } = require('./stylesTemplate')

const createUI = async (layer, slice) => {
  const capitalizedSliceName = capitalize(slice)

  const uiFolderPath = resolveRoot(layer, slice, 'ui')
  const sliceFolder = path.join(uiFolderPath, capitalizedSliceName)

  try {
    await fs.mkdir(uiFolderPath)
    await fs.mkdir(sliceFolder)
  } catch {
    return console.log('Не удалось создать структуру папок UI')
  }

  try {
    await fs.writeFile(
      path.join(sliceFolder, `${capitalizedSliceName}.tsx`),
      componentTemplate(capitalizedSliceName)
    )

    await fs.writeFile(
      path.join(sliceFolder, `${capitalizedSliceName}.stories.tsx`),
      storyTemplate(layer, capitalizedSliceName)
    )

    await fs.writeFile(
      path.join(sliceFolder, `${capitalizedSliceName}.module.scss`),
      stylesTemplate(capitalizedSliceName)
    )
  } catch {
    return console.log('Не удалось создать файлы UI')
  }
}

module.exports = { createUI }

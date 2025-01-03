import { Project } from 'ts-morph'
import path from 'path'

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const layers = ['app', 'shared', 'entities', 'features', 'pages', 'widgets']
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUiDirectory = project.getDirectory(uiPath)
const componentsDirs = sharedUiDirectory?.getDirectories()

const isAbsolute = (value: string) =>
  layers.some((layer) => value.startsWith(layer))

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`
  const indexFile = directory.getSourceFile(indexFilePath)

  if (!indexFile) {
    const sourceCode = `export * from './ui/${directory.getBaseName()};'`
    const file = directory.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    })

    file?.save()
  }
})

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    const valueWithoutAlias = value.replace('@/', '')

    const segments = valueWithoutAlias.split(path.sep)
    const isSharedLayer = segments?.[0] === 'shared'
    const isUISlice = segments?.[1] === 'ui'

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUISlice) {
      const result = valueWithoutAlias
        .split(path.sep)
        .slice(0, 3)
        .join(path.sep)

      importDeclaration.setModuleSpecifier(`@/${result}`)
    }
  })
})

project.save()

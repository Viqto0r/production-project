import { Project } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const layers = ['app', 'shared', 'entities', 'features', 'pages', 'widgets']

const isAbsolute = (value: string) =>
  layers.some((layer) => value.startsWith(layer))

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`)
    }
  })
})

project.save()

import { Node, Project, SyntaxKind } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const removedFeatureName = process.argv[2] // example isArticleEnabled
const featureState = process.argv[3] // example on/off

if (!removedFeatureName) {
  throw new Error('Укажите название фича-флага')
}

if (!featureState) {
  throw new Error('Укажите состояние фичи (on или off)')
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('некорректное значение состояния фичи (on или off)')
}

const files = project.getSourceFiles()

const isToggleFunction = (node: Node) => {
  let isToggleFeatures = false

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === 'toggleFeatures'
    ) {
      isToggleFeatures = true
    }
  })

  return isToggleFeatures
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression
      )

      if (!objectOptions) return

      const featureNameProperty = objectOptions.getProperty('name')
      const onFunctionProperty = objectOptions.getProperty('on')
      const offFunctionProperty = objectOptions.getProperty('off')

      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1)

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
      )
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
      )

      if (featureName !== removedFeatureName) return

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '')
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '')
      }
    }
  })
})

project.save()

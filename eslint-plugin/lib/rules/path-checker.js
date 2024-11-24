'use strict'

const path = require('path')

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'feature sliced relative path checker',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {}, // Add messageId and message
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        // example app/entities/Article.tsx
        const importTo = node.source.value

        // example C:\Users\UserName\Desktop\Projects\production-project\src\entities\Article\index.ts
        const fromFileName = context.filename

        if (shouldBeRelative(fromFileName, importTo)) {
          context.report({
            node: node,
            message:
              'В рамках одного слайса импорты должны быть относительными',
          })
        }
      },
    }
  },
}

const layers = {
  entities: 'entities',
  features: 'features',
  pages: 'pages',
  shared: 'shared',
  widgets: 'widgets',
}

const isRelativePath = (path) =>
  path === '.' || path.startsWith('./') || path.startsWith('../') // \.\.?\/?

const shouldBeRelative = (from, to) => {
  if (isRelativePath(to)) {
    return false
  }

  // example app/entities/Article.tsx
  const toArray = to.split('/')
  const toLayer = toArray[0] // entities
  const toSlice = toArray[1] // Article.tsx

  if (!toLayer || !toSlice || !layers[toLayer]) {
    return false
  }

  const normalizedPath = path.toNamespacedPath(from)

  const projectFrom = normalizedPath?.split('src')?.[1]

  if (!projectFrom) {
    return false
  }

  const fromArray = projectFrom?.split(path.sep)
  const fromLayer = fromArray[1] // entities
  const fromSlice = fromArray[2] // Article.tsx

  if (!fromLayer || !fromSlice || !layers[fromLayer]) {
    return false
  }

  return fromSlice === toSlice && fromLayer === toLayer
}

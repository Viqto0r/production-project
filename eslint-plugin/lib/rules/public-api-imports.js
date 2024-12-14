'use strict'

const { isRelativePath } = require('../helpers')

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'imports',
      recommended: false,
      url: null,
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          alias: {
            type: 'string',
          },
        },
      },
    ],
    messages: {
      publicApiImport:
        'Абсолютный импорт разрешен только из Public API (index.ts)',
    },
  },

  create(context) {
    const alias = context.options[0]?.alias ?? ''

    const checkingLayers = ['entities', 'features', 'pages', 'widgets']

    return {
      ImportDeclaration(node) {
        const value = node.source.value
        const importTo = alias ? value.replace(`${alias}/`, '') : value
        if (isRelativePath(importTo)) {
          return
        }

        const segments = importTo.split('/')
        const isImportNotFromPublicApi = segments.length > 2

        const layer = segments[0]

        if (!checkingLayers.includes(layer)) {
          return
        }

        if (isImportNotFromPublicApi) {
          context.report({
            node: node,
            messageId: 'publicApiImport',
          })
        }
      },
    }
  },
}

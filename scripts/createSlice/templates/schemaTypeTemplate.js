const schemaTypeTemplate = (slice) =>
  `// eslint-disable-next-line
export interface I${slice}Schema {}`

module.exports = { schemaTypeTemplate }

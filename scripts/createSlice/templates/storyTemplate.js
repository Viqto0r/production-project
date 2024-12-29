const { capitalize } = require('../capitalize')

const storyTemplate = (
  layer,
  slice
) => `import type { StoryObj } from '@storybook/react'
import { ${slice} } from './${slice}'

const meta = {
  title: '${capitalize(layer)}/${slice}',
  component: ${slice},
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ${slice}Normal: Story = {
  args: {},
  decorators: [],
}
`

module.exports = { storyTemplate }

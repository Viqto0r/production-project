import type { StoryObj } from '@storybook/react'
import { Code } from './Code'

const meta = {
  title: 'Shared/Code',
  component: Code,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const CodeLight: Story = {
  args: {
    text: `import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'

const meta = {
  title: 'Shared/Code',
  component: Code,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>
`,
  },
}

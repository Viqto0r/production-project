import type { StoryObj } from '@storybook/react'
import { ScrollToolbar } from './ScrollToolbar'

const meta = {
  title: 'Entities/ScrollToolbar',
  component: ScrollToolbar,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ScrollToolbarNormal: Story = {
  args: {},
  decorators: [],
}

import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
  title: 'Shared/ListBox',
  component: ListBox,
  args: {},
} satisfies Meta<typeof ListBox>

export default meta
export type Story = StoryObj<typeof meta>

export const ListBoxNormal: Story = {
  args: {
    items: [
      { content: '1', value: '1' },
      { content: '2', value: '2' },
      { content: '3', value: '3' },
      { content: '4', value: '4' },
    ],
    onChange() {},
    value: '1',
  },
}

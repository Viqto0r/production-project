import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../../../../Button'

const meta = {
  title: 'Shared/Dropdown',
  component: Dropdown,
  args: {},
} satisfies Meta<typeof Dropdown>

export default meta
export type Story = StoryObj<typeof meta>

export const DropdownNormal: Story = {
  args: {
    items: [{ content: 'first' }, { content: 'second' }, { content: 'third' }],
    trigger: <Button>{'Click' + ' me'}</Button>,
  },
  decorators: [],
}

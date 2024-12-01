import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'

const meta = {
  title: 'Shared/Drawer',
  component: Drawer,
  args: {},
} satisfies Meta<typeof Drawer>

export default meta
export type Story = StoryObj<typeof meta>

export const DrawerNormal: Story = {
  args: {},
  decorators: [],
}

import type { StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'

const meta = {
  title: 'Shared/Drawer',
  component: Drawer,
  args: { onClose: () => {} },
}

export default meta
export type Story = StoryObj<typeof meta>

export const DrawerNormal: Story = {
  args: {
    children: <div>{`Drawer`}</div>,
    isOpen: true,
  },
  decorators: [],
}

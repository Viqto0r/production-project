import type { StoryObj } from '@storybook/react'
import { NotificationItem } from './NotificationItem'

const meta = {
  title: 'Entities/Notification/NotificationItem',
  component: NotificationItem,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const NotificationItemNormal: Story = {
  args: {
    item: { description: 'description', id: '1', title: 'title' },
  },
  decorators: [],
}

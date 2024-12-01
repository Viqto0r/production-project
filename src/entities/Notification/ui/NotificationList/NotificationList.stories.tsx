import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'

const meta = {
  title: 'Entities/Notification/NotificationList',
  component: NotificationList,
  args: {},
} satisfies Meta<typeof NotificationList>

export default meta
export type Story = StoryObj<typeof meta>

export const NotificationNormal: Story = {
  args: {},
  decorators: [],
}

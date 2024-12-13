import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Entities/Notification/NotificationList',
  component: NotificationList,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotificationList>

export default meta
export type Story = StoryObj<typeof meta>

export const NotificationNormal: Story = {
  args: {},
  decorators: [],
}

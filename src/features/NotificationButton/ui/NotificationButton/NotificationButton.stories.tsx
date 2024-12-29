import type { StoryObj } from '@storybook/react'
import { NotificationButton } from './NotificationButton'

const meta = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const NotificationButtonNormal: Story = {
  args: {},
  decorators: [],
}

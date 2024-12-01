import type { Meta, StoryObj } from '@storybook/react'
import { NotificationButton } from './NotificationButton'

const meta = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  args: {},
} satisfies Meta<typeof NotificationButton>

export default meta
export type Story = StoryObj<typeof meta>

export const NotificationButtonNormal: Story = {
  args: {},
  decorators: [],
}

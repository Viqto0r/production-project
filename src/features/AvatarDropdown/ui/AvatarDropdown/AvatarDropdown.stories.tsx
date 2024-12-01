import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'

const meta = {
  title: 'Features/AvatarDropdown',
  component: AvatarDropdown,
  args: {},
} satisfies Meta<typeof AvatarDropdown>

export default meta
export type Story = StoryObj<typeof meta>

export const AvatarDropdownNormal: Story = {
  args: {},
  decorators: [],
}

import type { StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarPng from './Avatar.png'

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const AvatarSmall: Story = {
  args: {
    size: 100,
    src: AvatarPng,
    alt: 'Аватар',
  },
}

export const AvatarBig: Story = {
  args: {
    size: 150,
    src: AvatarPng,
    alt: 'Аватар',
  },
}

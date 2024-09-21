import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarSvg from './Avatar.png'

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,
  args: {},
} satisfies Meta<typeof Avatar>

export default meta
export type Story = StoryObj<typeof meta>

export const AvatarSmall: Story = {
  args: {
    size: 100,
    src: AvatarSvg,
    alt: 'Аватар',
  },
}

export const AvatarBig: Story = {
  args: {
    size: 150,
    src: AvatarSvg,
    alt: 'Аватар',
  },
}

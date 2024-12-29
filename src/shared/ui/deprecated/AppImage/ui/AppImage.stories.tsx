import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'

const meta = {
  title: 'Entities/AppImage',
  component: AppImage,
  args: {},
} satisfies Meta<typeof AppImage>

export default meta
export type Story = StoryObj<typeof meta>

export const AppImageNormal: Story = {
  args: {},
  decorators: [],
}

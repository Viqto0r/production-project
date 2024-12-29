import type { StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'

const meta = {
  title: 'Entities/AppImage',
  component: AppImage,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const AppImageNormal: Story = {
  args: {},
  decorators: [],
}

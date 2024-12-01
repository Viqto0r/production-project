import type { Meta, StoryObj } from '@storybook/react'
import { Overlay } from './Overlay'

const meta = {
  title: 'Shared/Overlay',
  component: Overlay,
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof Overlay>

export default meta
export type Story = StoryObj<typeof meta>

export const OverlayNormal: Story = {
  args: {},
  decorators: [],
}

import type { StoryObj } from '@storybook/react'
import { ScrollToTopButton } from './ScrollToTopButton'

const meta = {
  title: 'Features/ScrollToTopButton',
  component: ScrollToTopButton,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ScrollToTopButtonNormal: Story = {
  args: {},
  decorators: [],
}

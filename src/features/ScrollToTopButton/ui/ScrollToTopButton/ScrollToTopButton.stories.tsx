import type { StoryObj } from '@storybook/react'
import { ScrollToTopButton } from './ScrollToTopButton'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'

const meta = {
  title: 'Features/ScrollToTopButton',
  component: ScrollToTopButton,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ScrollToTopButtonNormal: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
}

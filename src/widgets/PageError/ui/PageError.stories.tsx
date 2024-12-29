import type { StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import { PageError } from './PageError'

const meta = {
  title: 'Widgets/PageError',
  component: PageError,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
  args: {},
}

export const PageErrorDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
}

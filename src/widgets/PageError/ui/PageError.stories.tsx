import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { PageError } from './PageError'

const meta = {
  title: 'Widgets/PageError',
  component: PageError,
  args: {},
} satisfies Meta<typeof PageError>

export default meta
export type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
  args: {},
}

export const PageErrorDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
}

import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { PageError } from './PageError'

const meta = {
  title: 'Widget/PageError',
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
  decorators: [themeDecorator(ETheme.DARK)],
}

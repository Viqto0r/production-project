import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { LoginForm } from './LoginForm'

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm,
  args: {},
} satisfies Meta<typeof LoginForm>

export default meta
export type Story = StoryObj<typeof meta>

export const LoginFormLight: Story = {
  args: {},
}

export const LoginFormDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

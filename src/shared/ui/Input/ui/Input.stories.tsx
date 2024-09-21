import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'

const meta = {
  title: 'Shared/Input',
  component: Input,
  args: {},
} satisfies Meta<typeof Input>

export default meta
export type Story = StoryObj<typeof meta>

export const InputLight: Story = {
  args: {
    value: 'test',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    placeholder: 'placeholder',
  },
}

export const InputDark: Story = {
  args: {
    value: 'test',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    placeholder: 'placeholder',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

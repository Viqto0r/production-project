import type { StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'

const meta = {
  title: 'Shared/Input',
  component: Input,
  args: {},
}

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
  decorators: [ThemeDecorator(ETheme.DARK)],
}

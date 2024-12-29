import type { StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    theme: {
      name: 'Theme',
      control: { type: 'inline-radio' },
    },
  },
}

export default meta
export type Story = StoryObj<typeof meta>

export const PrimaryButtonLight: Story = {
  args: {
    children: 'Кнопка',
  },
}

export const ClearButtonLight: Story = {
  args: {
    variant: 'clear',
    children: 'Кнопка',
  },
}

export const PrimaryButtonDark: Story = {
  args: {
    children: 'Кнопка',
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
}

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, EThemeButton } from './Button'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    theme: {
      name: 'Theme',
      options: [...Object.values(EThemeButton)],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
export type Story = StoryObj<typeof meta>

export const PrimaryButtonLight: Story = {
  args: {
    children: 'Кнопка',
  },
}

export const ClearButtonLight: Story = {
  args: {
    theme: EThemeButton.CLEAR,
    children: 'Кнопка',
  },
}

export const OutlineButtonLight: Story = {
  args: {
    theme: EThemeButton.OUTLINE,
    children: 'Кнопка',
  },
}

export const ClearButtonDark: Story = {
  args: {
    theme: EThemeButton.CLEAR,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const OutlineButtonDark: Story = {
  args: {
    theme: EThemeButton.OUTLINE,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

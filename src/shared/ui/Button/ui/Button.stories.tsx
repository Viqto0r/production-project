import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, EButtonSize, EButtonTheme } from './Button'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    theme: {
      name: 'Theme',
      options: [...Object.values(EButtonTheme)],
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
    theme: EButtonTheme.CLEAR,
    children: 'Кнопка',
  },
}

export const ClearInvertedButtonLight: Story = {
  args: {
    theme: EButtonTheme.CLEAR_INVERTED,
    children: 'Кнопка',
  },
}

export const OutlineButtonLight: Story = {
  args: {
    theme: EButtonTheme.OUTLINE,
    children: 'Кнопка',
  },
}

export const BackgroundButtonLight: Story = {
  args: {
    theme: EButtonTheme.BACKGROUND,
    children: 'Кнопка',
  },
}

export const InvertedBackgroundButtonLight: Story = {
  args: {
    theme: EButtonTheme.BACKGROUND_INVERTED,
    children: 'Кнопка',
  },
}

export const MSizeButtonLight: Story = {
  args: {
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.M_SIZE,
    children: 'Кнопка',
  },
}

export const LSizeButtonLight: Story = {
  args: {
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.L_SIZE,
    children: 'Кнопка',
  },
}

export const XLSizeButtonLight: Story = {
  args: {
    theme: EButtonTheme.OUTLINE,
    size: EButtonSize.XL_SIZE,
    children: 'Кнопка',
  },
}

export const PrimaryButtonDark: Story = {
  args: {
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const ClearButtonDark: Story = {
  args: {
    theme: EButtonTheme.CLEAR,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const ClearInvertedButtonDark: Story = {
  args: {
    theme: EButtonTheme.CLEAR_INVERTED,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const OutlineButtonDark: Story = {
  args: {
    theme: EButtonTheme.OUTLINE,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const BackgroundButtonDark: Story = {
  args: {
    theme: EButtonTheme.BACKGROUND_INVERTED,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const InvertedBackgroundButtonDark: Story = {
  args: {
    theme: EButtonTheme.BACKGROUND_INVERTED,
    children: 'Кнопка',
  },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const SquareMSizeButton: Story = {
  args: {
    theme: EButtonTheme.BACKGROUND,
    size: EButtonSize.M_SIZE,
    children: '>',
  },
}

export const SquareLSizeButton: Story = {
  args: {
    theme: EButtonTheme.BACKGROUND,
    size: EButtonSize.L_SIZE,
    children: '>',
    square: true,
  },
}

export const SquareXLSizeButton: Story = {
  args: {
    theme: EButtonTheme.BACKGROUND,
    size: EButtonSize.XL_SIZE,
    children: '>',
    square: true,
  },
}

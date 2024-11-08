import type { Meta, StoryObj } from '@storybook/react'

import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ETextSize, ETextTheme, Text } from './Text'

const meta = {
  title: 'Shared/Text',
  component: Text,
  args: {},
} satisfies Meta<typeof Text>

export default meta
export type Story = StoryObj<typeof meta>

export const FullLight: Story = {
  args: { title: 'Title', text: 'Text' },
}

export const OnlyTitleLight: Story = {
  args: { title: 'Title' },
}

export const OnlyTextLight: Story = {
  args: { text: 'Text' },
}

export const Error: Story = {
  args: { title: 'Title', theme: ETextTheme.ERROR },
}

export const FullDark: Story = {
  args: { title: 'Title', text: 'Text' },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const OnlyTitleDark: Story = {
  args: { title: 'Title' },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const OnlyTextDark: Story = {
  args: { text: 'Text' },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const ErrorDark: Story = {
  args: { title: 'Title', theme: ETextTheme.ERROR },
  decorators: [themeDecorator(ETheme.DARK)],
}

export const SizeL: Story = {
  args: { title: 'Title', text: 'Text', size: ETextSize.L },
}

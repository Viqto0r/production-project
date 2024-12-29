import type { StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import { Text } from './Text'

const meta = {
  title: 'Shared/Text',
  component: Text,
  args: {},
}

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
  args: { title: 'Title', variant: 'error' },
}

export const FullDark: Story = {
  args: { title: 'Title', text: 'Text' },
  decorators: [ThemeDecorator(ETheme.DARK)],
}

export const OnlyTitleDark: Story = {
  args: { title: 'Title' },
  decorators: [ThemeDecorator(ETheme.DARK)],
}

export const OnlyTextDark: Story = {
  args: { text: 'Text' },
  decorators: [ThemeDecorator(ETheme.DARK)],
}

export const ErrorDark: Story = {
  args: { title: 'Title', variant: 'error' },
  decorators: [ThemeDecorator(ETheme.DARK)],
}

export const SizeL: Story = {
  args: { title: 'Title', text: 'Text', size: 'l' },
}

export const SizeM: Story = {
  args: { title: 'Title', text: 'Text', size: 'm' },
}

export const SizeS: Story = {
  args: { title: 'Title', text: 'Text', size: 's' },
}

import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { Loader } from './Loader'

const meta = {
  title: 'Shared/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta
export type Story = StoryObj<typeof meta>

export const LoaderLight: Story = {
  args: {},
}

export const LoaderDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK)],
}

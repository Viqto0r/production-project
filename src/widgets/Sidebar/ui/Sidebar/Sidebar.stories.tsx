import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'

const meta = {
  title: 'Widget/Sidebar',
  component: Sidebar,
  args: {},
} satisfies Meta<typeof Sidebar>

export default meta
export type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {
  args: {},
}

export const SidebarDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

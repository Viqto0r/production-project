import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  args: {},
} satisfies Meta<typeof Sidebar>

export default meta
export type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: {} } })],
}

export const SidebarDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
}

export const SidebarNoAuth: Story = {
  args: {},
  decorators: [StoreDecorator({ user: {} })],
}

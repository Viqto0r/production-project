import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import AdminPanelPage from './AdminPanelPage'

const meta = {
  title: 'Pages/AdminPanelPage',
  component: AdminPanelPage,
  args: {},
} satisfies Meta<typeof AdminPanelPage>

export default meta
export type Story = StoryObj<typeof meta>

export const AdminPanelPageLight: Story = {
  args: {},
}

export const AdminPanelPageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

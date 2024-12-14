import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import AdminPanelPage from './AdminPanelPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/AdminPanelPage',
  component: AdminPanelPage,
  args: {},
} satisfies Meta<typeof AdminPanelPage>

export default meta
export type Story = StoryObj<typeof meta>

export const AdminPanelPageLight: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const AdminPanelPageDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})],
}

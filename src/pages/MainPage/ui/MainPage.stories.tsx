import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import MainPage from './MainPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/MainPage',
  component: MainPage,
  args: {},
} satisfies Meta<typeof MainPage>

export default meta
export type Story = StoryObj<typeof meta>

export const MainPageLight: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const MainPageDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})],
}

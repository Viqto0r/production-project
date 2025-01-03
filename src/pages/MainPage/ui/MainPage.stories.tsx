import type { StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import MainPage from './MainPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/MainPage',
  component: MainPage,
  args: {},
}

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

import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import MainPage from './MainPage'

const meta = {
  title: 'Pages/MainPage',
  component: MainPage,
  args: {},
} satisfies Meta<typeof MainPage>

export default meta
export type Story = StoryObj<typeof meta>

export const MainPageLight: Story = {
  args: {},
}

export const MainPageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

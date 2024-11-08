import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
  args: {},
} satisfies Meta<typeof ArticlesPage>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticlesPageLight: Story = {
  args: {},
}

export const ArticlesPageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

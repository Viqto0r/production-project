import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import ArticleDetailsPage from './ArticleDetailsPage'

const meta = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  args: {},
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleDetailsPageLight: Story = {
  args: {},
}

export const ArticleDetailsPageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import ArticleDetailsPage from './ArticleDetailsPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
// eslint-disable-next-line
import { articleMock } from '@/entities/Article/ui/ArticleDetails/articleMock'

const meta = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  args: {},
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleDetailsPageLight: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: articleMock,
      },
    }),
  ],
}

export const ArticleDetailsPageDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator({
      articleDetails: {
        data: articleMock,
      },
    }),
  ],
}

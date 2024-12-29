import type { StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import ArticleDetailsPage from './ArticleDetailsPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { articleMock } from '@/entities/Article/testing'

const meta = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  args: {},
}

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

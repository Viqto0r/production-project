import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'
import { articleMock } from '../ArticleDetails/ArticleDetails.stories'
import { EArticleView } from '../../model/types/article'

const meta = {
  title: 'Entities/Article/ArticleListItem',
  component: ArticleListItem,
  args: {},
} satisfies Meta<typeof ArticleListItem>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleListItemBig: Story = {
  args: {
    article: articleMock,
    view: EArticleView.BIG,
  },
  decorators: [],
}

export const ArticleListItemSmall: Story = {
  args: {
    article: articleMock,
    view: EArticleView.SMALL,
  },
  decorators: [],
}

import type { StoryObj } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'
import { EArticleView } from '../../model/consts/consts'
import { articleMock } from '../ArticleDetails/articleMock'

const meta = {
  title: 'Entities/Article/ArticleListItem',
  component: ArticleListItem,
  args: {},
}

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

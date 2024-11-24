import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { EArticleView } from '../../model/types/article'
import { articleMock } from '../ArticleDetails/articleMock'

const meta = {
  title: 'Entities/Article/ArticleList',
  component: ArticleList,
  args: {},
} satisfies Meta<typeof ArticleList>

export default meta
export type Story = StoryObj<typeof meta>

const getList = (length: number) => {
  return Array.from({ length }).map((_, idx) => ({
    ...articleMock,
    id: idx.toString(),
  }))
}

export const ArticleListSmall: Story = {
  args: {
    articles: getList(9),
  },
  decorators: [],
}

export const ArticleListSmallLoading: Story = {
  args: {
    articles: [],
    isLoading: true,
  },
  decorators: [],
}

export const ArticleListBig: Story = {
  args: {
    articles: getList(3),
    view: EArticleView.BIG,
  },
  decorators: [],
}

export const ArticleListBigLoading: Story = {
  args: {
    articles: [],
    view: EArticleView.BIG,
    isLoading: true,
  },
  decorators: [],
}

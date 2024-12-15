import type { Meta, StoryObj } from '@storybook/react'
import { ArticleViewSelector } from './ArticleViewSelector'
import { EArticleView } from '@/entities/Article'

const meta = {
  title: 'Features/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  args: {},
} satisfies Meta<typeof ArticleViewSelector>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleViewSelectorNormal: Story = {
  args: {
    view: EArticleView.BIG,
  },
  decorators: [],
}
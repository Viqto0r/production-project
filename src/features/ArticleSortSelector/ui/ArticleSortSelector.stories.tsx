import type { StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta = {
  title: 'Features/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  args: { onChangeOrder: () => {}, onChangeSort: () => {} },
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleSortSelectorNormal: Story = {
  args: {},
}

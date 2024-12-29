import type { StoryObj } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'
import { EArticleType } from '@/entities/Article'

const meta = {
  title: 'Features/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleTypeTabsNormal: Story = {
  args: {
    value: EArticleType.ALL,
    onChangeTab: () => {},
  },
  decorators: [],
}

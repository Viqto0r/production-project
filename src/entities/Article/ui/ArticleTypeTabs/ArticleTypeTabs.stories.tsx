import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'
import { EArticleType } from '../../model/consts/consts'

const meta = {
  title: 'Entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  args: {},
} satisfies Meta<typeof ArticleTypeTabs>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleTypeTabsNormal: Story = {
  args: {
    value: EArticleType.ALL,
    onChangeTab: () => {},
  },
  decorators: [],
}

import type { Meta, StoryObj } from '@storybook/react'
import { ArticleInfiniteList } from './ArticleInfiniteList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  args: {},
} satisfies Meta<typeof ArticleInfiniteList>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleInfiniteListNormal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

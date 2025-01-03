import type { StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/ArticleEditPage/ArticleEditPage',
  component: ArticleEditPage,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleEditPageNormal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

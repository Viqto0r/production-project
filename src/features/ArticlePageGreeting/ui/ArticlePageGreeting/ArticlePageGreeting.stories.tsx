import type { StoryObj } from '@storybook/react'
import { ArticlePageGreeting } from './ArticlePageGreeting'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  args: {},
  decorators: [StoreDecorator({})],
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticlePageGreetingNormal: Story = {
  args: {},
  decorators: [],
}

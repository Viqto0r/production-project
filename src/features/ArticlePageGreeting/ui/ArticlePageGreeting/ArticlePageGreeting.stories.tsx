import type { StoryObj } from '@storybook/react'
import { ArticlePageGreeting } from './ArticlePageGreeting'

const meta = {
  title: 'Features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticlePageGreetingNormal: Story = {
  args: {},
  decorators: [],
}

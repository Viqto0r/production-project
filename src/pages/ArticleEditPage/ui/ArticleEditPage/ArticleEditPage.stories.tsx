import type { Meta, StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'

const meta = {
  title: 'Pages/ArticleEditPage/ArticleEditPage',
  component: ArticleEditPage,
  args: {},
} satisfies Meta<typeof ArticleEditPage>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleEditPageNormal: Story = {
  args: {},
  decorators: [],
}

import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

const meta = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  args: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleDetailsPageHeaderNormal: Story = {
  args: {},
  decorators: [],
}

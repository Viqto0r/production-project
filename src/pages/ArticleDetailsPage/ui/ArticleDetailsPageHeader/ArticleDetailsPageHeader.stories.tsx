import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  args: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleDetailsPageHeaderNormal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

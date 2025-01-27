import type { StoryObj } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleDetailsCommentsNormal: Story = {
  args: { id: '1' },
  decorators: [StoreDecorator({})],
}

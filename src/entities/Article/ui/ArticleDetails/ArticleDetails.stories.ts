import type { StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { articleMock } from './articleMock'

const meta = {
  title: 'Entities/ArticleDetails',
  component: ArticleDetails,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleDetailsNormal: Story = {
  args: { id: '1' },
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: articleMock,
      },
    }),
  ],
}

export const ArticleDetailsError: Story = {
  args: { id: '1' },
  decorators: [
    StoreDecorator({
      articleDetails: {
        error: 'error',
      },
    }),
  ],
}

export const ArticleDetailsLoading: Story = {
  args: { id: '1' },
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
}

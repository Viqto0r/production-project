import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { articleMock } from '@/entities/Article/testing'

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  args: {},
  parameters: {
    mockData: [
      {
        url: __API__ + '/articles?_limit=3',
        method: 'GET',
        status: 200,
        response: [
          { ...articleMock, id: '1' },
          { ...articleMock, id: '2' },
          { ...articleMock, id: '3' },
        ],
      },
    ],
  },
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleRecommendationsListNormal: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'admin',
        },
      },
    }),
  ],
}

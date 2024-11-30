import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type IArticle } from 'entities/Article'

const article: IArticle = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: '',
}

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  args: {},
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleRecommendationsListNormal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: __API__ + '/articles?_limit=3',
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
}

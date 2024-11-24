import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { storeDecorator } from 'shared/config/storybook/storeDecorator'
import { articleMock } from './articleMock'

const meta = {
  title: 'Entities/ArticleDetails',
  component: ArticleDetails,
  args: {},
} satisfies Meta<typeof ArticleDetails>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleDetailsNormal: Story = {
  args: { id: '1' },
  decorators: [
    storeDecorator({
      articleDetails: {
        data: articleMock,
      },
    }),
  ],
}

export const ArticleDetailsError: Story = {
  args: { id: '1' },
  decorators: [
    storeDecorator({
      articleDetails: {
        error: 'error',
      },
    }),
  ],
}

export const ArticleDetailsLoading: Story = {
  args: { id: '1' },
  decorators: [
    storeDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
}

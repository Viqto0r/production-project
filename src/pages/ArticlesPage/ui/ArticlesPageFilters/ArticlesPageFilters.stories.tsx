import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  args: {},
} satisfies Meta<typeof ArticlesPageFilters>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticlesPageFiltersNormal: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

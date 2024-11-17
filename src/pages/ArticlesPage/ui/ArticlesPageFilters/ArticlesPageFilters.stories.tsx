import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'

const meta = {
  title: 'Entities/ArticlesPageFilters',
  component: ArticlesPageFilters,
  args: {},
} satisfies Meta<typeof ArticlesPageFilters>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticlesPageFiltersNormal: Story = {
  args: {},
  decorators: [],
}

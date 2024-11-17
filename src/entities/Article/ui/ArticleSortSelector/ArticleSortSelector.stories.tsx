import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta = {
  title: 'Entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  args: {},
} satisfies Meta<typeof ArticleSortSelector>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticleSortSelectorNormal: Story = {
  args: {},
}

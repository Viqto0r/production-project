import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  args: {},
} satisfies Meta<typeof ArticlesPage>

export default meta
export type Story = StoryObj<typeof meta>

export const ArticlesPageLight: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const ArticlesPageDark: Story = {
  args: {},
  decorators: [StoreDecorator({}), ThemeDecorator(ETheme.DARK)],
}

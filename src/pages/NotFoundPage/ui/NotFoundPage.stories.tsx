import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import { NotFoundPage } from './NotFoundPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  args: {},
} satisfies Meta<typeof NotFoundPage>

export default meta
export type Story = StoryObj<typeof meta>

export const NotFoundPageLight: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const NotFoundPageDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})],
}

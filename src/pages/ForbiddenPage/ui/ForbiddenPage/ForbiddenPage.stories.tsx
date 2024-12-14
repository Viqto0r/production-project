import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import ForbiddenPage from './ForbiddenPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/ForbiddenPage',
  component: ForbiddenPage,
  args: {},
} satisfies Meta<typeof ForbiddenPage>

export default meta
export type Story = StoryObj<typeof meta>

export const ForbiddenPageLight: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const ForbiddenPageDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})],
}

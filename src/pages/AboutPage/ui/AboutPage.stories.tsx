import type { StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import AboutPage from './AboutPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/AboutPage',
  component: AboutPage,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const AboutPageLight: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const AboutPageDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})],
}

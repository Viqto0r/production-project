import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import AboutPage from './AboutPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/AboutPage',
  component: AboutPage,
  args: {},
} satisfies Meta<typeof AboutPage>

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

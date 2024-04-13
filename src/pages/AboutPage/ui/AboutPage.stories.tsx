import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import AboutPage from './AboutPage'

const meta = {
  title: 'Pages/AboutPage',
  component: AboutPage,
  args: {},
} satisfies Meta<typeof AboutPage>

export default meta
export type Story = StoryObj<typeof meta>

export const AboutPageLight: Story = {
  args: {},
}

export const AboutPageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

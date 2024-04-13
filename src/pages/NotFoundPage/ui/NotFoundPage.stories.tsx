import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { NotFoundPage } from './NotFoundPage'

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  args: {},
} satisfies Meta<typeof NotFoundPage>

export default meta
export type Story = StoryObj<typeof meta>

export const NotFoundPageLight: Story = {
  args: {},
}

export const NotFoundPageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import ForbiddenPage from './ForbiddenPage'

const meta = {
  title: 'Pages/ForbiddenPage',
  component: ForbiddenPage,
  args: {},
} satisfies Meta<typeof ForbiddenPage>

export default meta
export type Story = StoryObj<typeof meta>

export const ForbiddenPageLight: Story = {
  args: {},
}

export const ForbiddenPageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

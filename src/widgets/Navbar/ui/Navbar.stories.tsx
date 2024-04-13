import type { Meta, StoryObj } from '@storybook/react'

import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Navbar } from './Navbar'

const meta = {
  title: 'Widget/Navbar',
  component: Navbar,
  args: {},
} satisfies Meta<typeof Navbar>

export default meta
export type Story = StoryObj<typeof meta>

export const NavbarLight: Story = {
  args: {},
}

export const NavbarDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK)],
}

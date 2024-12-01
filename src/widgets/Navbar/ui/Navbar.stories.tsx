import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type IStateSchema } from 'app/providers/StoreProvider'

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  args: {},
} satisfies Meta<typeof Navbar>

export default meta
export type Story = StoryObj<typeof meta>

const initialState: DeepPartial<IStateSchema> = {
  user: {
    authData: {},
  },
}

export const NavbarLight: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const NavbarDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({})],
}

export const AuthNavbarLight: Story = {
  args: {},
  decorators: [StoreDecorator(initialState)],
}

export const AuthNavbarDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator(initialState)],
}

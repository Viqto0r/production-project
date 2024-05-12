import type { Meta, StoryObj } from '@storybook/react'

import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Navbar } from './Navbar'
import { storeDecorator } from 'shared/config/storybook/storeDecorator'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

const meta = {
  title: 'Widget/Navbar',
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
  decorators: [storeDecorator({})],
}

export const NavbarDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK), storeDecorator({})],
}

export const AuthNavbarLight: Story = {
  args: {},
  decorators: [storeDecorator(initialState)],
}

export const AuthNavbarDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK), storeDecorator(initialState)],
}

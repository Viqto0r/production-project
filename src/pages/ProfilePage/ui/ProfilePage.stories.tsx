import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import ProfilePage from './ProfilePage'
import { storeDecorator } from 'shared/config/storybook/storeDecorator'

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  args: {},
} satisfies Meta<typeof ProfilePage>

export default meta
export type Story = StoryObj<typeof meta>

export const ProfilePageLight: Story = {
  args: {},
  decorators: [storeDecorator({})],
}

export const ProfilePageDark: Story = {
  args: {},
  decorators: [themeDecorator(ETheme.DARK), storeDecorator({})],
}

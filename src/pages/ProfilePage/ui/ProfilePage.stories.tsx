import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import avatar from '@/shared/assets/tests/Avatar.png'
import { ECountry } from '@/entities/CountrySelect'
import { ECurrency } from '@/entities/CurrencySelect'

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  args: {},
} satisfies Meta<typeof ProfilePage>

export default meta
export type Story = StoryObj<typeof meta>

const profile = {
  form: {
    age: 22,
    avatar,
    city: 'city',
    country: ECountry.RUSSIA,
    currency: ECurrency.EUR,
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
  },
}

export const ProfilePageLight: Story = {
  args: {},
  decorators: [StoreDecorator({ profile })],
}

export const ProfilePageDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator({ profile })],
}

import type { StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { ECountry } from '@/entities/CountrySelect'
import { ECurrency } from '@/entities/CurrencySelect'
import avatar from '@/shared/assets/tests/Avatar.png'

const meta = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ProfileCardLight: Story = {
  args: {
    data: {
      age: 30,
      city: 'TestCity',
      country: ECountry.RUSSIA,
      currency: ECurrency.RUB,
      firstName: 'TestFirstName',
      lastName: 'TestLastName',
      username: 'TestUsername',
      avatar,
    },
    onChangeValue: () => {},
  },
}

export const ProfileCardError: Story = {
  args: {
    error: 'error',
    onChangeValue: () => {},
  },
}

export const ProfileCardLoading: Story = {
  args: {
    isLoading: true,
    onChangeValue: () => {},
  },
}

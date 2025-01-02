import type { StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { ECountry } from '@/entities/CountrySelect'
import { ECurrency } from '@/entities/CurrencySelect'
import avatar from '@/shared/assets/tests/Avatar.png'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'

const meta = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  args: {
    onChangeValue: () => {},
  },
}

export default meta
export type Story = StoryObj<typeof meta>

const args = {
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
}

export const ProfileCardLight: Story = {
  args,
}

export const ProfileCardDark: Story = {
  args,
  decorators: [ThemeDecorator(ETheme.DARK)],
}

export const ProfileCardLightRedesigned: Story = {
  args,
  decorators: [NewDesignDecorator],
}

export const ProfileCardDarkRedesigned: Story = {
  args,
  decorators: [NewDesignDecorator, ThemeDecorator(ETheme.DARK)],
}

export const ProfileCardError: Story = {
  args: {
    error: 'error',
  },
}

export const ProfileCardLoading: Story = {
  args: {
    isLoading: true,
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ECountry } from 'entities/CountrySelect'
import { ECurrency } from 'entities/CurrencySelect'
import avatar from 'shared/assets/tests/Avatar.png'

const meta = {
  title: 'Features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  args: {},
} satisfies Meta<typeof EditableProfileCard>

export default meta
export type Story = StoryObj<typeof meta>

export const EditableProfileCardNormal: Story = {
  args: { id: '1' },
  decorators: [
    StoreDecorator({
      profile: {
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
      },
    }),
  ],
}

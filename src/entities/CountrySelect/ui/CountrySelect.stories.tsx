import type { Meta, StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

const meta = {
  title: 'Entities/CurrencySelect',
  component: CountrySelect,
  args: {},
} satisfies Meta<typeof CountrySelect>

export default meta
export type Story = StoryObj<typeof meta>

export const CountrySelectLight: Story = {
  args: {},
}

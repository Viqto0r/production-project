import type { StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

const meta = {
  title: 'Entities/CurrencySelect',
  component: CurrencySelect,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const CurrencySelectLight: Story = {
  args: {},
}

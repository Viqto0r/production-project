import type { StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

const meta = {
  title: 'Entities/CountrySelect',
  component: CountrySelect,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const CountrySelectLight: Story = {
  args: {},
}

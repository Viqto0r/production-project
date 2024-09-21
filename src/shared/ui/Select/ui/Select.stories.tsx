import type { Meta, StoryObj } from '@storybook/react'
import { ESelectTheme, Select } from './Select'

const meta = {
  title: 'Shared/Select',
  component: Select,
  args: {},
} satisfies Meta<typeof Select>

export default meta
export type Story = StoryObj<typeof meta>

export const SelectLight: Story = {
  args: {
    label: 'Выберите значение',
    options: [
      { value: '1', content: 'Первый пункт' },
      { value: '2', content: 'Второй пункт' },
      { value: '3', content: 'Третий пункт' },
    ],
  },
}

export const SelectDark: Story = {
  args: {
    label: 'Выберите значение',
    options: [
      { value: '1', content: 'Первый пункт' },
      { value: '2', content: 'Второй пункт' },
      { value: '3', content: 'Третий пункт' },
    ],
    theme: ESelectTheme.DARK,
  },
}

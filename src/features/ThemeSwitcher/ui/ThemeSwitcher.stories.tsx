import type { StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Entities/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {},
  decorators: [StoreDecorator({})],
}

export default meta
export type Story = StoryObj<typeof meta>

export const ThemeSwitcherNormal: Story = {
  args: {},
  decorators: [],
}

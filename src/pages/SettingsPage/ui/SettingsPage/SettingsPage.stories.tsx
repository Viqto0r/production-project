import type { StoryObj } from '@storybook/react'
import SettingsPage from './SettingsPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Pages/SettingsPage',
  component: SettingsPage,
  args: {},
  decorators: [StoreDecorator({})],
}

export default meta
export type Story = StoryObj<typeof meta>

export const SettingsPageNormal: Story = {
  args: {},
  decorators: [],
}

import type { StoryObj } from '@storybook/react'
import SettingsPage from './SettingsPage'

const meta = {
  title: 'Pages/SettingsPage',
  component: SettingsPage,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const SettingsPageNormal: Story = {
  args: {},
  decorators: [],
}

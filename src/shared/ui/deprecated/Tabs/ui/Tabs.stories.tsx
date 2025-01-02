import type { StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'Shared/Deprecated/Tabs',
  component: Tabs,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const TabsNormal: Story = {
  args: {
    tabs: [
      { content: 'tab 1', value: 'tab 1' },
      { content: 'tab 2', value: 'tab 2' },
      { content: 'tab 3', value: 'tab 3' },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
  },
  decorators: [],
}

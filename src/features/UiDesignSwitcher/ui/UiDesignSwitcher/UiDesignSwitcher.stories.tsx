import type { StoryObj } from '@storybook/react'
import { UiDesignSwitcher } from './UiDesignSwitcher'

const meta = {
  title: 'Features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const UiDesignSwitcherNormal: Story = {
  args: {},
  decorators: [],
}

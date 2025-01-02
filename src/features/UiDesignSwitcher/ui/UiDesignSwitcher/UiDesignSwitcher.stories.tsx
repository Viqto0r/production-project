import type { StoryObj } from '@storybook/react'
import { UiDesignSwitcher } from './UiDesignSwitcher'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  args: {},
  decorators: [StoreDecorator({})],
}

export default meta
export type Story = StoryObj<typeof meta>

export const UiDesignSwitcherNormal: Story = {
  args: {},
  decorators: [],
}

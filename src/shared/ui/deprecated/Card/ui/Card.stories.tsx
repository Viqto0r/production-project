import type { StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../../Text'

const meta = {
  title: 'Shared/Deprecated/Card',
  component: Card,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const CardNormal: Story = {
  args: { children: <Text title="title" text="text" /> },
  decorators: [],
}

import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text'

const meta = {
  title: 'Shared/Card',
  component: Card,
  args: {},
} satisfies Meta<typeof Card>

export default meta
export type Story = StoryObj<typeof meta>

export const CardNormal: Story = {
  args: { children: <Text title="title" text="text" /> },
  decorators: [],
}

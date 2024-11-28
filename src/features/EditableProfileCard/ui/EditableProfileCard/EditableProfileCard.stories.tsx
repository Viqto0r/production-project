import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'

const meta = {
  title: 'features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  args: {},
} satisfies Meta<typeof EditableProfileCard>

export default meta
export type Story = StoryObj<typeof meta>

export const EditableProfileCardNormal: Story = {
  args: { id: '1' },
  decorators: [],
}

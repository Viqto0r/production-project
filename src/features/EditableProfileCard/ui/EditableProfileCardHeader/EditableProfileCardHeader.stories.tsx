import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'

const meta = {
  title: 'Entities/EditableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  args: {},
} satisfies Meta<typeof EditableProfileCardHeader>

export default meta
export type Story = StoryObj<typeof meta>

export const EditableProfileCardHeaderNormal: Story = {
  args: {},
  decorators: [],
}

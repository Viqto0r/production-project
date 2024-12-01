import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/EditableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  args: {},
} satisfies Meta<typeof EditableProfileCardHeader>

export default meta
export type Story = StoryObj<typeof meta>

export const EditableProfileCardHeaderNormal: Story = {
  args: {},
  decorators: [StoreDecorator({ profile: { data: { age: 22 } } })],
}

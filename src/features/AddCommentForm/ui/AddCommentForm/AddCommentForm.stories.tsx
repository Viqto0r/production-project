import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { storeDecorator } from 'shared/config/storybook/storeDecorator'

const meta = {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
  args: {},
} satisfies Meta<typeof AddCommentForm>

export default meta
export type Story = StoryObj<typeof meta>

export const AddCommentFormNormal: Story = {
  args: { onSendComment: () => {} },
  decorators: [
    storeDecorator({
      addCommentForm: {
        error: '',
        text: 'Text',
      },
    }),
  ],
}

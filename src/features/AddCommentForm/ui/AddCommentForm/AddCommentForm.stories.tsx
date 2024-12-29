import type { StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const AddCommentFormNormal: Story = {
  args: { onSendComment: () => {} },
  decorators: [
    StoreDecorator({
      addCommentForm: {
        error: '',
        text: 'Text',
      },
    }),
  ],
}

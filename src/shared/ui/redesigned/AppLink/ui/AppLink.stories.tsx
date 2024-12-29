import type { StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AppLink } from './AppLink'

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  args: { onClick: fn() },
}

export default meta
export type Story = StoryObj<typeof meta>

export const PrimaryLink: Story = {
  args: {
    children: 'Ссылка',
    to: '/',
    variant: 'primary',
  },
}

export const RedLink: Story = {
  args: {
    children: 'Ссылка',
    to: '/',
    variant: 'red',
  },
}

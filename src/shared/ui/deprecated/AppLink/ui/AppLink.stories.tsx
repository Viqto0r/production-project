import type { StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AppLink, EAppLinkTheme } from './AppLink'

const meta = {
  title: 'Shared/Deprecated/AppLink',
  component: AppLink,
  args: { onClick: fn() },
}

export default meta
export type Story = StoryObj<typeof meta>

export const PrimaryLink: Story = {
  args: {
    children: 'Ссылка',
    to: '/',
    theme: EAppLinkTheme.PRIMARY,
  },
}

export const SecondaryLink: Story = {
  args: {
    children: 'Ссылка',
    to: '/',
    theme: EAppLinkTheme.SECONDARY,
  },
}

export const OutlineLink: Story = {
  args: {
    children: 'Кнопка',
    to: '/',
    theme: EAppLinkTheme.OUTLINE,
  },
}

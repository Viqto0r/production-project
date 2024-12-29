import type { StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'
import { Modal } from './Modal'

const meta = {
  title: 'Shared/Modal',
  component: Modal,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam
        repudiandae eum laboriosam corrupti aut maiores beatae dicta blanditiis
        a, sunt sint sapiente doloremque, deserunt neque? Doloribus illum nobis
        quasi.`,
    isOpen: true,
    onClose: () => {},
  },
}

export const ModalDark: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam
        repudiandae eum laboriosam corrupti aut maiores beatae dicta blanditiis
        a, sunt sint sapiente doloremque, deserunt neque? Doloribus illum nobis
        quasi.`,
    isOpen: true,
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
}

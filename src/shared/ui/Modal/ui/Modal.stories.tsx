import type { Meta, StoryObj } from '@storybook/react'

import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Modal } from './Modal'

const meta = {
  title: 'Widget/Modal',
  component: Modal,
  args: {},
} satisfies Meta<typeof Modal>

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
  decorators: [themeDecorator(ETheme.DARK)],
}

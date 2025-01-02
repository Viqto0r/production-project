import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
  title: 'Shared/Deprecated/ListBox',
  component: ListBox,
  args: {
    onChange() {},
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListBox>

export default meta
export type Story = StoryObj<typeof meta>

export const ListBoxBottomLeft: Story = {
  args: {
    items: [
      { content: 'вйцйвйцвйцв', value: 'вйцйвйцвйцв' },
      { content: 'fwqfqwfqw', value: 'fwqfqwfqw' },
    ],
    value: '1',
    direction: 'bottom-left',
  },
}
export const ListBoxBottomRight: Story = {
  args: {
    items: [
      { content: 'вйцйвйцвйцв', value: 'вйцйвйцвйцв' },
      { content: 'fwqfqwfqw', value: 'fwqfqwfqw' },
    ],
    value: '1',
    direction: 'bottom-right',
  },
}

export const ListBoxTopLeft: Story = {
  args: {
    items: [
      { content: 'вйцйвйцвйцв', value: 'вйцйвйцвйцв' },
      { content: 'fwqfqwfqw', value: 'fwqfqwfqw' },
    ],
    value: '1',
    direction: 'top-left',
  },
}

export const ListBoxTopRight: Story = {
  args: {
    items: [
      { content: 'вйцйвйцвйцв', value: 'вйцйвйцвйцв' },
      { content: 'fwqfqwfqw', value: 'fwqfqwfqw' },
    ],
    value: '1',
    direction: 'top-right',
  },
}

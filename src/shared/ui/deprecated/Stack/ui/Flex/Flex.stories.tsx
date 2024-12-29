import type { StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta = {
  title: 'Shared/Flex',
  component: Flex,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const Row: Story = {
  args: {
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

export const RowGap32: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

export const ColumnAlignEnd: Story = {
  args: {
    direction: 'column',
    align: 'end',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    ),
  },
  decorators: [],
}

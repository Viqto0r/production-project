import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'
import { Button } from '../../../Button'

const meta = {
  title: 'Entities/Popover',
  component: Popover,
  args: {},
} satisfies Meta<typeof Popover>

export default meta
export type Story = StoryObj<typeof meta>

const trigger = <Button>{`${'Кнопка'}`}</Button>

export const PopoverNormal: Story = {
  args: {
    trigger,
  },
  decorators: [],
}

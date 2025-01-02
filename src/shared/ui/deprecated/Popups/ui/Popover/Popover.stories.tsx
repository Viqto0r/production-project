import type { StoryObj } from '@storybook/react'
import { Popover } from './Popover'
import { Button } from '../../../Button'

const meta = {
  title: 'Shared/Deprecated/Popover',
  component: Popover,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

const trigger = <Button>{`${'Кнопка'}`}</Button>

export const PopoverNormal: Story = {
  args: {
    trigger,
  },
  decorators: [],
}

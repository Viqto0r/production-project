import type { StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'

const meta = {
  title: 'Shared/Deprecated/Skeleton',
  component: Skeleton,
  args: {},
}

export default meta
export type Story = StoryObj<typeof meta>

export const SkeletonNormal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
}

export const SkeletonCircle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
}

export const SkeletonNormalDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [ThemeDecorator(ETheme.DARK)],
}

export const SkeletonCircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },

  decorators: [ThemeDecorator(ETheme.DARK)],
}

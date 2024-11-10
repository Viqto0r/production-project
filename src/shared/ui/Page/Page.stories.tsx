import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'

const meta = {
  title: 'Entities/Page',
  component: Page,
  args: {},
} satisfies Meta<typeof Page>

export default meta
export type Story = StoryObj<typeof meta>

export const PageNormal: Story = {
  args: { children: <div>123</div> },
  decorators: [],
}

import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'
import { storeDecorator } from 'shared/config/storybook/storeDecorator'

const meta = {
  title: 'Widgets/Page',
  component: Page,
  args: {},
} satisfies Meta<typeof Page>

export default meta
export type Story = StoryObj<typeof meta>

export const PageNormal: Story = {
  args: { children: <div>123</div> },
  decorators: [storeDecorator({ scrollSaver: { scroll: { top: 0 } } })],
}

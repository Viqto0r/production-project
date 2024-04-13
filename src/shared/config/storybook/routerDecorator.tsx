import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const routerDecorator = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

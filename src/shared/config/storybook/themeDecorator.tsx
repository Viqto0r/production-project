import { type ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { type StoryFn } from '@storybook/react'
import 'app/styles/index.scss'

/* eslint-disable react/display-name */
export const themeDecorator = (theme: ETheme) => (Story: StoryFn) => (
  <div className={`app ${theme}`} style={{ width: '100%', height: '100%' }}>
    <Story />
  </div>
)

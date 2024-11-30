import { type ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { type StoryFn } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`} style={{ width: '100%', height: '100%' }}>
        <Story />
      </div>
    </ThemeProvider>
  )

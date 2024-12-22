import { type ETheme } from '@/shared/const/theme'
import { type StoryFn } from '@storybook/react'
// eslint-disable-next-line
import '@/app/styles/index.scss'
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`} style={{ width: '100%', height: '100%' }}>
        <Story />
      </div>
    </ThemeProvider>
  )

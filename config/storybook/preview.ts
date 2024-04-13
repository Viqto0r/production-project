import type { Preview } from '@storybook/react'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { routerDecorator } from 'shared/config/storybook/routerDecorator'
import { styleDecorator } from 'shared/config/storybook/styleDecorator'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [styleDecorator, themeDecorator(ETheme.LIGHT), routerDecorator],
}

export default preview

import type { Preview } from '@storybook/react'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator/TranslationDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    mockAddonConfigs: {
      globalMockData: [
        {
          // An array of mock objects which will add in every story
          url: 'http://localhost:3000/',
          method: 'PUT',
          status: 201,
          response: {},
        },
      ],
      refreshStoryOnUpdate: true, // This property re-renders the story if there's any data changes
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(ETheme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    TranslationDecorator,
  ],
}

export default preview

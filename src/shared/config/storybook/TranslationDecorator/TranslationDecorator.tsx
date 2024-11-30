import { I18nextProvider } from 'react-i18next'
import i18nForTest from '../../i18n/i18nForTests'
import { type StoryFn } from '@storybook/react'

export const TranslationDecorator = (Story: StoryFn) => (
  <I18nextProvider i18n={i18nForTest}>
    <Story />
  </I18nextProvider>
)

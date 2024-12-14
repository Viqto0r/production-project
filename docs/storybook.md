## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, EButtonSize, EButtonTheme } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    theme: {
      name: 'Theme',
      options: [...Object.values(EButtonTheme)],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
export type Story = StoryObj<typeof meta>

export const PrimaryButtonLight: Story = {
  args: {
    children: 'Кнопка',
  },
}

export const ClearButtonLight: Story = {
  args: {
    theme: EButtonTheme.CLEAR,
    children: 'Кнопка',
  },
}

export const ClearInvertedButtonLight: Story = {
  args: {
    theme: EButtonTheme.CLEAR_INVERTED,
    children: 'Кнопка',
  },
}
```

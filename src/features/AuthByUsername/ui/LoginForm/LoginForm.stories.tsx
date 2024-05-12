import type { Meta, StoryObj } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator'
import { ETheme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import LoginForm from './LoginForm'
import { storeDecorator } from 'shared/config/storybook/storeDecorator'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm,
  args: {},
} satisfies Meta<typeof LoginForm>

export default meta
export type Story = StoryObj<typeof meta>

const initialState: DeepPartial<IStateSchema> = {
  loginForm: {
    username: 'admin',
    password: '123',
  },
}

const initialStateWithError: DeepPartial<IStateSchema> = {
  loginForm: {
    username: 'admin',
    password: '123',
    error: 'Вы ввели неверный логин или пароль',
  },
}

const initialStateWithLoading: DeepPartial<IStateSchema> = {
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: true,
  },
}

export const LoginFormLight: Story = {
  args: { onSuccess() {} },
  decorators: [storeDecorator(initialState)],
}

export const LoginFormWithErrorLight: Story = {
  args: { onSuccess() {} },
  decorators: [storeDecorator(initialStateWithError)],
}

export const LoginFormDark: Story = {
  args: { onSuccess() {} },
  decorators: [themeDecorator(ETheme.DARK), storeDecorator(initialState)],
}

export const LoginFormWithErrorDark: Story = {
  args: { onSuccess() {} },
  decorators: [
    themeDecorator(ETheme.DARK),
    storeDecorator(initialStateWithError),
  ],
}

export const LoginFormWithLoadingLight: Story = {
  args: { onSuccess() {} },
  decorators: [storeDecorator(initialStateWithLoading)],
}

export const LoginFormWithLoadingDark: Story = {
  args: { onSuccess() {} },
  decorators: [
    themeDecorator(ETheme.DARK),
    storeDecorator(initialStateWithLoading),
  ],
}

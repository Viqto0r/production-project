import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { type IStateSchema } from '@/app/providers/StoreProvider'

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
  decorators: [StoreDecorator(initialState)],
}

export const LoginFormWithErrorLight: Story = {
  args: { onSuccess() {} },
  decorators: [StoreDecorator(initialStateWithError)],
}

export const LoginFormDark: Story = {
  args: { onSuccess() {} },
  decorators: [ThemeDecorator(ETheme.DARK), StoreDecorator(initialState)],
}

export const LoginFormWithErrorDark: Story = {
  args: { onSuccess() {} },
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator(initialStateWithError),
  ],
}

export const LoginFormWithLoadingLight: Story = {
  args: { onSuccess() {} },
  decorators: [StoreDecorator(initialStateWithLoading)],
}

export const LoginFormWithLoadingDark: Story = {
  args: { onSuccess() {} },
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator(initialStateWithLoading),
  ],
}

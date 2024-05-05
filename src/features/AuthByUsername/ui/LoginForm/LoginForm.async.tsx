import { type FC, lazy } from 'react'
import { type ILoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./LoginForm'))
      }, 2000)
    })
)

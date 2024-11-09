import { type FC, lazy } from 'react'
import { type IAddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./AddCommentForm'))
      }, 2000)
    })
)

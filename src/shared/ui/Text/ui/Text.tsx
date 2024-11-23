import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum ETextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum ETextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum ETextSize {
  M = 'size_m',
  L = 'size_l',
}

interface ITextProps {
  title?: string
  text?: string
  className?: string
  theme?: ETextTheme
  align?: ETextAlign
  size?: ETextSize
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    title,
    text,
    theme = ETextTheme.PRIMARY,
    className,
    align = ETextAlign.LEFT,
    size = ETextSize.M,
  } = props

  return (
    <div
      className={classNames('Text', {}, [
        cls[theme],
        className,
        cls[align],
        cls[size],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

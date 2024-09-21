import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum ETextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

interface ITextProps {
  title?: string
  text?: string
  className?: string
  theme?: ETextTheme
  align?: ETextAlign
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    title,
    text,
    theme = ETextTheme.PRIMARY,
    className,
    align = ETextAlign.LEFT,
  } = props
  return (
    <div
      className={classNames('Text', {}, [cls[theme], className, cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})

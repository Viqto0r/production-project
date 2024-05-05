import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface ITextProps {
  title?: string
  text?: string
  theme?: ETextTheme
  className?: string
}

export const Text: FC<ITextProps> = memo(
  ({ title, text, theme = ETextTheme.PRIMARY, className }) => {
    return (
      <div className={classNames('Text', { [cls[theme]]: true }, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    )
  }
)

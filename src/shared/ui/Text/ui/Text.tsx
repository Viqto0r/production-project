import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
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
  S = 'size_s',
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
  'data-testid'?: string
}

type THeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<ETextSize, THeaderTag> = {
  [ETextSize.S]: 'h3',
  [ETextSize.M]: 'h2',
  [ETextSize.L]: 'h1',
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    title,
    text,
    theme = ETextTheme.PRIMARY,
    className,
    align = ETextAlign.LEFT,
    size = ETextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div
      className={classNames('Text', {}, [
        cls[theme],
        className,
        cls[align],
        cls[size],
      ])}
    >
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  )
})

import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

type TTextVariant = 'primary' | 'accent' | 'error'
type TTextAlign = 'left' | 'right' | 'center'
type TTextSize = 's' | 'm' | 'l'

interface ITextProps {
  title?: string
  text?: string
  className?: string
  variant?: TTextVariant
  align?: TTextAlign
  size?: TTextSize
  bold?: boolean
  'data-testid'?: string
}

type THeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TTextSize, THeaderTag> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    title,
    text,
    variant = 'primary',
    className,
    align = 'left',
    size = 'm',
    bold,
    'data-testid': dataTestId = 'Text',
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div
      className={classNames('Text', { [cls.bold]: bold }, [
        cls[variant],
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

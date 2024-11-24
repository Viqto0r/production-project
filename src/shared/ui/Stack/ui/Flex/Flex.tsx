import {
  type ReactNode,
  type FC,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

type TFlexJustify = 'start' | 'center' | 'end' | 'between'
type TFlexAlign = 'start' | 'center' | 'end'
type TFlexDirection = 'row' | 'column'
type TFlexGap = '4' | '8' | '16' | '32'

type TDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export interface IFlexProps extends TDivProps {
  className?: string
  children: ReactNode
  justify?: TFlexJustify
  align?: TFlexAlign
  direction?: TFlexDirection
  gap?: TFlexGap
  max?: boolean
}

const justifyClasses: Record<TFlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
}

const alignClasses: Record<TFlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
}

const directionClasses: Record<TFlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
}

const gapClasses: Record<TFlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
}

export const Flex: FC<IFlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
  } = props

  const mods = {
    [cls.max]: max,
  }

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ]

  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>
}

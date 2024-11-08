import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IIconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon: FC<IIconProps> = memo((props) => {
  const { className, Svg } = props

  return <Svg className={classNames(cls.Icon, {}, [className])} />
})

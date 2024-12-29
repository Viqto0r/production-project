import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLogo.module.scss'
import AppSvg from '../../../assets/icons/app-image.svg'
import { HStack } from '../../deprecated/Stack/index'

interface IAppLogoProps {
  className?: string
  size?: number
}

export const AppLogo: FC<IAppLogoProps> = memo((props) => {
  const { className, size = 50 } = props

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.AppLogo, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg width={size} height={size} color="black" />
    </HStack>
  )
})

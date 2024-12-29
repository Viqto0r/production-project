import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLogo.module.scss'
import AppSvg from '../../../assets/icons/app-image.svg'
import { HStack } from '../Stack'

interface IAppLogoProps {
  className?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLogo: FC<IAppLogoProps> = memo((props) => {
  const { className } = props

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.AppLogo, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg />
    </HStack>
  )
})

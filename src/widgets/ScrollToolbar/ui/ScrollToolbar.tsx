import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ScrollToolbar.module.scss'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ScrollToTopButton } from '@/features/ScrollToTopButton'

interface IScrollToolbarProps {
  className?: string
}

export const ScrollToolbar: FC<IScrollToolbarProps> = memo((props) => {
  const { className } = props

  return (
    <VStack
      justify="center"
      align="center"
      className={classNames(cls.ScrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  )
})

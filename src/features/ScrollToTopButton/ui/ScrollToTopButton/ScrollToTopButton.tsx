import { memo, useCallback, type FC } from 'react'
import { Icon } from '@/shared/ui/redesigned/Icon'
import CircleIcon from '@/shared/assets/icons/circle-up.svg'

interface IScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton: FC<IScrollToTopButtonProps> = memo((props) => {
  const { className } = props

  const handleClick = useCallback(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Icon
      Svg={CircleIcon}
      onClick={handleClick}
      width={32}
      height={32}
      className={className}
      clickable
    />
  )
})

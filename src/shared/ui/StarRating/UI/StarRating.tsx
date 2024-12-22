import { memo, type FC } from 'react'
import { classNames } from '../../../lib/classNames/classNames'
import cls from './StarRating.module.scss'
import { Icon } from '../../Icon'
import StarIcon from '@/shared/assets/icons/star.svg'

interface IStarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStar?: number
}

const stars = [5, 4, 3, 2, 1]

export const StarRating: FC<IStarRatingProps> = memo((props) => {
  const { className, size = 30, selectedStar = 0, onSelect } = props

  const handleClick = (starsNumber: number) => () => {
    const isReset = selectedStar === starsNumber

    onSelect?.(isReset ? 0 : starsNumber)
  }

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          Svg={StarIcon}
          width={size}
          height={size}
          key={starNumber}
          className={classNames(
            cls.starIcon,
            { [cls.selected]: selectedStar >= starNumber },
            []
          )}
          onClick={handleClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={selectedStar >= starNumber}
        />
      ))}
    </div>
  )
})

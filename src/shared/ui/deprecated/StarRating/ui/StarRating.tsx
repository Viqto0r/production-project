import { memo, type FC } from 'react'
import { classNames } from '../../../../lib/classNames/classNames'
import cls from './StarRating.module.scss'
import { Icon as IconDeprecated } from '../../Icon'
import StarIcon from '@/shared/assets/icons/star.svg'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '../../../redesigned/Icon'

interface IStarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStar?: number
}

const stars = [5, 4, 3, 2, 1]
const HPaddings = 5

export const StarRating: FC<IStarRatingProps> = memo((props) => {
  const { className, size = 30, selectedStar = 0, onSelect } = props

  const handleClick = (starsNumber: number) => () => {
    const isReset = selectedStar === starsNumber

    onSelect?.(isReset ? 0 : starsNumber)
  }

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.StarRatingRedesigned,
    off: () => cls.StarRating,
  })

  return (
    <div className={classNames(mainClass, {}, [className])}>
      {stars.map((starNumber) => {
        const commonProps = {
          Svg: StarIcon,
          width: size + HPaddings,
          height: size,
          key: starNumber,
          className: classNames(
            cls.starIcon,
            { [cls.selected]: selectedStar >= starNumber },
            []
          ),
          onClick: handleClick(starNumber),
          'data-testid': `StarRating.${starNumber}`,
          'data-selected': selectedStar >= starNumber,
        }

        return (
          <ToggleFeatures
            key={starNumber}
            feature="isAppRedesigned"
            on={<Icon clickable {...commonProps} />}
            off={<IconDeprecated {...commonProps} />}
          />
        )
      })}
    </div>
  )
})

import { memo, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import ListIcon from '@/shared/assets/icons/burger.svg'
import TiledIcon from '@/shared/assets/icons/tile.svg'
import ListIconDeprecated from '@/shared/assets/icons/bi_list.svg'
import TiledIconDeprecated from '@/shared/assets/icons/fe_tiled.svg'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { EButtonTheme } from '@/shared/ui/deprecated/Button/ui/Button'
import { EArticleView } from '@/entities/Article'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface IArticleViewSelectorProps {
  className?: string
  view: EArticleView
  onViewClick?: (view: EArticleView) => void
}

const viewTypes = [
  {
    type: EArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    type: EArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
]

export const ArticleViewSelector: FC<IArticleViewSelectorProps> = memo(
  (props) => {
    const { className, view, onViewClick } = props

    const onClick = useCallback(
      (view: EArticleView) => () => {
        onViewClick?.(view)
      },
      [onViewClick]
    )

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
              className,
            ])}
            border="round"
          >
            <HStack gap="8">
              {viewTypes.map((viewType) => (
                <Icon
                  key={viewType.type}
                  Svg={viewType.icon}
                  className={classNames('', {
                    [cls.notSelected]: viewType.type !== view,
                  })}
                  clickable
                  onClick={onClick(viewType.type)}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
              <ButtonDeprecated
                key={viewType.type}
                theme={EButtonTheme.CLEAR}
                onClick={onClick(viewType.type)}
              >
                <IconDeprecated
                  Svg={viewType.icon}
                  width={24}
                  height={24}
                  className={classNames(
                    '',
                    { [cls.notSelected]: viewType.type !== view },
                    []
                  )}
                />
              </ButtonDeprecated>
            ))}
          </div>
        }
      />
    )
  }
)

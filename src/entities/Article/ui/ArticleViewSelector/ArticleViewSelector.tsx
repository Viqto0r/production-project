import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { EArticleView } from '../../model/consts/consts'
import ListIcon from 'shared/assets/icons/bi_list.svg'
import TIledIcon from 'shared/assets/icons/fe_tiled.svg'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon'
import { EButtonTheme } from 'shared/ui/Button/ui/Button'

interface IArticleViewSelectorProps {
  className?: string
  view: EArticleView
  onViewClick?: (view: EArticleView) => void
}

const viewTypes = [
  {
    type: EArticleView.SMALL,
    icon: TIledIcon,
  },
  {
    type: EArticleView.BIG,
    icon: ListIcon,
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
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.type}
            theme={EButtonTheme.CLEAR}
            onClick={onClick(viewType.type)}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames(
                '',
                { [cls.notSelected]: viewType.type !== view },
                []
              )}
            />
          </Button>
        ))}
      </div>
    )
  }
)

import { memo, useMemo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { Select } from 'shared/ui/Select'
import { useTranslation } from 'react-i18next'
import { type ISelectOption } from 'shared/ui/Select/ui/Select'
import { ESortOrderType } from 'shared/types'
import { EArticleSortField } from 'entities/Article/model/consts/consts'

interface IArticleSortSelectorProps {
  className?: string
  onChangeSort?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  sort?: EArticleSortField
  order?: ESortOrderType
}

export enum ESortFieldNames {
  SORT = 'sort',
  ORDER = 'order',
}

export const ArticleSortSelector: FC<IArticleSortSelectorProps> = memo(
  (props) => {
    const { className, onChangeSort, order, sort } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<ISelectOption[]>(
      () => [
        {
          content: t('возрастанию'),
          value: ESortOrderType.ASC,
        },
        {
          content: t('убыванию'),
          value: ESortOrderType.DESC,
        },
      ],
      [t]
    )

    const sortOptions = useMemo<ISelectOption[]>(
      () => [
        {
          content: t('дате создания'),
          value: EArticleSortField.CREATED,
        },
        {
          content: t('названию'),
          value: EArticleSortField.TITLE,
        },
        {
          content: t('просмотрам'),
          value: EArticleSortField.VIEWS,
        },
      ],
      [t]
    )

    return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
        <Select
          label={t('сортировать по')}
          options={sortOptions}
          onChange={onChangeSort}
          value={sort}
          name={ESortFieldNames.SORT}
        />
        <Select
          label={t('по')}
          options={orderOptions}
          onChange={onChangeSort}
          value={order}
          name={ESortFieldNames.ORDER}
        />
      </div>
    )
  }
)

import { memo, useMemo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { Select } from '@/shared/ui/deprecated/Select'
import { useTranslation } from 'react-i18next'
import { type ISelectOption } from '@/shared/ui/deprecated/Select/ui/Select'
import { ESortOrderType } from '@/shared/types/sort'
import { EArticleSortField } from '@/entities/Article'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface IArticleSortSelectorProps {
  className?: string
  onChangeSort: (value: string) => void
  onChangeOrder: (value: string) => void
  sort?: EArticleSortField
  order?: ESortOrderType
}

export enum ESortFieldNames {
  SORT = 'sort',
  ORDER = 'order',
}

export const ArticleSortSelector: FC<IArticleSortSelectorProps> = memo(
  (props) => {
    const { className, onChangeSort, onChangeOrder, order, sort } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<Array<ISelectOption<ESortOrderType>>>(
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

    const sortOptions = useMemo<Array<ISelectOption<EArticleSortField>>>(
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <VStack gap="8">
              <Text text={t('сортировать по')} />
              <ListBox<EArticleSortField>
                items={sortOptions}
                value={sort}
                onChange={onChangeSort}
              />
              <ListBox<ESortOrderType>
                items={orderOptions}
                value={order}
                onChange={onChangeOrder}
              />
            </VStack>
          </div>
        }
        off={
          <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<EArticleSortField>
              label={t('сортировать по')}
              options={sortOptions}
              onChange={onChangeSort}
              value={sort}
            />
            <Select<ESortOrderType>
              label={t('по')}
              options={orderOptions}
              onChange={onChangeOrder}
              value={order}
            />
          </div>
        }
      />
    )
  }
)

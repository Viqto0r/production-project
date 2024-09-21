import { type ChangeEvent, memo, type FC } from 'react'
import { Select } from 'shared/ui/Select'
import {
  type ISelectProps,
  type ISelectOption,
} from 'shared/ui/Select/ui/Select'
import { ECurrency } from '../model/types/currency'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface ICurrencySelectProps extends ISelectProps {
  className?: string
  value?: ECurrency
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const options: ISelectOption[] = [
  { content: ECurrency.RUB, value: ECurrency.RUB },
  { content: ECurrency.USD, value: ECurrency.USD },
  { content: ECurrency.EUR, value: ECurrency.EUR },
]

export const CurrencySelect: FC<ICurrencySelectProps> = memo((props) => {
  const { className, onChange, value, ...otherProps } = props

  const { t } = useTranslation('profile')

  return (
    <Select
      className={classNames('', {}, [className])}
      value={value}
      options={options}
      onChange={onChange}
      label={t('укажите валюту')}
      {...otherProps}
    />
  )
})

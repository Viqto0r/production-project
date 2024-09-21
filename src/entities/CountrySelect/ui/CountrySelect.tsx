import { type ChangeEvent, memo, type FC } from 'react'
import { Select } from 'shared/ui/Select'
import {
  type ISelectProps,
  type ISelectOption,
} from 'shared/ui/Select/ui/Select'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ECountry } from '../model/types/country'

interface ICurrencySelectProps extends ISelectProps {
  className?: string
  value?: ECountry
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const options: ISelectOption[] = [
  { content: ECountry.RUSSIA, value: ECountry.RUSSIA },
  { content: ECountry.USA, value: ECountry.USA },
  { content: ECountry.GERMANY, value: ECountry.GERMANY },
]

export const CountrySelect: FC<ICurrencySelectProps> = memo((props) => {
  const { className, onChange, value, ...otherProps } = props

  const { t } = useTranslation('profile')

  return (
    <Select
      className={classNames('', {}, [className])}
      value={value}
      options={options}
      onChange={onChange}
      label={t('укажите страну')}
      {...otherProps}
    />
  )
})

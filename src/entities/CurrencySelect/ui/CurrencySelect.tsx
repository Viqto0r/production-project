import { memo, type FC, useCallback } from 'react'
import { ECurrency } from '../model/types/currency'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ListBox, type IListBoxItem } from 'shared/ui/Popups'

interface ICurrencySelectProps {
  className?: string
  value?: ECurrency
  onChange?: (value: string, name: string | undefined) => void
  name?: string
  readOnly?: boolean
}

const options: IListBoxItem[] = [
  { content: ECurrency.RUB, value: ECurrency.RUB },
  { content: ECurrency.USD, value: ECurrency.USD },
  { content: ECurrency.EUR, value: ECurrency.EUR },
]

export const CurrencySelect: FC<ICurrencySelectProps> = memo((props) => {
  const { className, onChange, value, name, readOnly } = props

  const { t } = useTranslation('profile')

  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value, name)
    },
    [name, onChange]
  )

  return (
    <ListBox
      className={classNames('', {}, [className])}
      onChange={handleChange}
      value={value}
      items={options}
      defaultValue={t('укажите валюту')}
      label={t('укажите валюту')}
      readOnly={readOnly}
      direction="top-right"
    />
  )
})

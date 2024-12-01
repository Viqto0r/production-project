import { memo, type FC, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ECountry } from '../model/types/country'
import { ListBox, type IListBoxItem } from '@/shared/ui/Popups'

interface ICurrencySelectProps {
  className?: string
  value?: ECountry
  onChange?: (value: string, name: string | undefined) => void
  name?: string
  readOnly?: boolean
}

const options: IListBoxItem[] = [
  { content: ECountry.RUSSIA, value: ECountry.RUSSIA },
  { content: ECountry.USA, value: ECountry.USA },
  { content: ECountry.GERMANY, value: ECountry.GERMANY },
]

export const CountrySelect: FC<ICurrencySelectProps> = memo((props) => {
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
      defaultValue={t('укажите страну')}
      label={t('укажите страну')}
      items={options}
      readOnly={readOnly}
      direction="top-right"
    />
  )
})

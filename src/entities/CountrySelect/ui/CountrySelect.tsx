import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ECountry } from '../model/types/country'
import {
  ListBox as ListBoxDeprecated,
  type IListBoxItem,
} from '@/shared/ui/deprecated/Popups'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'

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

  const listBoxProps = {
    className,
    onChange: handleChange,
    value,
    defaultValue: t('страна'),
    label: t('страна'),
    items: options,
    readOnly,
    direction: 'top-right' as const,
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...listBoxProps} />}
      off={<ListBoxDeprecated {...listBoxProps} />}
    />
  )
})

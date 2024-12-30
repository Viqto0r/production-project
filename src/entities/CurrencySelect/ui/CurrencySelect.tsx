import { memo, type FC, useCallback } from 'react'
import { ECurrency } from '../model/types/currency'
import { useTranslation } from 'react-i18next'
import {
  ListBox as ListBoxDeprecated,
  type IListBoxItem,
} from '@/shared/ui/deprecated/Popups'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'

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

  const listBoxProps = {
    className,
    onChange: handleChange,
    value,
    items: options,
    defaultValue: t('валюта'),
    label: t('валюта'),
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

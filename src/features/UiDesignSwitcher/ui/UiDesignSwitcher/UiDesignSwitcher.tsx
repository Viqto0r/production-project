import { memo, useCallback, useMemo, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

interface IUiDesignSwitcherProps {
  className?: string
}

export const UiDesignSwitcher: FC<IUiDesignSwitcherProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)

  const [isLoading, setIsLoading] = useState(false)
  const isAppRedesigned = getFeatureFlag('isAppRedesigned')

  const items = useMemo(
    () => [
      {
        content: t('новый'),
        value: 'new',
      },
      {
        content: t('старый'),
        value: 'old',
      },
    ],
    [t]
  )

  const handleChange = useCallback(
    async (value: string) => {
      if (authData) {
        setIsLoading(true)

        dispatch(
          updateFeatureFlags({
            userId: authData.id,
            features: {
              isAppRedesigned: value === 'new',
            },
          })
        )
      }
    },
    [authData, dispatch]
  )

  return (
    <HStack>
      <Text text={t('вариант интерфейса')} />
      {isLoading ? (
        <Skeleton width={120} height={32} border={32} />
      ) : (
        <ListBox
          className={className}
          value={isAppRedesigned ? 'new' : 'old'}
          items={items}
          onChange={handleChange}
        />
      )}
    </HStack>
  )
})

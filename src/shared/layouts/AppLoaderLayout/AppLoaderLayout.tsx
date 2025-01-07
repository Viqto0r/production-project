import { memo, type FC } from 'react'
import { MainLayout } from '../MainLayout'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import cls from './AppLoaderLayout.module.scss'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

export const AppLoaderLayout: FC = memo(() => {
  return (
    <MainLayout
      header={
        <HStack className={cls.header}>
          <Skeleton width={40} height={40} border="50%" />
        </HStack>
      }
      content={
        <VStack gap="16" className={cls.content}>
          <Skeleton width="70%" height={32} border={14} />
          <Skeleton width="40%" height={20} border={14} />
          <Skeleton width="50%" height={20} border={14} />
          <Skeleton width="30%" height={32} border={14} />
          <Skeleton width="80%" height="40%" border={16} />
          <Skeleton width="80%" height="40%" border={16} />
        </VStack>
      }
      sidebar={<Skeleton border={32} width={220} height="100%" />}
    />
  )
})

import { memo, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/deprecated/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { getUserAuthData } from '@/entities/User'
import { getProfileData } from '@/features/EditableProfileCard'

interface IArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeaderProps> =
  memo((props) => {
    const { className } = props
    const { t } = useTranslation('article-details')
    const navigate = useNavigate()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles())
    }, [navigate])

    const onEdit = useCallback(() => {
      if (article?.id) {
        navigate(getRouteArticleEdit(article?.id))
      }
    }, [article?.id, navigate])

    return (
      <HStack justify="between" max className={classNames('', {}, [className])}>
        <Button onClick={onBackToList}>{t('назад к списку')}</Button>
        {canEdit && <Button onClick={onEdit}>{t('редактировать')}</Button>}
      </HStack>
    )
  })

import { memo, Suspense, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ETextSize } from '@/shared/ui/deprecated/Text/ui/Text'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'

interface IArticleDetailsCommentsProps {
  className?: string
  id?: string
}

export const ArticleDetailsComments: FC<IArticleDetailsCommentsProps> = memo(
  (props) => {
    const { className, id } = props
    const { t } = useTranslation('article-details')

    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id))
    })

    const handleSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text))
      },
      [dispatch]
    )

    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text size="l" title={t('комментарии')} />}
          off={<TextDeprecated size={ETextSize.L} title={t('комментарии')} />}
        />

        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={handleSendComment} />
        </Suspense>
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </VStack>
    )
  }
)

import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
import { ETextSize } from 'shared/ui/Text/ui/Text'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { AddCommentForm } from 'features/AddCommentForm'
import { CommentList } from 'entities/Comment'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { VStack } from 'shared/ui/Stack'

interface IArticleDetailsCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsComments: FC<IArticleDetailsCommentsProps> = memo(
  (props) => {
    const { className, id } = props
    const { t } = useTranslation()

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
        <Text size={ETextSize.L} title={t('комментарии')} />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </VStack>
    )
  }
)

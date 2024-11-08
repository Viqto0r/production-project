import { memo, type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text'
import { CommentList } from 'entities/Comment'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface IArticleDetailsPageProps {
  className?: string
}

const asyncReducers: TReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const { id: articleId } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  useInitialEffect(() => {
    console.log(1)
    dispatch(fetchCommentsByArticleId(articleId))
  })

  if (!articleId) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('статья не найдена')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={asyncReducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={articleId} />
        <Text className={cls.commentTitle} title={t('комментарии')} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  )
})

export default ArticleDetailsPage

import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'

interface IArticleEditPageProps {
  className?: string
}

const ArticleEditPage: FC<IArticleEditPageProps> = memo((props) => {
  const { className } = props

  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? `Редактирование статьи с ID ${id}` : 'Создание новой статьи'}
    </Page>
  )
})

export default ArticleEditPage

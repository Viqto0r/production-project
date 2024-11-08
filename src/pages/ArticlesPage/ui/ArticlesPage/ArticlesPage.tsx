import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'

interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = memo((props) => {
  const { className } = props

  return <div className={classNames(cls.ArticlesPage, {}, [className])}></div>
})

export default ArticlesPage

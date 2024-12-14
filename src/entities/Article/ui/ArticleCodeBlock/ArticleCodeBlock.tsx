import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleCodeBlock.module.scss'
import { type IArticleCodeBlock } from '../../model/types/article'
import { Code } from '@/shared/ui/Code'

interface IArticleCodeBlockProps {
  className?: string
  block: IArticleCodeBlock
}

export const ArticleCodeBlock: FC<IArticleCodeBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
})

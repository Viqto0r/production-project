import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleTextBlock.module.scss'
import { type IArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/deprecated/Text'

interface IArticleTextBlockProps {
  className?: string
  block: IArticleTextBlock
}

export const ArticleTextBlock: FC<IArticleTextBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  )
})

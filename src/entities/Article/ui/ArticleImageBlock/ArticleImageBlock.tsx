import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlock.module.scss'
import { type IArticleImageBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text'
import { ETextAlign } from 'shared/ui/Text/ui/Text'

interface IArticleImageBlockProps {
  className?: string
  block: IArticleImageBlock
}

export const ArticleImageBlock: FC<IArticleImageBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
      <img className={cls.img} src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={ETextAlign.CENTER} />}
    </div>
  )
})

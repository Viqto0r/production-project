import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleImageBlock.module.scss'
import { type IArticleImageBlock } from '../../model/types/article'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ETextAlign } from '@/shared/ui/deprecated/Text/ui/Text'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface IArticleImageBlockProps {
  className?: string
  block: IArticleImageBlock
}

export const ArticleImageBlock: FC<IArticleImageBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
      <img className={cls.img} src={block.src} alt={block.title} />
      {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={block.title} align="center" />}
          off={<TextDeprecated text={block.title} align={ETextAlign.CENTER} />}
        />
      )}
    </div>
  )
})

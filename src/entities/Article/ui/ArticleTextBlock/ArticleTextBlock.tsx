import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleTextBlock.module.scss'
import { type IArticleTextBlock } from '../../model/types/article'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface IArticleTextBlockProps {
  className?: string
  block: IArticleTextBlock
}

export const ArticleTextBlock: FC<IArticleTextBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={block.title} className={cls.title} />}
          off={<TextDeprecated title={block.title} className={cls.title} />}
        />
      )}

      {block.paragraphs.map((paragraph) => (
        <ToggleFeatures
          key={paragraph}
          feature="isAppRedesigned"
          on={<Text text={paragraph} className={cls.paragraph} />}
          off={
            <TextDeprecated
              key={paragraph}
              text={paragraph}
              className={cls.paragraph}
            />
          }
        />
      ))}
    </div>
  )
})

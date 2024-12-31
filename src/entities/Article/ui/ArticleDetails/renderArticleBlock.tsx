import { EArticleBlockType } from '../../model/consts/consts'
import { TArticleBlock } from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import cls from './ArticleDetails.module.scss'

export const renderArticleBlock = (block: TArticleBlock) => {
  switch (block.type) {
    case EArticleBlockType.CODE:
      return (
        <ArticleCodeBlock key={block.id} className={cls.block} block={block} />
      )
    case EArticleBlockType.IMAGE:
      return (
        <ArticleImageBlock key={block.id} className={cls.block} block={block} />
      )
    case EArticleBlockType.TEXT:
      return (
        <ArticleTextBlock key={block.id} className={cls.block} block={block} />
      )

    default:
      return null
  }
}

import { memo, type FC } from 'react'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { Card } from '@/shared/ui/redesigned/Card'

interface IDetailsContainerProps {
  className?: string
}

export const DetailsContainer: FC<IDetailsContainerProps> = memo((props) => {
  const { className } = props

  const { id: articleId } = useParams<{ id: string }>()

  return (
    <Card
      className={className}
      padding="24"
      border="medium-round"
      fullWidth
      fullHeight
    >
      <ArticleDetails id={articleId} />
    </Card>
  )
})

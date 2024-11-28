import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthData } from 'entities/User'

export const canEditArticleSelector = (state: IStateSchema) => {
  const article = getArticleDetailsData(state)
  const user = getUserAuthData(state)
  if (!article || !user) {
    return false
  }

  return article.user.id === user.id
}

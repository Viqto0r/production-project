import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import { type IComment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleDetailsData } from 'entities/Article'

export const addCommentForArticle = createAsyncThunk<
  IComment,
  // eslint-disable-next-line
  string,
  IThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { dispatch, rejectWithValue, extra, getState }) => {
    try {
      const userData = getUserAuthData(getState())
      const article = getArticleDetailsData(getState())

      if (!userData || !text || !article) {
        return rejectWithValue('no data')
      }

      const response = await extra.api.post<IComment>('/comments', {
        articleId: article?.id,
        userId: userData.id,
        text,
      })

      if (!response.data) {
        throw new Error('error')
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)

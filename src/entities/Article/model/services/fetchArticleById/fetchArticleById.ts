import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type IArticle } from '../../types/article'
import { EValidateProfileErrors } from 'entities/Profile/model/types/profile'

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string,
  IThunkConfig<string>
>(
  'profile/fetchArticleById',
  async (articleId: string, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<IArticle>(`/articles/${articleId}`)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue(EValidateProfileErrors.SERVER_ERROR)
    }
  }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '@/app/providers/StoreProvider'
import { type IComment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  string | undefined,
  IThunkConfig<string>
>('profile/fetchProfileData', async (articleId, { rejectWithValue, extra }) => {
  try {
    if (!articleId) {
      return rejectWithValue('error')
    }

    const response = await extra.api.get<IComment[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})

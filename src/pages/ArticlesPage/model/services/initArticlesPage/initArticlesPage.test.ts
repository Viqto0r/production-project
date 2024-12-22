import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { initArticlesPage } from './initArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchProfileData', () => {
  const searchParams = new URLSearchParams()

  test('no inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _isInit: false,
      },
    })

    await thunk.callThunk(searchParams)

    expect(thunk.dispatch).toBeCalledTimes(4)
  })

  test('inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _isInit: true,
      },
    })

    await thunk.callThunk(searchParams)

    expect(thunk.dispatch).toBeCalledTimes(2)
  })
})

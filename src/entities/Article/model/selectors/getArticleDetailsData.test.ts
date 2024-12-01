import { type IStateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './getArticleDetailsData'

const article = {
  id: '1',
  title: 'title',
}

describe('getProfileData', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        data: article,
      },
    }
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(article)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsData(state as IStateSchema)).toBe(undefined)
  })

  test('should be is loading', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }

    expect(getArticleDetailsIsLoading(state as IStateSchema)).toBe(true)
  })

  test('should be error', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        error: 'error',
      },
    }

    expect(getArticleDetailsError(state as IStateSchema)).toBe('error')
  })
})

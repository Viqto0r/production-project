import { ECountry } from '@/entities/CountrySelect'
import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ECurrency } from '@/entities/CurrencySelect'

describe('fetchProfileData', () => {
  const responseValue = {
    firstName: 'Viqtor',
    lastName: 'Viq',
    age: 34,
    currency: ECurrency.RUB,
    country: ECountry.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
  }

  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: responseValue }))

    const response = await thunk.callThunk('1')

    expect(response.payload).toEqual(responseValue)
    // eslint-disable-next-line
    expect(thunk.api.get).toHaveBeenCalled()
    expect(response.meta.requestStatus).toBe('fulfilled')
    expect(response.payload).toEqual(responseValue)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const response = await thunk.callThunk('1')
    expect(response.meta.requestStatus).toBe('rejected')
    // eslint-disable-next-line
    expect(thunk.api.get).toHaveBeenCalled()
  })
})

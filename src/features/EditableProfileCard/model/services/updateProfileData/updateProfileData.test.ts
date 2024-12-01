import { ECountry } from '@/entities/CountrySelect'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ECurrency } from '@/entities/CurrencySelect'
import { updateProfileData } from './updateProfileData'
import { EValidateProfileErrors } from '../../consts/consts'

describe('fetchProfileData', () => {
  const initialValue = {
    id: '1',
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
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: initialValue },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: initialValue }))

    const response = await thunk.callThunk()

    expect(response.payload).toEqual(initialValue)
    // eslint-disable-next-line
    expect(thunk.api.put).toHaveBeenCalled()
    expect(response.meta.requestStatus).toBe('fulfilled')
    expect(response.payload).toEqual(initialValue)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: initialValue },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const response = await thunk.callThunk()
    expect(response.meta.requestStatus).toBe('rejected')
    // eslint-disable-next-line
    expect(thunk.api.put).toHaveBeenCalled()
    expect(response.payload).toEqual([EValidateProfileErrors.SERVER_ERROR])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...initialValue, lastName: '' } },
    })

    const response = await thunk.callThunk()
    expect(response.meta.requestStatus).toBe('rejected')
    // eslint-disable-next-line
    expect(response.payload).toEqual([
      EValidateProfileErrors.INCORRECT_USER_DATA,
    ])
  })
})

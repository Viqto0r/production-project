import { getFormData } from './getFormData'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import { ECountry } from '@/entities/CountrySelect'
import { ECurrency } from '@/entities/CurrencySelect'

const profile = {
  form: {
    age: 22,
    avatar: 'avatar',
    city: 'city',
    country: ECountry.RUSSIA,
    currency: ECurrency.EUR,
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
  },
}

describe('getFormData', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile,
    }
    expect(getFormData(state as IStateSchema)).toEqual(profile.form)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getFormData(state as IStateSchema)).toBe(undefined)
  })
})

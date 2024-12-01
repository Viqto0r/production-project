import { getProfileData } from './getProfileData'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import { ECountry } from '@/entities/CountrySelect'
import { ECurrency } from '@/entities/CurrencySelect'

const profile = {
  data: {
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

describe('getProfileData', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile,
    }
    expect(getProfileData(state as IStateSchema)).toEqual(profile.data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileData(state as IStateSchema)).toBe(undefined)
  })
})

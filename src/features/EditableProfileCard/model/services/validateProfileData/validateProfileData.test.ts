import { ECountry } from '@/entities/CountrySelect'
import { validateProfileData } from './validateProfileData'
import { ECurrency } from '@/entities/CurrencySelect'
import { EValidateProfileErrors } from '../../consts/consts'

describe('validateProfileData', () => {
  const profile = {
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

  test('without errors', async () => {
    const validateErrors = validateProfileData(profile)
    expect(validateErrors).toEqual([])
  })

  test('invalid user data', async () => {
    const validateErrors = validateProfileData({
      ...profile,
      username: '',
      firstName: '',
    })
    expect(validateErrors).toEqual([EValidateProfileErrors.INCORRECT_USER_DATA])
  })

  test('invalid age', async () => {
    const validateErrors = validateProfileData({
      ...profile,
      age: undefined,
    })
    expect(validateErrors).toEqual([EValidateProfileErrors.INCORRECT_AGE])
  })

  test('invalid age', async () => {
    const validateErrors = validateProfileData({
      ...profile,
      country: undefined,
    })
    expect(validateErrors).toEqual([EValidateProfileErrors.INCORRECT_COUNTRY])
  })

  test('invalid age', async () => {
    const validateErrors = validateProfileData({
      ...profile,
      country: undefined,
    })
    expect(validateErrors).toEqual([EValidateProfileErrors.INCORRECT_COUNTRY])
  })

  test('incorrect all', async () => {
    const validateErrors = validateProfileData({})
    expect(validateErrors).toEqual([
      EValidateProfileErrors.INCORRECT_USER_DATA,
      EValidateProfileErrors.INCORRECT_AGE,
      EValidateProfileErrors.INCORRECT_COUNTRY,
    ])
  })
})

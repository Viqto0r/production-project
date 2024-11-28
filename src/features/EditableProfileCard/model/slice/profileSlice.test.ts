import { ECurrency } from 'entities/CurrencySelect'
import { profileActions, profileReducer } from './profileSlice'
import { ECountry } from 'entities/CountrySelect'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import {
  EValidateProfileErrors,
  type IProfileSchema,
} from '../types/editableProfileCardSchema'

const data = {
  age: 22,
  avatar: 'avatar',
  city: 'city',
  country: ECountry.RUSSIA,
  currency: ECurrency.EUR,
  firstName: 'firstName',
  lastName: 'lastName',
  username: 'username',
}

describe('profileSlice', () => {
  test('set readonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false }

    expect(
      profileReducer(state as IProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true })
  })

  test('reset profile', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false }

    expect(
      profileReducer(state as IProfileSchema, profileActions.resetProfile())
    ).toEqual({ readonly: true, validateErrors: undefined })
  })

  test('update profile', () => {
    const state: DeepPartial<IProfileSchema> = {
      data,
      form: { username: '' },
    }

    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfileData({ username: 'TestName' })
      )
    ).toEqual({ data, form: { username: 'TestName' } })
  })

  test('update profile service pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [EValidateProfileErrors.SERVER_ERROR],
    }

    expect(
      profileReducer(state as IProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, readonly: true, validateErrors: undefined })
  })

  test('update profile service pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [EValidateProfileErrors.SERVER_ERROR],
    }

    expect(
      profileReducer(state as IProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, readonly: true, validateErrors: undefined })
  })

  test('update profile service fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = { isLoading: true }

    expect(
      profileReducer(
        state as IProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    })
  })
})

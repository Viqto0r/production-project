import { EValidateProfileErrors } from '../../consts/consts'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { type IStateSchema } from 'app/providers/StoreProvider'

const validateErrors = [
  EValidateProfileErrors.INCORRECT_USER_DATA,
  EValidateProfileErrors.INCORRECT_AGE,
]

describe('getProfileValidateErrors', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { validateErrors },
    }
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(
      validateErrors
    )
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileValidateErrors(state as IStateSchema)).toBe(undefined)
  })
})

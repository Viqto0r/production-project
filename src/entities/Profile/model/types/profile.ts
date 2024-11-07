import { type ECurrency } from 'entities/CurrencySelect'
import { type ECountry } from 'entities/CountrySelect'

export interface IProfile {
  firstName?: string
  lastName?: string
  age?: number
  currency?: ECurrency
  country?: ECountry
  city?: string
  username?: string
  avatar?: string
}

export interface IProfileSchema {
  data?: IProfile
  form?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: EValidateProfileErrors[]
}

export enum EValidateProfileErrors {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

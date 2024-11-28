import { type ECurrency } from 'entities/CurrencySelect'
import { type ECountry } from 'entities/CountrySelect'

export interface IProfile {
  id?: string
  firstName?: string
  lastName?: string
  age?: number
  currency?: ECurrency
  country?: ECountry
  city?: string
  username?: string
  avatar?: string
}

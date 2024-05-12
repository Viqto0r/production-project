import { type ICountry, type ICurrency } from 'shared/const/common'

export interface IProfile {
  first: string
  lastname: string
  age: number
  currency: ICurrency
  country: ICountry
  city: string
  username: string
  avatar: string
}

export interface IProfileSchema {
  data?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}

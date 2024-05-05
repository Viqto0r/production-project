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

export enum ICurrency {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR',
}

export enum ICountry {
  RUSSIA = 'Russia',
  USA = 'USA',
  Germany = 'Germany',
}

export interface IProfileSchema {
  data?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}

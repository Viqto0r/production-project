import { selectByTestId } from '../../helpers/selectByTestId'
import { IUser } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

export const login = (username = 'test-user', password = '123') => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))

      return body
    })
}

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId))

/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<IUser>
      getByTestId(testId: string): ReturnType<typeof cy.get>
    }
  }
}

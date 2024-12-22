import { selectByTestId } from '../../helpers/selectByTestId'
import { IUser } from '../../../src/entities/User/model/consts/consts'

export const updateProfile = (firstName: string, lastName: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstName').clear().type(firstName)
  cy.getByTestId('ProfileCard.lastName').clear().type(lastName)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'dwqdqw' },
    body: {
      id: '4',
      firstName: 'test-user',
      lastName: 'user',
      age: '25',
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'test-user',
      avatar:
        'https://media.istockphoto.com/id/1152537185/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%85%D0%B0%D0%BA%D0%B5%D1%80-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-%D0%BD%D0%B0-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B5-%D0%B2-%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=uZq9lmm4FGgOi7lIEzYbNPMLG7SdvUu4_me8BeqMG5Y=',
    },
  })
}

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId))

/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string, lastName: string): Chainable<IUser>
      resetProfile(profileId: string): ReturnType<typeof cy.request>
    }
  }
}

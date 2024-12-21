export const setRate = (startCount: number, feedback: string = '') => {
  cy.getByTestId(`StarRating.${startCount}`).click()
  cy.getByTestId('RatingCard.Input').type(feedback)
  cy.getByTestId('RatingCard.Send').click()
}

/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      setRate(startCount: number, feedback?: string): Chainable<void>
    }
  }
}

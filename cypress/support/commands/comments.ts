export const addComment = (text: string) => {
  cy.getByTestId('AddCommentForm.Input').type(text)
  cy.getByTestId('AddCommentForm.Button').click()
}

/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>
    }
  }
}

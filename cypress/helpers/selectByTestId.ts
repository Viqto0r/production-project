export const selectByTestId = (testId: string) =>
  cy.get(`[data-testid=${testId}]`)

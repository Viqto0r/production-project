import { login } from './commands/login'

/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
Cypress.Commands.add('login', login)

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
    }
  }
}

export {}

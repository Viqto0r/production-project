import * as commonCommands from './commands/common'
import * as profileCommands from './commands/profile'
import * as articleCommon from './commands/article'
import * as commentsCommon from './commands/comments'
import * as ratingCommon from './commands/rating'

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommon)
Cypress.Commands.addAll(commentsCommon)
Cypress.Commands.addAll(ratingCommon)

export {}

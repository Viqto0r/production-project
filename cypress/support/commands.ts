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
// Cypress.Commands.overwrite('mount', () => {}) Можно переопределить Mount, чтобы не писать каждый раз обёртку
// Автоматизированное создание фикстур
//  Cypress.Commands.overwrite('intercept', (req) => {
//    const FIXTURE_MODE = process.env.FIXTURE_MODE
//    const fixtureName = req.METHOD + req.url + hash(req.body)

//    if (FIXTURE_MODE === 'READ') {
//      readFixture(fixtureName)
//    }

//    if (FIXTURE_MODE === 'WRITE') {
//      createFixture(fixtureName)
//    }

//    if (FIXTURE_MODE === 'API') {
//    }
//  })

export {}

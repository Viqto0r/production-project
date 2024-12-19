import { selectByTestId } from 'cypress/helpers/selectByTestId'

describe('empty spec', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/')
      selectByTestId('MainPage').should('exist')
    })

    it('Переход в профиль', () => {
      cy.visit('/profile/1')
      selectByTestId('MainPage').should('exist')
    })

    it('Переход на несуществующий маршрут', () => {
      cy.visit('/dwqqwd')
      selectByTestId('NotFoundPage').should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('test-user', '123')
    })

    it('Переход в профиль', () => {
      cy.visit('/profile/1')
      selectByTestId('ProfilePage').should('exist')
    })

    it('Переход в профиль', () => {
      cy.visit('/articles')
      selectByTestId('ArticlesPage').should('exist')
    })
  })
})

describe('empty spec', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/')
      cy.getByTestId('MainPage').should('exist')
    })

    it('Переход в профиль', () => {
      cy.visit('/profile/1')
      cy.getByTestId('MainPage').should('exist')
    })

    it('Переход на несуществующий маршрут', () => {
      cy.visit('/dwqqwd')
      cy.getByTestId('NotFoundPage').should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('test-user', '123')
    })

    it('Переход в профиль', () => {
      cy.visit('/profile/1')
      cy.getByTestId('ProfilePage').should('exist')
    })

    it('Переход в профиль', () => {
      cy.visit('/articles')
      cy.getByTestId('ArticlesPage').should('exist')
    })
  })
})

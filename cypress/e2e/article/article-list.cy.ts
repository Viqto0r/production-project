describe('Пользователь заходит на страницу', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
  })
  it('и статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('находит статью по Python', () => {
    cy.getByTestId('ArticlesPageFilters.ArticlesSearch').type('Python')
    cy.getByTestId('ArticleList')
      .getByTestId('ArticleListItem')
      .should('contain.text', 'Python')
  })

  it('переключает фильтр на Экономику', () => {
    const economics = 'Экономика'

    cy.getByTestId(`ArticleTypeTab.${economics}`).click()
    cy.getByTestId('ArticleList')
      .getByTestId('ArticleListItem')
      .should('contain.text', 'ECONOMICS')
  })
})

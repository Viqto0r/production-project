let currentArticleId = ''

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id
      cy.visit(`articles/${currentArticleId}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })

  it('И видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetailsPage.Info').should('exist')
  })

  it('И видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })

  it('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetailsPage.Info').should('exist')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('TEST-COMMENT')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })

  it('И ставит оценку', () => {
    cy.getByTestId('ArticleDetailsPage.Info').should('exist')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })

  it('И ставит оценку (пример со стабом на фикстурах)', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'article-details.json',
    })
    cy.getByTestId('ArticleDetailsPage.Info').should('exist')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})

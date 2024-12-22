let profileId = ''

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`profile/${profileId}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('и профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'test-user')
  })

  it('и редактирует его', () => {
    const newFirstName = 'testFirstName'
    const newLastName = 'testLastName'

    cy.updateProfile(newFirstName, newLastName)
    cy.getByTestId('ProfileCard.firstName').should('have.value', newFirstName)
    cy.getByTestId('ProfileCard.lastName').should('have.value', newLastName)
  })
})

describe('add product to cart widget', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('should be able search any product show', () => {
    cy.get('input[name="q"]').type('kush').parent('form').submit()
    cy.url().should('include', '/search')
    cy.contains('Results for: kush').should('exist')

    cy.get('a[href^="/product"]').first().should('exist')
  })
  it('should not be able fetched product and navigate to home page', () => {
    cy.on('uncaught:exception', () => {
        return false
    })

    cy.visit('/search')
    
    cy.location('pathname').should('equal', '/')
  })
})
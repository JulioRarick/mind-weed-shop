describe('add product to cart widget', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()
    
    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()
    
    cy.url().should('include', '/product')

    cy.contains('Add to cart').click()
    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able search any product and add to the cart', () => {
    cy.get('input[name="q"]').type('kush').parent('form').submit()
    cy.url().should('include', '/search?q=kush')

    cy.get('a[href^="/product"]').first().click()

    cy.contains('Add to cart').click()

    cy.contains('Cart (1)').should('exist')
  })
})
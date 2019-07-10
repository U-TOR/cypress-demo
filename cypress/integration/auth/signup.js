/// <reference types="Cypress" />

context('Sign up', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Can signup a user', () => {
    cy.contains("Sign up").click();

    cy.get(":nth-child(1) > .form-control").type("Viktor Maksymenko");
    cy.get(":nth-child(2) > .form-control").type("vikmaksimenko@test.com");
    cy.get(":nth-child(3) > .form-control").type("1q1q1q1q");

    cy.get(".btn").contains("Sign up").click();

  })
})

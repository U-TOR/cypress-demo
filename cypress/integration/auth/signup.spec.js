/// <reference types="Cypress" />

context('Sign up tests', () => {
  before(() => {
    cy.task("deleteUser", "new-user@test.com");
    cy.visit('/')
  });

  it('User can sign up', () => {
    cy.get("a[href='/register']").click();
    cy.url().should("include", "/register");

    cy.get(':nth-child(1) > .form-control').type("NewUser");
    cy.get(':nth-child(2) > .form-control').type("new-user@test.com");
    cy.get(':nth-child(3) > .form-control').type("1q1q1q");

    cy.get(".btn").contains("Sign up").click();

    cy.get(".user-pic").should("be.visible");
  });

});

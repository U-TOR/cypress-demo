/// <reference types="Cypress" />

describe('Check posts CRUD functionality', () => {
  before(function() {
    cy.fixture("posts/default-post.json").as("post");
    cy.login("testuser@test.com", "1q1q1q");

  });

  it('User can create a post', function() {
    cy.get("a[href='/editor']").click();
    cy.get(".btn").contains("Publish Article").should("be.visible");

    cy.get(':nth-child(1) > .form-control').type(this.post.title);
    cy.get(':nth-child(2) > .form-control').type(this.post.description);
    cy.get(':nth-child(3) > .form-control').type(this.post.content);

    cy.wrap(this.post.tags).each((tag) => {
      cy.get(':nth-child(4) > .form-control').type(tag).type("{enter}");
    });

    cy.get(".btn").contains("Publish Article").click();

    cy.url().should("include", "test-title");
    cy.get(".banner h1").should("have.text", "Test Title");
  });

});

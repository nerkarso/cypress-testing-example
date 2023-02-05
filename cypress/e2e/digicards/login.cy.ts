/// <reference types="cypress" />

export interface DigicardsData {
  baseUrl: string;
  users: {
    email: string;
    password: string;
  }[];
}

describe('Auth', () => {
  it('user can log in', () => {
    cy.viewport(1280, 720);

    cy.fixture('digicards.json').then((data: DigicardsData) => {
      cy.visit(data.baseUrl);

      cy.get('a[href="/signin.html"]').click();

      cy.get('#email').type(data.users[0].email);
      cy.get('#password').type(data.users[0].password);
      cy.get('button[type="submit"]').click();

      cy.get('#currentAccount').should('be.visible');
    });
  });
});

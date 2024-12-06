describe("saucedemo-login-checkout", () => {
it("add to chart", () => {
    cy.visit("https://www.saucedemo.com", { timeout: 60000 });
    cy.get("input[name='user-name']").should("be.visible").type("standard_user");
    cy.get("input[name='password']").should("be.visible").type("secret_sauce");
    cy.get("input[type='submit']").should("be.visible").click();
    cy.get("button[id='add-to-cart-sauce-labs-backpack']").should("be.visible").click();
    cy.get('a.shopping_cart_link').click();
    cy.get("button[id='checkout']").should("be.visible").click();
    cy.get('#first-name').type("Andi");
    cy.get('#last-name').type("Krebo");
    cy.get('#postal-code').type("55241");
    cy.get("input[type='submit']").should("be.visible").click();
    cy.get("button[id='finish']").should("be.visible").click();
  });
});

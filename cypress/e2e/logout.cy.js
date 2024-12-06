describe("saucedemo-logout", () => {
    it("add to chart", () => {
        cy.visit("https://www.saucedemo.com", { timeout: 60000 });
        cy.get("input[name='user-name']").should("be.visible").type("standard_user");
        cy.get("input[name='password']").should("be.visible").type("secret_sauce");
        cy.get("input[type='submit']").should("be.visible").click();
            // Buka menu sidebar
            cy.get("#react-burger-menu-btn").should("be.visible").click();
        
            // Tunggu hingga elemen Logout terlihat di menu
            cy.get("#logout_sidebar_link").should("be.visible");
        
            // Klik tombol Logout
            cy.get("#logout_sidebar_link").click();
        
            // Verifikasi pengguna kembali ke halaman login
            cy.url().should("include", "saucedemo.com");
            cy.get("input[name='user-name']").should("be.visible");

      });
    
    });
class ProdutoPage {
  adicionarProdutoAoCarrinho(nomeProduto) {
      cy.contains(nomeProduto).parent().find('button').should('be.visible').click();
    }
  
    abrirCarrinho() {
      cy.get('.shopping_cart_link').click();
    }
  
    assertProdutoNoCarrinho(nomeProduto) {
      cy.contains(nomeProduto).should('be.visible');
    }
  }
  
  export default ProdutoPage;
  
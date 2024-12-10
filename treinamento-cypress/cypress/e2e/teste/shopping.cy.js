import ProdutoPage from '../../support/pageObjects/produtoPage';
import LoginPage from '../../support/pageObjects/loginPage';
import dadosUsuario from '../../fixtures/dadosUsuario.json';

describe('Carrinho de Compras', () => {
  const loginPage = new LoginPage();
  const produtoPage = new ProdutoPage();

  before(() => {
    loginPage.visit();
    loginPage.login(dadosUsuario.validUser.username, dadosUsuario.validUser.password);
    loginPage.assertLoginSuccess();
  });

  it('Deve adicionar produto ao carrinho', () => {
    produtoPage.adicionarProdutoAoCarrinho('Sauce Labs Onesie');
    produtoPage.abrirCarrinho();
    produtoPage.assertProdutoNoCarrinho('Sauce Labs Onesie');
  });

  it('Deve não adicionar produto ao carrinho sem login', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('.shopping_cart_link').should('not.exist');
  });
});

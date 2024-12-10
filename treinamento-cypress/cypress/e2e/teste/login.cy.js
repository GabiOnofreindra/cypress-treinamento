import LoginPage from '../../support/pageObjects/loginPage';
import { faker } from '@faker-js/faker';
import dadosUsuario from '../../fixtures/dadosUsuario.json';

describe('Login Testes', () => {
  const loginPage = new LoginPage();

  it('Deve logar com sucesso', () => {
    loginPage.visit();
    loginPage.login(dadosUsuario.validUser.username, dadosUsuario.validUser.password);
    loginPage.assertLoginSuccess();
  });

  it('Deve mostrar erro ao tentar logar com dados inválidas', () => {
    loginPage.visit();
    loginPage.login(dadosUsuario.invalidUser.username, dadosUsuario.invalidUser.password);
    loginPage.assertLoginError();
  });

  it('Deve logar com usuário gerado pelo faker', () => {
    const fakeUser = faker.internet.userName();
    const fakePassword = faker.internet.password();

    loginPage.visit();
    loginPage.login(fakeUser, fakePassword);
    loginPage.assertLoginError();
  });
});

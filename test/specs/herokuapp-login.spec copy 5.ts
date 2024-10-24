
import loginPage    from '../pageobjects/herokuapp-login.page.ts';
import landingPage  from '../pageobjects/herokuapp-landing.page.ts';
import assert       from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Test for herokuapp login page6',  () =>  {
  it('should allow user to login 6', async () =>  {
    await loginPage.open();     // navigating to login page
    await loginPage.login('tomsmith', 'SuperSecretPassword!');    // entering user name, password and and submiting the page
  });

  it('should fail to validate the message after login 6', async () =>  {
    assert.equal(await landingPage.getMessage(), "FAIL Welcome to the Secure Area. When you are done click logout below.");
    //console.log(await landingPage.getMessage());

  });
});

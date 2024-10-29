
import loginPage    from '../pageobjects/herokuapp-login.page.ts';
import landingPage  from '../pageobjects/herokuapp-landing.page.ts';
import assert       from 'assert';
import { endStep, startStep ,addStep} from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Test for herokuapp login page33',  () =>  {
  it('should allow user to login ', async () =>  {
    assert.fail.status=
    await loginPage.open();     // navigating to login page
    await loginPage.login('tomsmith', 'SuperSecretPassword!');    // entering user name, password and and submiting the page
    endStep(Status.BROKEN);
  });


it("Test Authentication", async () => {
  startStep("Step 1");
  try {
    // ...
    //endStep(Status.FAILED);
    assert.equal("differnt text", "FAIL Welcome to the Secure Area. When you are done click logout below.");
  } catch {
    assert.equal("differnt text2", "FAIL Welcome to the Secure Area. When you are done click logout below.");
  }
    endStep(Status.BROKEN);
  });

  it('should fail to validate the message after login ', async () =>  {
    //window.open("file:///D:/Hello.txt");
    //assert.equal(await landingPage.getMessage(), "FAIL Welcome to the Secure Area. When you are done click logout below.");
    assert.equal("diffentnt", "FAIL Welcome to the Secure Area. When you are done click logout below.");
    assert.equal("diffentnt333", "FAIL Welcome to the Secure Area. When you are done click logout below.");
    //console.log(await landingPage.getMessage());
    //endStep(Status.BROKEN);
  });

  it("Test Authentication 2", async () => {
    addStep("Successful step",undefined, Status.FAILED);
  
    addStep("Skipped step", undefined, Status.FAILED);
  
    addStep(
      "Skipped step with attachment",
      { content: "This is attachment.", name: "file.txt", type: "text/plain" },
      Status.FAILED,
    );
    //endStep(Status.BROKEN);
  });
});

const chai = require("chai");
const { Given, When, Then } = require("cucumber");

const Locator = require("./getLocators");

Given(/^I open the application "(.*)" url$/, (url) => {
  browser.url(url).pause(3000);
});

Then(/^I should see "(.*)" element is present$/, (selector) => {
  selector = Locator.getLocator(selector);
  const elementPresent = browser.isExisting(selector);
  chai.expect(elementPresent).to.equal(true);
});

When(/^I click on "(.*)" element$/, (selector) => {
  selector = Locator.getLocator(selector);
  const elementPresent = browser.element(selector);
  elementPresent.waitForExist(5000);
  browser.click(selector);
});

When(/^I enter "(.*)" in "(.*)" field$/, (value, selector) => {
  selector = Locator.getLocator(selector);
  const elementPresent = browser.element(selector);
  elementPresent.waitForExist(5000);
  browser.setValue(selector, value);
});

Then(/^I should see "(.*)" same as "(.*)"$/, (selector, expectedValue) => {
  selector = Locator.getLocator(selector);
  const elementPresent = browser.element(selector);
  elementPresent.waitForExist(10000);
  var availableText = browser.getText(selector);
  chai.expect(expectedValue).to.equal(availableText);
});

When(/^I select "(.*)" from "(.*)" drop down$/, (value, selector) => {
  selector = Locator.getLocator(selector);
  const elementPresent = browser.element(selector);
  elementPresent.waitForExist(5000);
  browser.selectByVisibleText(selector, value);
});

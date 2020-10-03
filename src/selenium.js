import webdriver from 'selenium-webdriver';

let driver = new webdriver.Builder().forBrowser('chrome').build();


function start() {
  driver.get('http://www.mmadecisions.com/');
}

start();

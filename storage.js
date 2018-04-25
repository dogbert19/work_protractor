//переключается язык с русскоо на английский или наоборот. На юате не работало из-за чего-то, поэтому сделал на прод
describe('angularjs homepage todo list', function() {

it('should check ng-click', function() {
  browser.get('http://app.uat.aggregion.com');
  //element(by.css('.langSwither :not(.active)')).click();
   //browser.waitForAngular();
  //browser.sleep(10000);

//простая авторизация  
element(by.css('[name="login"]')).sendKeys("vuldan@mail.ru");
element(by.css('[name="password"]')).sendKeys("123");
element(by.css('[translate="LOGIN_SUBMIT"]')).click();

//открывает браузер на всю ширину, иначе некоторые элементы будут не видны - надо расскрывать 
//меню, проверка адаптивности отложена  на потом
browser.driver.manage().window().maximize();
browser.waitForAngular();


//открывает список аккаунтов и выбирает первый аккаунт из списка
element(by.css('[ng-click="selector.openAccountSelectorDialog()"]')).click();
element.all(by.repeater('account in dialog.accounts track by account.id')).get(0).click();



element(by.css('[translate="СONTENT_MANAGEMENT"]')).click();
element(by.css('[translate="STORAGE"]')).click();


element.all(by.css('[ng-click="$mdSelect.toggle($event)"]')).get(0).click();
element.all(by.model("s.sharing.byLink")).get(0).click();
element.all(by.css('[ng-click="storage.delete()"]')).click();

element(by.css('[translate="ADD"]')).click();

//element(by.css('[translate="FILE_UPLOAD"]')).click();

var path = require('path');
var fileToUpload = 'C:/Users/Aggregion/Pictures/display.jpg';
var inputFile = element(by.css('input[type="file"]'));
inputFile.sendKeys(fileToUpload);




browser.sleep(5000);
element(by.css('[ng-click="fileSelect.aggrUpload.submit()"]')).click();

browser.sleep(5000);

//element(by.css('[translate="STORAGE_SETTINGS"]')).click();
element(by.css('[ng-click="storage.showStorageSettingsDialog($event)"]')).click();



element(by.model("dialog.state.storage")).all(by.tagName('md-radio-button')).get(0).click();
element(by.model("dialog.state.storage")).all(by.tagName('md-radio-button')).get(1).click();


element(by.model("dialog.state.credentials.azure.storageAccount")).sendKeys("aggregion");
element(by.model("dialog.state.credentials.azure.storageAccessKey")).sendKeys("49RbgefXwt0lPhPZQ6cw2bxzShEmjzvHnacJK0ZDgqJWMWU9Sj2+NUI953dESYMVABPGECvTOs2r/N2gPp7GnA==");
element(by.css('[translate="STORAGE_SETTINGS_SHOW"]')).click();
element(by.model("dialog.state.credentials.azure.container")).sendKeys("agg-test6");
element(by.css('[translate="STORAGE_SETTINGS_TEST_CONNECTION"]')).click();
browser.sleep(7000);
//expect(element(by.css('[translate="STORAGE_SETTINGS_SUCCESSFUL"]'))).toEqual('Успешно');

var lucky = element(by.css('[translate="STORAGE_SETTINGS_TEST_CONNECTION"]'));
browser.wait(protractor.ExpectedConditions.visibilityOf(lucky), 5000); //If the error span takes time to be visible, use wait() function
expect(lucky.isDisplayed()).toBe(true); 

//element(by.css('[ng-click="dialog.cancel()"]')).click();
element(by.css('[ng-click="dialog.cancel()"]')).click();

element(by.css('[ng-click="$pagination.next()"]')).click();
element(by.css('[ng-click="$pagination.next()"]')).click();
element(by.css('[ng-click="$pagination.previous()"]')).click();
element(by.model("$pagination.page")).click();
element(by.cssContainingText('md-option', '3')).click();	
element(by.model("$pagination.limit")).click();
element(by.cssContainingText('md-option', '100')).click();	




/*function totalTablePositions() {
		return CommonPage.emptyState.isPresent().then(isPresent => {
			if (isPresent) {
				return 0;
			} else {
				return DsCommonPage.totalTablePositions.getText()
          .then(function(str) {
  					var expr = /[0-9]{1,}$/;
  					var num = str.match(expr);
  					return num[0];
  				});
			}*/



//Пауза, для того, чтобы посмотреть результаты
browser.sleep(10000);
 

  
});



});

 
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

browser.sleep(10000);
 

  
});



});
 



/*

//открывает список аккаунтов и выбирает первый аккаунт из списка
element(by.css('[ng-click="selector.openAccountSelectorDialog()"]')).click();
element.all(by.repeater('account in dialog.accounts track by account.id')).get(0).click();



element(by.css('[translate="СONTENT_MANAGEMENT"]')).click();
element(by.css('[translate="CATALOG"]')).click();


element(by.css('[ng-click="$pagination.next()"]')).click();
element(by.css('[ng-click="$pagination.next()"]')).click();
element(by.css('[ng-click="$pagination.previous()"]')).click();
element(by.model("$pagination.page")).click();
element(by.cssContainingText('md-option', '3')).click();	
element(by.model("$pagination.limit")).click();
element(by.cssContainingText('md-option', '100')).click();	


element(by.css('[ng-click="openMenu($mdOpenMenu, $event)"]')).click();
element.all(by.css('[ng-click="helper.toggleVisibility(k)"]')).get(1).click();
element(by.model("TableTextSearchController.search")).sendKeys("Метаморфоза");
browser.sleep(5000);


element(by.css('[translate="ADD"]')).click();
browser.sleep(5000);
var name = new Date();

element(by.model("edit.catalog.title.default")).sendKeys("Test catalog" + name);
element(by.model("edit.catalog.description.default")).sendKeys("description" + name);
element(by.model("$mdAutocompleteCtrl.scope.searchText")).sendKeys("vildan", protractor.Key.ENTER);
element.all(by.model("item.selected")).get(0).click();

element.all(by.css('[translate="CHOOSE_FROM_STORAGE"]')).get(0).click();
element.all(by.repeater('f in ssc.helper.list track by f.resourceId')).get(0).click();
element(by.css('[ng-click="ssc.select()"]')).click();
browser.sleep(5000);

element.all(by.css('[translate="CHOOSE_FROM_STORAGE"]')).get(1).click();
element.all(by.repeater('f in ssc.helper.list track by f.resourceId')).get(0).click();
element(by.css('[ng-click="ssc.select()"]')).click();

element(by.css('[translate="SAVE_AND_ADD_FILES"]')).click();
element.all(by.css('[translate="CHOOSE_FROM_STORAGE"]')).click();

element(by.model("select.item.version")).sendKeys("1.0");
element(by.model("TableTextSearchController.search")).sendKeys("etalon");
element.all(by.css('[ng-click="$mdSelect.toggle($event)"]')).get(0).click();
element(by.css('[translate="CATALOG_BUNDLE_SUBMIT"]')).click();


//Пауза, для того, чтобы посмотреть результаты
*/
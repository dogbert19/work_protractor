
describe('angularjs homepage todo list', function() {

it('should check ng-click', function() {
  browser.get('http://app.uat.aggregion.com');
//   beforeEach(function (done) {
// window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;
// setTimeout(function () {
// console.log('inside timeout');
// done();
// }, 10000);
// });
  

 


//простая авторизация  
function login(login,password){
element(by.css('[name="login"]')).sendKeys(login);
element(by.css('[name="password"]')).sendKeys(password);
element(by.css('[translate="LOGIN_SUBMIT"]')).click();
}

login('hipuhedo@kumail8.info', 123);


//открывает браузер на всю ширину, иначе некоторые элементы будут не видны - надо расскрывать 
//меню
browser.driver.manage().window().maximize();


browser.sleep(1000);





element(by.css('button[ng-click="$mdMenu.open($event)"]')).click();
element(by.css('button[ng-click="selector.changeAccount(a)"]')).click();
element(by.css('[translate="ORDERS"]')).click();


CreateWaitManual = function() {

	element(by.css('[translate="ORDER_ADD"]')).click();
	element(by.model("$mdAutocompleteCtrl.scope.searchText")).sendKeys("dogbert19@gmail.com");

	var customer = element.all(by.css('li[md-virtual-repeat="item in $mdAutocompleteCtrl.matches"]'));
	browser.wait(ExpectedConditions.presenceOf(customer.first()), 10000);
	customer.first().click();/// выбор пользователя из списка

	element(by.css('[translate="SELECT_PRODUCT"]')).click(); //добавить продукт +

	var agTableData =  element.all(by.repeater('i in vm.helper.list'));
	agTableData.last().all(element(by.css('md-checkbox')).locator()).click(); //выбрать продукт из списка +
	element(by.css('[translate="ADD"]')).click(); //добавить продукт в заказ +

	element(by.css('[translate="ADD_NEW_ITEM"]')).click(); //добавить товары +
	element(by.css('button[ng-click="vm.ok()"]')).click(); //нажать на "я понял"" +

	var toaster = element(by.css('md-toast[md-theme="default"]'));



	var mdCheckboxSelectAll = by.css('md-checkbox[ng-click="toggleAll()"]');
	var mdDialog = element(by.css('md-dialog'));

	mdDialog.element(mdCheckboxSelectAll).click(); //выбраны все

	element(by.css('button[ng-click="goodsDialogVm.addGoods()"]')).click();  //добавить


	browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(toaster)), 10000); // Ждать скрытия тостера

	element(by.css('[translate="CONFIRM"]')).click(); //ПОДТВЕРДИТЬ

	browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(toaster)), 10000);

	element(by.css('[translate="ORDERS_BACK_TO_ORDERS"]')).click(); //ВЕРНУТЬСЯ К ЗАКАЗАМ

}

// var w;
// for (w = 0; w < 5; w++) {
// 	
// }

CreateWaitManual();
CreateWaitManual();
CreateWaitManual();
CreateWaitManual();
CreateWaitManual();
CreateWaitManual();
CreateWaitManual();















 
browser.sleep(10000);
 

  
});




});


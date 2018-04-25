const api = require('./api.js');

console.log(api);

describe('angularjs homepage todo list', function() {

it('should check ng-click', function() {
  browser.get('http://app.uat.aggregion.com');


 


//простая авторизация  
function login(login,password){
element(by.css('[name="login"]')).sendKeys(login);
element(by.css('[name="password"]')).sendKeys(password);
element(by.css('[translate="LOGIN_SUBMIT"]')).click();
}

login('vuldan@mail.ru', 123);


//открывает браузер на всю ширину, иначе некоторые элементы будут не видны - надо расскрывать 
//меню
browser.driver.manage().window().maximize();
element(by.css('button[ng-click="selector.openAccountSelectorDialog()"]')).click();
element.all(by.repeater('account in dialog.filteredList track by account.id')).get(0).click();

//перешли в раздел "Каталог"

element(by.css('[translate="СONTENT_MANAGEMENT"]')).click();
element(by.css('[translate="CATALOG"]')).click();
element(by.css('[translate="SHOW_FILTERS"]')).click();

//проверка текстового поиска и очистка результата
element(by.model("vm.model")).sendKeys("test 1921");
browser.sleep(3000);
element(by.css('button[ng-click="vm.resetSearch()"]')).click(); 


//проверка по тегам
element(by.model("$mdAutocompleteCtrl.scope.searchText")).sendKeys("вильдан 1653");


var tag = element.all(by.css('li[md-virtual-repeat="item in $mdAutocompleteCtrl.matches"]'));
browser.wait(ExpectedConditions.presenceOf(tag.first()), 10000);
customer.first().click();/// выбор пользователя из списка













 
browser.sleep(10000);
 

  
});




});


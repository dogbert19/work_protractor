
describe('angularjs homepage todo list', function() {

it('should check ng-click', function() {
  browser.get('http://app.uat.aggregion.com');
  beforeEach(function (done) {
window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
setTimeout(function () {
console.log('inside timeout');
done();
}, 10000);
});
  

 


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


browser.sleep(10000);


element(by.css('button[ng-click="selector.openAccountSelectorDialog()"]')).click();
element.all(by.repeater('account in dialog.filteredList track by account.id')).get(0).click();


//открывает меню АККАУНТЫ, начинает проверку подпунктов этого меню
element(by.css('[translate="ACCOUNTS"]')).click();



//Проверяем подменю МОЙ ПРОФИЛЬ
element(by.css('[translate="PROFILE"]')).click();

//Проверяем ИЗМЕНЕНИЕ ПАРОЛЯ
//вводим неправильный старый пароль, нажимаем на кнопку ОТМЕНА
//вводим правильный старый логин, вводим новый пароль с неправильным подтверждением,нажимаем на кнопку ОТМЕНА
//вводим правильный логин и пароль, вводим новый пароль с подтверждением

//если использовать translate="SAVE", то будет путать с другой кнопкой СОХРАНИТЬ

var EC = protractor.ExpectedConditions;
this.PROFILE_PASSWORD_CHANGE = element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();


element(by.model("dialog.send.oldPass")).sendKeys("vildan", protractor.Key.ENTER);
element(by.model("dialog.send.newPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass2")).sendKeys("123");
element(by.css('[ng-click="dialog.submit()"]')).click(); 
element(by.css('[translate="CANCEL"]')).click();
browser.sleep(10000);
//browser.wait(EC.or(EC.visibilityOf(PROFILE_PASSWORD_CHANGE));



element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();
element(by.model("dialog.send.oldPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass")).sendKeys("222", protractor.Key.ENTER);
element(by.model("dialog.send.newPass2")).sendKeys("123");
element(by.css('[ng-click="dialog.submit()"]')).click(); 
element(by.css('[translate="CANCEL"]')).click();
browser.sleep(10000);

element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();
element(by.model("dialog.send.oldPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass")).sendKeys("321", protractor.Key.ENTER);
element(by.model("dialog.send.newPass2")).sendKeys("321");
element(by.css('[ng-click="dialog.submit()"]')).click(); 

browser.sleep(1000);

//выходим из приложения и авторизуемся с новым логином и паролем
element(by.css('[ng-click="nav.currentUser.logout(true); nav.currentUser.redirect()"]')).click(); 
browser.wait(EC.presenceOf(element(by.css('[translate="LOGIN_SUBMIT"]'))), 30000);
browser.waitForAngular();
browser.sleep(1000);

login('vuldan@mail.ru',321);
//element(by.css('[name="login"]')).sendKeys("vuldan@mail.ru");
//element(by.css('[name="password"]')).sendKeys("321");
//element(by.css('[translate="LOGIN_SUBMIT"]')).click();







element(by.css('[translate="ACCOUNTS"]')).click();
element(by.css('[translate="PROFILE"]')).click();
element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();
element(by.model("dialog.send.oldPass")).sendKeys("321", protractor.Key.ENTER);
element(by.model("dialog.send.newPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass2")).sendKeys("123");
element(by.css('[ng-click="dialog.submit()"]')).click(); 



//Пауза, для того, чтобы посмотреть результаты
 
browser.sleep(10000);
 

  
});




});

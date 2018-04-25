//переключается язык с русскоо на английский или наоборот. На юате не работало из-за чего-то, поэтому сделал на прод
describe('angularjs homepage todo list', function() {

it('should check ng-click', function() {
  browser.get('http://app.uat.aggregion.com');
  beforeEach(function (done) {
window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
setTimeout(function () {
console.log('inside timeout');
done();
}, 50000);
});
  //element(by.css('.langSwither :not(.active)')).click();
   
  //browser.waitForAngular();
  //browser.sleep(10000);
 var EC = protractor.ExpectedConditions;


//простая авторизация  
element(by.css('[name="login"]')).sendKeys("vuldan@mail.ru");
element(by.css('[name="password"]')).sendKeys("123");
element(by.css('[translate="LOGIN_SUBMIT"]')).click();


//открывает браузер на всю ширину, иначе некоторые элементы будут не видны - надо расскрывать 
//меню
browser.driver.manage().window().maximize();


browser.sleep(10000);
//browser.wait(EC.presenceOf(element(by.css('span[translate="MAIN_HELLO"]'))), 120000);
//открывает список аккаунтов и выбирает первый аккаунт из списка
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


//element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();
element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();
element(by.model("dialog.send.oldPass")).sendKeys("321", protractor.Key.ENTER);
element(by.model("dialog.send.newPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass2")).sendKeys("123");
element(by.css('[translate="CANCEL"]')).click();
browser.sleep(10000);
//xpath - путь с аттрибутом, так как если использовать translate="SAVE", то будет
//путать с другой кнопкой СОХРАНИТЬ
//element(by.xpath('//md-dialog-actions/button[@aria-label="Сохранить"]')).click(); 

element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();
element(by.model("dialog.send.oldPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass2")).sendKeys("123");
//element(by.xpath('//md-dialog-actions/button[@aria-label="Сохранить"]')).click(); 
element(by.css('[ng-click="dialog.submit()"]')).click(); 



browser.sleep(10000);

/*element(by.model("profile.currentUserInfo.email")).clear().sendKeys("vuldan@mail.ru");
element(by.model("profile.currentUserInfo.firstName")).clear().sendKeys("Вильдансс");
element(by.model("profile.currentUserInfo.lastName")).clear().sendKeys("Габитовсс");
element(by.model("profile.currentUserInfo.phoneNumber")).clear().sendKeys("89046689034");
element(by.model("profile.currentUserInfo.address")).clear().sendKeys("Казань");
element(by.model("profile.currentUserInfo.language")).click();
element(by.cssContainingText('md-option', 'Английский')).click();
element(by.css('[translate="SAVE"]')).click();

element(by.model("profile.currentUserInfo.email")).clear().sendKeys("vuldanchick@mail.ru");
element(by.model("profile.currentUserInfo.firstName")).clear().sendKeys("Вильданss");
element(by.model("profile.currentUserInfo.lastName")).clear().sendKeys("Габитоvv");
element(by.model("profile.currentUserInfo.phoneNumber")).clear().sendKeys("89034");
element(by.model("profile.currentUserInfo.address")).clear().sendKeys("Мазань");
element(by.model("profile.currentUserInfo.language")).click();
element(by.cssContainingText('md-option', 'Russian')).click();
element(by.css('[translate="SAVE"]')).click();




//element(by.css('[ng-click="profile.showChangePasswordDialog($event)"]')).click();


element(by.model("profile.currentUserInfo.email")).clear().sendKeys("vuldan@mail.ru");
element(by.model("profile.currentUserInfo.firstName")).clear().sendKeys("Вильдансс");
element(by.model("profile.currentUserInfo.lastName")).clear().sendKeys("Габитовсс");
element(by.model("profile.currentUserInfo.phoneNumber")).clear().sendKeys("89046689034");
element(by.model("profile.currentUserInfo.address")).clear().sendKeys("Казань");
element(by.model("profile.currentUserInfo.language")).click();
element(by.cssContainingText('md-option', 'Английский')).click();
element(by.css('[translate="SAVE"]')).click();

element(by.model("profile.currentUserInfo.email")).clear().sendKeys("vuldanchick@mail.ru");
element(by.model("profile.currentUserInfo.firstName")).clear().sendKeys("Вильданss");
element(by.model("profile.currentUserInfo.lastName")).clear().sendKeys("Габитоvv");
element(by.model("profile.currentUserInfo.phoneNumber")).clear().sendKeys("89034");
element(by.model("profile.currentUserInfo.address")).clear().sendKeys("Мазань");
element(by.model("profile.currentUserInfo.language")).click();
element(by.cssContainingText('md-option', 'Russian')).click();
element(by.css('[translate="SAVE"]')).click();


element(by.css('[translate="PROFILE_PASSWORD_CHANGE"]')).click();
element(by.model("dialog.send.oldPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass")).sendKeys("123", protractor.Key.ENTER);
element(by.model("dialog.send.newPass2")).sendKeys("123");
element(by.xpath('//md-dialog-actions/button[@aria-label="Сохранить"]')).click(); 


//Изменяем текстовые поля профиля - почта, имя и фамилия, номер телефона, адрес, 
//изменяем селектор языка, потом меняем обратно - тестирование надписей на английской отложено на потом




//Проверяем подменю АККАУНТЫ. Название совпадает с названием меню, поэтому
//берутся все элементы с этим транслейтом и из них выбирается последний
var elm = element.all(by.css('[translate="ACCOUNTS"]')).last();
elm.click();
element(by.css('[translate="ACCOUNT_EXPORT"]')).click();
element(by.css('[translate="ACCOUNT_IMPORT"]')).click();
element(by.css('[translate="CANCEL"]')).click();
element(by.css('[ng-click="account.showEditForm($event)"]')).click();
element(by.css('[translate="CANCEL"]')).click();
element(by.css('[ng-click="account.showEditForm($event)"]')).click();
var time = new Date();
element(by.model("form.org.name")).sendKeys("BEST ORG OF ALL TIMES" + time);
var adm = element(by.model("$mdAutocompleteCtrl.scope.searchText")).click().sendKeys("a");
browser.sleep(7000);
adm.sendKeys(protractor.Key.DOWN, protractor.Key.ENTER);
element(by.model("form.org.organizationDetails.country")).click();
element.all(by.css('[ng-click="$mdAutocompleteCtrl.select($index)"]')).first().click();
element(by.model("form.org.organizationDetails.city")).sendKeys("Russian");
element(by.model("form.org.organizationDetails.duns")).sendKeys("89046671231");
element(by.model("form.org.organizationDetails.defaultCurrency")).click();
element(by.cssContainingText('md-option', 'RUB')).click();
element(by.model('form.org.organizationDetails.timeZone')).click();
element(by.cssContainingText('md-option', 'Africa/Accra')).click();
element(by.xpath('//md-dialog-actions/button[@translate="SAVE"]')).click(); 


//редактирование выбранного аккаунта
element.all(by.css('[translate="EDIT"]')).first().click();
element(by.css('[translate="CANCEL"]')).click();
element.all(by.css('[translate="EDIT"]')).first().click();
element(by.model('form.org.name')).click().sendKeys("VILDANUSH");
element(by.model('$mdAutocompleteCtrl.scope.searchText')).click().sendKeys("Т");
element.all(by.css('[ng-click="$mdAutocompleteCtrl.select($index)"]')).first().click();
element(by.css('[translate="SAVE"]')).click();


//проверка удаления чипсов

element.all(by.css('[translate="EDIT"]')).first().click();
//element.all(by.repeater('$chip in $mdChipsCtrl.items')).get(0).click();
element.all(by.css('button[ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"')).get(0).click();
element(by.css('[translate="SAVE"]')).click();
browser.sleep(5000);


//Проверяем подменю ГРУППЫ
element(by.css('[translate="GROUPS"]')).click();
element(by.css('[ng-click="group.addGroup($event)"]')).click();
element(by.model("form.group.name")).sendKeys("vildanskii");
element(by.model('form.group.parent')).click();
//element(by.cssContainingText('md-option', 'Группа Альфа')).click();
element(by.cssContainingText('md-option', 'Группа 6')).click();
element.all(by.css('[translate="CANCEL"]')).get(0).click();



element(by.css('[ng-click="group.addGroup($event)"]')).click();
element(by.model("form.group.name")).sendKeys("vildanskii");
element(by.model('form.group.parent')).click();
//element(by.cssContainingText('md-option', 'Группа Альфа')).click();
element(by.cssContainingText('md-option', 'Группа 6')).click();
element(by.css('[translate="SAVE"]')).click();

//редактируем группу
element.all(by.css('[ng-click="group.showEditForm($event, p)"]')).get(1).click();
element(by.model("form.group.name")).sendKeys("vildanskii superski");
//element(by.css('[translate="CANCEL"]')).click();
//element.all(by.css('[ng-click="group.showDeleteConfirmDialog($event, p)"]')).first().click();
browser.sleep(5000);
element(by.css('[translate="SAVE"]')).click();
browser.sleep(5000);


//Проверяем подменю ПРИЛОЖЕНИЯ
element(by.css('[translate="APPLICATIONS"]')).click();
element(by.css('[translate="APPLICATION_ADD_NEW"]')).click();
element(by.model("dialog.applicationItem.name")).sendKeys("vildan app");
element(by.model("dialog.applicationItem.platform")).sendKeys("vildan app");
element(by.model("$mdChipsCtrl.chipBuffer")).sendKeys("123", protractor.Key.ENTER);
element(by.css('[translate="CHOOSE_FROM_STORAGE"]')).click();
element.all(by.repeater('f in ssc.helper.list track by f.resourceId')).get(0).click();
element(by.css('[ng-click="ssc.select()"]')).click();
element(by.css('[translate="APPLICATION_ADD"]')).click();

element.all(by.css('[ng-click="$mdSelect.toggle($event)"]')).get(0).click();








//Пауза, для того, чтобы посмотреть результаты
 */
browser.sleep(10000);
 

  
});




});

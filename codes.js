describe('angularjs homepage todo list', function() {

  it('should check ng-click', function() {
    browser.get('http://app.uat.aggregion.com');
  
  

 


//простая авторизация  
function login(login,password){
element(by.css('[name="login"]')).sendKeys(login);
element(by.css('[name="password"]')).sendKeys(password);
element(by.css('[translate="LOGIN_SUBMIT"]')).click();
}

login('sergey.roskach90@gmail.com', 'aggregiontest');



//открывает браузер на всю ширину, иначе некоторые элементы будут не видны - надо расскрывать 
//меню
browser.driver.manage().window().maximize();


browser.sleep(1000);





//element(by.css('button[ng-click="$mdMenu.open($event)"]')).click();
//element(by.css('button[ng-click="selector.changeAccount(a)"]')).click();
//element.all(by.repeater('account in dialog.filteredList track by account.id')).get(0).click();


//var now = new Date(milliseconds);

element(by.css('[translate="СONTENT_MANAGEMENT"]')).click();
element(by.css('[translate="CATALOG"]')).click();

var time = new Date();

element(by.css('[translate="ADD_CATALOG_ITEM"]')).click();

element(by.model("$ctrl.catalogItem.title.default")).sendKeys(time.toISOString());
element(by.model("$ctrl.catalogItem.shortTitle")).sendKeys("short item");
element(by.model("$ctrl.catalogItem.description.default")).sendKeys("desc ription");
//element(by.id('radio_89')).all(by.tagName('md-radio-button')).get(1).click();
element(by.css('[value="licenseCode"]')).click();

element(by.css('[translate="SAVE_AND_ADD_CODES"]')).click();
element(by.css('[translate="CATALOG_CODES_ADD"]')).click();

getRandomString = function(length) {
var string = '';
var getters = 'abcdefghijklmnopqrstuvwxyz123456789';
var betters = '123456789';
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var i;
   
     
      
        for (i = 0; i < length; i++) {
            string += letters.charAt(Math.floor(Math.random() * letters.length)) + betters.charAt(Math.floor(Math.random() * betters.length))+ getters.charAt(Math.floor(Math.random() * getters.length));
            
           
        }
          
          return string;
          
      }

    var z;
    for (z = 0; z < 15; z++) {
    element(by.model("dialog.codes")).sendKeys(getRandomString(10));
    element(by.model("dialog.codes")).sendKeys(protractor.Key.ENTER); 
     }

    element(by.css('[ng-click="dialog.submit()"]')).click();  //save
	//element(by.css('[translate="SAVE"]')).click();






//Пауза, для того, чтобы посмотреть результаты
 
browser.sleep(10000);
 

  
});




});


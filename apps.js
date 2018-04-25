


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
    
    login('hipuhedo@kumail8.info', 123);
    
    
    //открывает браузер на всю ширину, иначе некоторые элементы будут не видны - надо расскрывать 
    //меню
    browser.driver.manage().window().maximize();
    
    
    browser.sleep(1000);
    
    
    
    
 
    element(by.css('[translate="ACCOUNTS"]')).click();
        element(by.css('[translate="APPLICATIONS"]')).click();
    


    createApp = function() {

        
        element(by.css('[translate="ADD_APPLICATION"]')).click();
        element(by.model("dialog.applicationItem.name")).sendKeys("123");
        element(by.css('[ng-click="dialog.save()"]')).click(); 
        browser.sleep(1000);

    }

    var z;
     for (z = 0; z < 101; z++) {
     createApp();
    }
    
    
    
   
    

    
    
  
    
    
    
    
    
     
    browser.sleep(10000);
     
    
      
    });
    
    
    
    
    });
    
    
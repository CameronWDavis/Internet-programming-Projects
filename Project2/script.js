//Cameron Davis
//version 6/26/2022
//This is a script to verify userInput with javascript on a platform to ensure credit card information is accurate 


function validateForm() {
    //variables for required length
    var cvcSet = 3; 
    var zipSet = 5;

    //variables imported from document 
    var cvcUser = document.getElementById("secNum"); 
    var zipUser = document.getElementById("Zip");
    var emailUser = document.getElementById("email"); 
    var stateLocal = document.getElementById("states");
    var creditUserNumber = document.getElementById("cardValue");
    var exDate = document.getElementById("dates"); 
    var userName = document.getElementById("first");
    var lastName = document.getElementById("last");
    var cardName = document.getElementById("cardName");
    var cityName = document.getElementById("city");


    //This code below verifies the user does not put a city,card name or there name as a number in the fields insuring more accuracy 

    var userNewName = testNumber(userName.value); 
    var checkUser; 

    if(userNewName == false)
    {
        checkUser = true; 
    }
    else if(userNewName == true){
        alert("Name cannot be a number"); 
        checkUser = false; 
    }

    var lastNewName = testNumber(lastName.value); 
    var lastUser; 

    if(lastNewName == false)
    {
        lastUser = true; 
    }
    else if(lastNewName == true){
        alert("Last name cannot be a number"); 
        lastUser = false; 
    }

    var cardNewName = testNumber(cardName.value); 
    var cardUser; 

    if(cardNewName == false)
    {
        cardUser = true; 
    }
    else if(cardNewName == true){
        alert("Card name cannot be a number"); 
        cardUser = false; 
    }

    var cityNewName = testNumber(cityName.value); 
    var cityUser; 

    if(cityNewName == false)
    {
        cityUser = true; 
    }
    else if(cityNewName == true){
        alert("City cannot be a number"); 
        cityUser = false; 
    }

    //booleans for checking attributes with function calls
   var checkState = validateState(stateLocal.value);
   var checkCVC = validateControl(cvcUser.value,cvcUser.name, cvcSet); 
   var checkZip = validateControl(zipUser.value, zipUser.name, zipSet); 
   var checkCreditCard = validateCreditCard(creditUserNumber.value);
   var checkDate = validateDate(exDate.value);
   var checkEmail = validateEmail(emailUser.value);


   
   

   //array for adding all the return booleans too
   var checkTrue = [checkState, checkCVC, checkZip,checkCreditCard,
    checkDate,checkEmail,checkUser,lastUser,cardUser,cityUser]; 
    var truthTimer = 0; 

    //for loop to verify if they are all true 
   for(var i = 0; i < checkTrue.length; i++){
        if(checkTrue[i] == true)
        {
            truthTimer++; 
        }
   }

   //if my truth counter hits 6 then all came true so we let the user know payment was good
   if(truthTimer == checkTrue.length)
   {
    alert("Payment was submitted successfully"); 

   }

  return false; 
}

//function to validate email
function validateEmail(value){
    var re = /^[\w\d\.]+@\w*\.\w+$/;
    let x = re.test(value); 

    if(x == false)
    {
        alert("please use a valid email"); 
        return false; 
    }
    else{
        return true; 
    }

}

//this is for validating the control of the zip and CVC
function validateControl(control, name , length)
{
    var testArray = testLength(control, length);

    var userInput = name; 
    
    if(testArray == false )
    {
        alert(userInput + " was not the correct length please enter all numbers"); 
        return false; 
    }

    var isaNumber = testNumber(control);
    if(isaNumber == false){
        alert("Please only enter numbers for " + userInput);
        return false; 
    }

    if(testArray == true && isaNumber == true){
        return true; 
    }else{
        return false; 
    }

    
}

//this is a length testing function 
function testLength(value, length){
    if(value.length  == length){
        return true; 
    }
    else 
    {
        return false; 
    }

}
//this function makes sure value is a number
function testNumber(value){
    if(isNaN(value) == true){
        return false;
    }else{
        return true; 
    }
}


//This one makes sure the state selected is not default 
function validateState(value){
  if(value == "none"){
    alert("State Choice invalid, please select a state!")
    return false;
  }
  else{
    return true; 
  }
}


//this checks to see if the date was in the past 
function validateDate(value){
   var userDate = new Date(value);
    var currentDate = new Date (); 

    if(userDate > currentDate){
        return true;
    }

    else{
        alert("Card date has passed card expired");
        return false; 
    }
    
}


//this is for validting the credit card and making sure the card is a legit credit card
function validateCreditCard(value){ 
    var amexNumber = 15;
    var otherCardNumber = 16; 
    var amexStart = 3;
    var discoverStart = 6; 
    var masterStart = 5; 
    var visaStart = 4;
    var creditLegit; 
    var realCredit; 

    var realCredit = value.replace(/\s*/g, '');

   var testVal = testNumber(realCredit); 

   if(testVal == false){
    alert("Please enter numbers only in the credit card field"); 
    return false; 
   }

   if(realCredit[0] == amexStart)
   {
    creditLegit = testLength(realCredit, amexNumber); 
   }

   if(creditLegit == false)
   {
    alert("American Express Card was seen length inaccurate"); 
    return false;
   } 

   if(realCredit[0] == discoverStart)
   {
    creditLegit = testLength(realCredit, otherCardNumber); 
   }

   if(creditLegit == false)
   {
    alert("Discover Card was seen length inaccurate"); 
    return false;
   }

   if(realCredit[0] == masterStart)
   {
    creditLegit = testLength(realCredit, otherCardNumber); 
   }

   if(creditLegit == false)
   {
    alert("Master Card was seen length inaccurate"); 
    return false;
   }

   if(realCredit[0] == visaStart)
   {
    creditLegit = testLength(realCredit, otherCardNumber); 
   }

   if(creditLegit == false)
   {
    alert("Visa Card was seen length inaccurate"); 
    return false;
   }

   if(creditLegit == true)
   {
    return true 
   }
   else{
    alert("credit card number is invalid"); 
    return false 
   }
} 



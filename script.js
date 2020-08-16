// Assignment code here
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lowercaseEl =document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


const randomFunc = {
  lower: randomlower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};

generateEl.addEventListener('click', function() {
  const length =lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

 passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typescount = lower + upper + number + symbol;
  //console.log('typescount: ', typescount);
  const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(
  //console.log('typesArray: ', typesArray);
    item => Object.values(item)[0]
    );
    if(typescount === 0) {
      return '';
    }
    for(let i = 0; i < length; i += typescount){
      typesArray.forEach(type =>{
        const funcName = Object.keys(type)[0];
        //console.log('funcName: ', funcName)
        generatedPassword += randomFunc[funcName]();
      });
    }
    //console.log(generatePassword.slice(0, length));
    console.log(generatedPassword.slice(0, length));
    const finalPassword =generatedPassword.slice(0, length);
    return finalPassword;
}
//Generator functions

//lower case
function randomlower (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//console.log(randomlower());

//upper case
function randomUpper (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//console.log(randomUpper());

//numbers
function randomNumber (){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//console.log(randomNumber());

//symbol
function randomSymbol (){
  const symbols = "!#$%&()*+-=<>?^~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//console.log(randomSymbol());
function TestFunction() {
  var T = document.getElementById("show/hide");
  T.style.display = "block";
}


//Assignment code end

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

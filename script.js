// Assignment Code
var generateBtn = document.querySelector("#generate");


var lengthChoice;
var numberChoice;
var charChoice;
var upChoice;
var lowChoice;

const number = [0,1,2,3,4,5,6,7,8,9];
const characters = ["!","@","#","$","%","^","&","*","(",")","<",">","-","_","=","+","?","~"];
const upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var selections = "";
var password = "";


function generatePassword() {
    lengthChoice = parseInt(prompt("How many characters would you like in your password, between 8 and 128?"));
    if (lengthChoice < 8 || lengthChoice > 128) {
        lengthChoice = parseInt(prompt("Please pick a number between 8 and 128."));
        return;
    } else {
        numberChoice = confirm("Do you want the password to contain numbers? y or n");
        charChoice = confirm("Do you want the password to contain special characters? y or n");
        upChoice = confirm("Do you want the password to contain uppercase letters? y or n");
        lowChoice = confirm("Do you want the password to contain lowercase letters? y or n");
    };

    if (numberChoice && charChoice && upChoice && lowChoice) {
        selections = numberChoice.concat(charChoice, upChoice, lowChoice);

    } else if (numberChoice && charChoice && upChoice) {
        selections = number.concat(characters , upCase, lowCase);
    } else if (numberChoice && charChoice && lowChoice) {
        selections = number.concat(characters, lowCase);
    } else if (numberChoice && upChoice && lowChoice) {
        selections = number.concat(upCase, lowCase);
    } else if (charChoice && upChoice && lowChoice) {
        selections = characters.concat(upCase, lowCase);

    } else if (numberChoice && charChoice) {
        selections = number.concat(characters);
    } else if (upChoice && lowChoice) {
        selections = lowCase.concat(upCase);
    } else if (charChoice && upChoice) {
        selections = characters.concat(upCase);
    } else if (numberChoice && lowChoice) {
        selections = number.concat(lowCase);
    } else if (numberChoice && upChoice) {
        selections = number.concat(upCase);
    } else if (charChoice && lowChoice) {
        selections = characters.concat(lowCase);

    } else if (numberChoice) {
        selections = number;
    } else if (charChoice) {
        selections = characters;
    } else if (upChoice) {
        selections = upCase;
    } else if (lowChoice) {
        selections = lowCase;
    };
    
    

    for (let i = 0; i < lengthChoice; i++) {
        var allChoices = selections[Math.floor(Math.random() * selections.length)];
        password.push(allChoices);
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



  
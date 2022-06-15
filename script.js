// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var requiredPwd = prompt("How many characters do you want in your password? *Minimum 8 characters, maximum 128 characters");
console.log(requiredPwd)
var lowerCase = confirm("Include lowercase letters?");
var upperCase = confirm("Include uppercase letters?");
var numericalChar = confirm("Include numerical characters?");
var specialChar = confirm("Include special characters?");
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//What if all prompts are denied 
if(requiredPwd < 8 || requiredPwd > 128){
  alert("*Must have between 8 - 128 characters");
  return null;
} else if (!lowerCase && !upperCase && !numericalChar && !specialChar){
  alert("You must choose at least one option!");
}} 

function lowerRandom(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);}

function upperRandom(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);}
function numericalRandom() {
return String.fromCharCode(Math.floor(Math.random()*10)+48);}
function specialRandom(){
  return String.fromCharCode(Math.floor(Math.random()*15)+33);}

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

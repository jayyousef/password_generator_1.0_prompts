// Assignment Code
// let generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//create a variable that will contain all the selected options
let passwordShouldHave = ""
let numberOfCharDesired = ""

//variables which the user can select to add into their password

const uppCharacters = 'ABCDEFGHIJKLMONPQRSTUVWXYZ'
const lowCharacters = 'abcdefghijklmnopqrstuvwxyz'
const specialCharacters = '!@#$%^&*()<>?{}|'
const numericalCharacter = '1234567890'

document.querySelector('#generate-password').addEventListener('click', function () {

//a series of variables and IF statements that get creteria for passwords all within the master function which begins with a click on the generate button
    // FUNCTION TO GET AND VALIDATE INPUT for number of characters
  function getInteger(){
    while(true){   	  
         numberOfCharDesired = prompt("How many characters would you like in your password? Choose a Number Between 8 and 128)") 
        
        if (numberOfCharDesired == null) {
            // user hit cancel
        		alert("Oops! You forgot to enter a number!")
            return true;
        } else {
        	  if (numberOfCharDesired < 8 || numberOfCharDesired > 128 || isNaN(numberOfCharDesired)) {
                // user pressed OK, but input invalid or does not input anything
                alert("That doesn't work! Try entering a number between 8 and 128.");
            } else {
                // user typed something valid and hit OK
                return parseInt(numberOfCharDesired);
            }
         }                    
        }                     
}

getInteger()

  let wantUpper = confirm('Do you want upper characters?')
  if (wantUpper) {
    passwordShouldHave += uppCharacters
  }
  let wantLower = confirm('Do you want lower characters?')
  if (wantLower) {
    passwordShouldHave += lowCharacters
  }
  let wantSpecial = confirm('Do you want special characters?')
  if (wantSpecial) {
    passwordShouldHave += specialCharacters
  }
  let wantNumerical = confirm('Do you want numerical characters?')
  if (wantNumerical) {
    passwordShouldHave += numericalCharacter
  }

  if (!wantUpper && !wantLower && !wantSpecial && !wantNumerical) {
  alert("Sorry! You haven't selected any characters! Please try again!")
  location.reload();
  }


 getSelection

  let passwordShouldHaveArray = passwordShouldHave.split('')

  let password = ""

  for (let i = 0; i < numberOfCharDesired; i++) {
    let randomIndex = Math.floor(Math.random() * passwordShouldHaveArray.length)
    password += passwordShouldHaveArray[randomIndex]
  }
  // let randomIndex = Math.floor(Math.random() * passwordShouldHaveArray.length)

  document.querySelector("#password").value = password;
  console.log(password);
})

 // have button
 // get clicked
 // when clicked ask user for if they want uppp lower
 // generate
 // click event for HTML button
 // ask user with promps
 // generate
	// concatinated a big string of all options would work
	// pick from string randomly. Math.random()
	// 


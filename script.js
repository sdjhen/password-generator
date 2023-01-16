// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Concatenate character Arrays & convert to String

// Function to prompt user for password options
function getPasswordOptions() {
  var userInput = 0;
  while (userInput === 10 || userInput < 65) {
    userInput = window.prompt(
      'Please choose a password length between 10 and 64 characters '
    );

    if (userInput < 10 || userInput > 64 || userInput === NaN) {
      window.alert(
        'The password length MUST be between 10 and 64 characters'
      ) && userInput === 0;
    }
    var chooseSpecial = window.confirm(
      'Do you want to include special characters?'
    );
    var chooseNumeric = window.confirm(
      'Do you want to include numeric characters?'
    );
    var chooseLower = window.confirm(
      'Do you want to include lowercase characters?'
    );
    var chooseUpper = window.confirm(
      'Do you want to include uppercase characters?'
    );
  }
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var userChoices = getPasswordOptions();
  var UserResults = [];

  if (specialCharacters) {
    userChoices = userChoices.concat(specialCharacters);
  }

  if (numericCharacters) {
    userChoices = userChoices.concat(numericCharacters);
  }

  if (lowerCasedCharacters) {
    userChoices = userChoices.concat(lowerCasedCharacters);
  }

  if (upperCasedCharacters) {
    userChoices = userChoices.concat(upperCasedCharacters);
  } else return;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

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

// Function to prompt user for password options
function getPasswordOptions() {
  var userInput = null;
  var options = [];

  while (
    userInput === null ||
    userInput < 10 ||
    userInput > 64 ||
    isNaN(userInput)
  ) {
    userInput = parseInt(
      window.prompt(
        'Please choose a password length between 10 and 64 characters'
      )
    );
    if (userInput < 10 || userInput > 64 || isNaN(userInput)) {
      window.alert('The password length MUST be between 10 and 64 characters');
      return getPasswordOptions(); // Prevent invalid user input
    }
  }

  // Include characters based on user input
  var includeSpecial = window.confirm(
    'Do you want to include special characters?'
  );
  if (includeSpecial) {
    options = options.concat(specialCharacters);
  }

  var includeNumeric = window.confirm(
    'Do you want to include numeric characters?'
  );
  if (includeNumeric) {
    options = options.concat(numericCharacters);
  }

  var includeLowercase = window.confirm(
    'Do you want to include lowercased characters?'
  );
  if (includeLowercase) {
    options = options.concat(lowerCasedCharacters);
  }

  var includeUppercase = window.confirm(
    'Do you want to include uppercased characters?'
  );
  if (includeUppercase) {
    options = options.concat(upperCasedCharacters);
  }
  return { userInput, options };
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {}

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

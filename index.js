function validatePassword(password) {
  return (password) &&
    (isValidLength(password)) &&
    (isLowerCase(password)) &&
    (isUpperCase(password)) &&
    (isNumber(password)) &&
    (isSpecial(password))

}

function isValidLength(password) {
  if (password.length < 8) return false
  return true
}

function testLetter(character, lower, upper) {
  return character.length === 1 && (character >= lower && character <= upper)
}



function isLowerCase(password) {
  for (let i = 0; i < password.length; i++) {
    if (testLetter(password[i], 'a', 'z') && password[i] === password[i].toLowerCase()) return true

  }
  return false

}

function isUpperCase(password) {
  for (let i = 0; i < password.length; i++) {
    if (testLetter(password[i], 'A', 'Z') && password[i] === password[i].toUpperCase()) return true

  }
  return false

}

function isNumber(password) {
  for (let i = 0; i < password.length; i++) {
    if (testLetter(password[i], '0', '9')) return true

  }
  return false
}

//https://stackoverflow.com/questions/11896599/javascript-code-to-check-special-characters
function isSpecial(password) {
  let characters = '~`!@#$%^&*()-_=+'
  for (let i = 0; i < password.length; i++) {
    if (characters.indexOf(password.charAt(i)) !== -1) return true
  }
  return false
}

module.exports = validatePassword


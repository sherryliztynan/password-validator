//check for lowercase//
function checkForLowerCase(password){
    for (var i = 0; i < password.length; i++){
        if (password[i] >= "a" && password[i] <="z"){
            return true
    }
    }
    return false
}
//check for password length//
function checkForLength(password){
    if (password.length < 8) {
        return false
    }
    return true
}
//check for uppercase//
function checkForUpperCase(password){
    for (var i = 0; i < password.length; i++){
        if (password[i] >= "A" && password[i] <="Z"){
            return true
    }
    }
    return false
}
//check for numeric value//
function checkForNumber(password){
    for (var i = 0; i < password.length; i++){
        if (!isNaN(password[i])){
            return true
    }
    }
    return false
}
//check for specialcharacter//
function checkSpecialCharacter(password) {
var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
    for (var i = 0; i < password.length; i++) {
        if (iChars.indexOf(password.charAt(i)) != -1){
        return true
        }
        }
    return false
}
function validatePassword(password) {
let lowerCase = false
let passwordLength = false
let upperCase = false
let checkNumber = false
let checkCharacter = false
    passwordLength = checkForLength(password)
    lowerCase = checkForLowerCase(password)
    upperCase = checkForUpperCase(password)
    checkNumber = checkForNumber(password)
    checkCharacter = checkSpecialCharacter(password)
    
    return lowerCase && passwordLength && upperCase && checkNumber && checkCharacter
}
module.exports = validatePassword
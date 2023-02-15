// GOAL: generate two passwords, each 15 characters in length
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword = document.getElementById("first-code")
let secondPassword = document.getElementById("second-code")

function generate() {
    firstPassword.textContent = generateNewPassword();
    secondPassword.textContent = generateNewPassword();
}

function generateNewPassword() {
  let newPassword = ""
  while (newPassword.length < 16) {
     let randomNumber = Math.floor(Math.random() * (characters.length))
     newPassword += characters[randomNumber]
  }
    return newPassword
}

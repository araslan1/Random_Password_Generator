const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">","."]

let hexCol = "55F991"
let paragraphEl = document.getElementById("paragraph-el")
let inputEl = document.getElementById("input-el")
let password_size = inputEl.value
let confirmcopyEl = document.getElementById("confirm_copy")
let newEl = document.getElementById("new")
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let password3El = document.getElementById("password3")
let password4El = document.getElementById("password4")

function getRandomCharacter(){
    return characters[Math.floor(Math.random()*characters.length)]
}

function generatePassword(){
    password_size = inputEl.value
    if (inputEl.value.length === 0){
        password_size = 8; 
    }
    for (let i = 0; i < 4; i++){
        let password = ""
        for (let j = 0; j < password_size; j++){
            password += getRandomCharacter() 
        }
        if (i === 0){
            password1El.textContent = password
            password1El.style.color = "#55F991"
        }else if (i === 1){
            password2El.textContent = password
            password2El.style.color = "#55F991"
        }else if (i === 2){
            password3El.textContent = password
            password3El.style.color = "#55F991"

        }else{
            password4El.textContent = password
            password4El.style.color = "#55F991"
        }
    }
    password1El.style.display = "flex";
    newEl.style.justifyContent = "center";
    confirmcopyEl.textContent = "Click to copy!"
}

function copy1(){
    let text = password1El.textContent
    let inputElement = document.createElement("input")
    inputElement.setAttribute("value", text)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand("copy")
    inputElement.parentNode.removeChild(inputElement)
    confirmcopyEl.textContent = "Copy Success!"
}

function copy2(){
    let text = password2El.textContent
    let inputElement = document.createElement("input")
    inputElement.setAttribute("value", text)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand("copy")
    inputElement.parentNode.removeChild(inputElement)
    confirmcopyEl.textContent = "Copy Success!"
}

function copy3(){
    let text = password3El.textContent
    let inputElement = document.createElement("input")
    inputElement.setAttribute("value", text)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand("copy")
    inputElement.parentNode.removeChild(inputElement)
    confirmcopyEl.textContent = "Copy Success!"
}

function copy4(){
    let text = password4El.textContent
    let inputElement = document.createElement("input")
    inputElement.setAttribute("value", text)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand("copy")
    inputElement.parentNode.removeChild(inputElement)
    confirmcopyEl.textContent = "Copy Success!"
}



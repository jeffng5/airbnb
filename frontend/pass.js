import { Helpers } from './helpers'

// const bcryptjs = require("bcryptjs")

// function getHash() {
// const salt = bcryptjs.genSaltSync(10);
// const hash = bcryptjs.hashSync("bballEverett228", salt);

// console.log(hash)
// }

// getHash()



function matchPassword() {
    let password = document.getElementById('zone').value

  
    let res = Helpers.login(password)
    let token = sessionStorage.getItem('token')
    console.log(token)

    if (token) {
        window.location.href = 'editRes.html'
    }

    else {
        window.location.href = 'index.html'
        return alert("Your password is incorrect. Please return to main screen.")
    }

    
}
let button = document.getElementById('submit-password')

button.addEventListener('click', function (e) { e.preventDefault(); matchPassword(); })
import { Helpers } from './helpers'
import axios from 'axios'





let id = localStorage.getItem('id')
console.log(id)
// let id = JSON.parse(input).idNumber[0].id

async function getResViaId() {

    let res = await Helpers.getReservationViaId(id)
    console.log(res.reservation)

    let ResId = document.getElementById('id')
    ResId.innerText = "Res Id: " + id


    let nameRecord = document.getElementById('name')
    nameRecord.innerText = 'Name: ' +res.reservation[0].firstname+" "+res.reservation[0].lastname
    
    let emailRecord = document.getElementById('email')
    emailRecord.innerText = 'Email: '+res.reservation[0].email
    
    let record = document.getElementById('checkin-ref')
    record.innerText = 'Checkin: ' +res.reservation[0].checkin.slice(0,10)
    let record1 = document.getElementById('checkout-ref')
    record1.innerText = 'Checkout: ' +res.reservation[0].checkout.slice(0,10)

    let record3 = document.getElementById('nightly-rate')
    record3.innerText = 'Nightly Rate: ' + '$175'
}

getResViaId()




// let record2 = document.getElementById('length-of-stay')
// record2.innerText = res


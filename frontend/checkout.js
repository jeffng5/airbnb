import { Helpers } from './helpers'

let id = localStorage.getItem('id')
console.log(id)
// let id = JSON.parse(input).idNumber[0].id

async function getResViaId() {

    let res = await Helpers.getReservationViaId(id)
    console.log(res.reservation)


    let idRes = document.getElementById('id')
    idRes.innerText = 'Res Id: ' + id

    let nameRecord = document.getElementById('firstname')
    nameRecord.innerText = 'First Name: ' + res.reservation[0].firstname

    let lastName = document.getElementById('lastname')
    lastName.innerText = 'Last Name: ' + res.reservation[0].lastname

    let emailRecord = document.getElementById('email')
    emailRecord.innerText = 'Email: ' + res.reservation[0].email

    let record = document.getElementById('checkin-ref')
    record.innerText = 'Checkin: ' + res.reservation[0].checkin.slice(0, 10)
    let record1 = document.getElementById('checkout-ref')
    record1.innerText = 'Checkout: ' + res.reservation[0].checkout.slice(0, 10)

    let record3 = document.getElementById('nightly-rate')
    record3.innerText = 'Nightly Rate: ' + '$175'

    // CONFIRM BOOKING

    function returnToIndexPage() {
        setTimeout(()=>{return alert('Email has been sent. You will be redirected.')}, 500)
        setTimeout(()=> {window.location.href= '/index.html'}, 4000)
    }

    let firstname = res.reservation[0].firstname
    let lastname = res.reservation[0].lastname
    let email = res.reservation[0].email;
    let checkin = res.reservation[0].checkin.slice(0, 10);
    let checkout = res.reservation[0].checkout.slice(0, 10);



    async function confirmBooking() {
        let sendE = await Helpers.sendEmail(id, firstname, lastname, email, checkin, checkout)
        console.log(sendE, 'Email sent')
    }
    let confirmationButton = document.getElementById('confirmation')
    console.log(confirmationButton)
    confirmationButton.addEventListener('click', function (e) { e.preventDefault(); confirmBooking(); returnToIndexPage() })
}


async function deleteReservation() {
    let res = await Helpers.deleteRes(id)
    console.log(res)
    return alert('Your reservation has been deleted')
}
getResViaId();

function returnToReservationPage() {
    window.location.href = '/reservation.html'
}

let button = document.getElementById('delete-reservation')
button.addEventListener('click', function (e) { e.preventDefault(); deleteReservation(); returnToReservationPage() })









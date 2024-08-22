import { Helpers } from './helpers'






async function deleteReservation() {
    const id = document.getElementById('res').value;
    console.log(id);
    let res = await Helpers.deleteRes(id)
    console.log(res)
    return alert('Your reservation has been deleted.');
}

let button = document.getElementById('secret-submit')
console.log(button)
button.addEventListener('click', function(e) {e.preventDefault(); deleteReservation();})
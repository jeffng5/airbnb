import { Helpers } from './helpers'
const STRIPE = process.env.STRIPE


let date = new Date();
console.log(date.getDate())
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
    .querySelector(".calendar-current-date");

const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Function to generate the calendar
const manipulate = () => {

    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();
    console.log(lastdate)
    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variable to store the generated calendar HTML
    let lit = "";

    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {

        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";

        // lit += `<li class="${isToday}" id=${i}>${i}</li>`;
        lit += `<li id=${i}>${i}</li>`
    }

    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;

    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;
}
lookUpAll();
manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

    // When an icon is clicked
    icon.addEventListener("click", () => {

        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Check if the month is out of range
        if (month < 0 || month > 11) {

            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());

            // Set the year to the new year
            year = date.getFullYear();

            // Set the month to the new month
            month = date.getMonth();
        }

        else {

            // Set the date to the current date
            date = new Date();
        }

        // Call the manipulate function to 
        // update the calendar display

        manipulate();
        lookUpAll()
    });
})

async function getValues() {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;




    async function checkForOverlap() {

        let hashMap = {
            'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7,
            'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
        }

        let bookedDate = document.getElementsByClassName('booked');
        console.log('bookedElement:', bookedDate[0].id)
        let currMonth = document.getElementsByTagName('p')[0];
        let currentM = currMonth.innerText.slice(0, -5)
        let currentMonth = hashMap[currentM]
        console.log('month:', currentMonth)
        console.log('checkOverlapMonth:', currentMonth)
        // let reservations = await Helpers.getAllReservations()
        // console.log(reservations)

        if (bookedDate.length >= 1) {
            for (let i = 0; i < bookedDate.length; i++) {

                let bookedDate = document.getElementsByClassName('booked');

                const checkinDateObject = new Date(checkin)

                const checkoutDateObject = new Date(checkout)
                console.log('test:', bookedDate[i].id)
                console.log('debugging2:', checkinDateObject.getDate()+1)

                if ((checkinDateObject.getMonth() + 1) == currentMonth && (checkinDateObject.getDate()+1) == bookedDate[i].id || (checkoutDateObject.getDate()) == bookedDate[i].id) {

                    return console.log('reservation has a conflict')

                }
                else {
                    continue
                }
            }
        }
        
            let res = 'success'
            console.log(res)

            if (res){
              window.location.href='https://buy.stripe.com/test_4gwbKCamL5JR1IAfYZ'
              await Helpers.book(firstname, lastname, email, checkin, checkout)

        }



        // else {
        //     let res = await Helpers.book(firstname, lastname, email, checkin, checkout)
        //     console.log(res)

        //     if (res){
        //         window.location.href='https://buy.stripe.com/test_4gwbKCamL5JR1IAfYZ'
        //       }

        // }

        // }




    }
    checkForOverlap()
    // let res = await Helpers.book(firstname, lastname, email, checkin, checkout)
    // console.log(res)
    // if (res) {
    //     window.location.href = 'https://buy.stripe.com/test_4gwbKCamL5JR1IAfYZ'
    // }
}






async function bookReservation() {
    let button = document.getElementById('reserve')
    console.log(button)
    button.addEventListener('click', function (e) { e.preventDefault(); getValues() })
}

async function lookUpAll() {

    let hashMap = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7,
        'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    }

    let currMonth = document.getElementsByTagName('p')[0];
    let currentM = currMonth.innerText.slice(0, -5)

    let currentMonth = hashMap[currentM]


    console.log('month:', currentMonth)


    let reservations = await Helpers.getReservationForCurrentMonth(currentM)
    console.log(reservations)
    for (let reservation of reservations) {
        const checkinDateObject = new Date(reservation.checkin)
        console.log('check:', checkinDateObject.getMonth() + 1 == currentMonth)
        const checkinDay = checkinDateObject.getDate()
        console.log('checkinDay:', checkinDay)
        const checkoutDateObject = new Date(reservation.checkout)

        const checkoutDay = checkoutDateObject.getDate()
        console.log('checkoutDay:', checkoutDay)




        if (checkoutDateObject.getMonth() + 1 == currentMonth && checkoutDateObject.getMonth() !== checkinDateObject.getMonth()) {
            for (let i = 1; i <= checkoutDay; i++) {

                let reservation = document.getElementById(`${i}`)
                reservation.className = 'booked'
                reservation.style.textDecoration = 'line-through'
                reservation.style.textDecorationThickness = '4px'
                reservation.style.textDecorationColor = 'red'

            }
        }
        if (checkinDateObject.getMonth() + 1 == currentMonth && checkoutDateObject.getMonth() !== checkinDateObject.getMonth()) {
            let year = date.getFullYear();
            let month = date.getMonth();
            console.log(month)
            let lastdate = new Date(year, month + 1, 0).getDate();
            console.log(lastdate)
            let dayend = new Date(year, month, lastdate).getDay();
            console.log("dayend:", dayend)

            if (checkinDay === dayend) {
                let reservation = document.getElementById(`${checkinDay}`)
                reservation.className = 'booked'
                reservation.style.textDecoration = 'line-through'
                reservation.style.textDecorationThickness = '4px'
                reservation.style.textDecorationColor = 'red'

            }

            else {
                for (let i = checkinDay; i <= dayend; i++) {

                    let reservation = document.getElementById(`${i}`)
                    reservation.className = 'booked'
                    reservation.style.textDecoration = 'line-through'
                    reservation.style.textDecorationThickness = '4px'
                    reservation.style.textDecorationColor = 'red'

                }
            }
        }


        if (checkinDateObject.getMonth() + 1 == currentMonth && checkoutDateObject.getMonth() == checkinDateObject.getMonth()) {
            console.log(checkinDateObject.getMonth())
            for (let i = checkinDay; i <= checkoutDay; i++) {
                let reservation = document.getElementById(`${i}`)
                reservation.className = 'booked'
                reservation.style.textDecoration = 'line-through'
                reservation.style.textDecorationThickness = '4px'
                reservation.style.textDecorationColor = 'red'

            }
        }
    }
}

/**
 * 
 * with sql query fake code
 * 
 * select id from reservations where (checkin day >= checkin input day and checkout day <= checkout input day)
 * 
 * or (checkin input day < checkin day and checkout input day > checkout day)
 */

/**
 * Loop through all the reservations
 * see if the checkin and checout date or any days in between from the input are 
 * overlapping with any existing reservations
 * 
 * if so then display an error message for the dates or the form in general to correct it
 * 
 * otherwise submit it
 */


lookUpAll();
bookReservation();

const allReservationData = lookUpAll();


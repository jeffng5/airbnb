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




  

    



// function to book reservation and to check if there is a scheduling conflict
async function getValues() {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;

    // functionto to check for past dates
    async function checkIfPastDate(checkin) {
        //get checkin date from form
    
        //parsing date
        console.log(checkin)
        let date1 = checkin;
        date1 = parseInt(date1.split('-').join(''));
        
        //getting current date
        let date2 = new Date();
        //parsing current date
        
        date2 = parseInt(date2.toISOString().slice(0, 10).replace(/-/g, ""));
        console.log(date2)
        console.log(date1)
        //compare
        if (date1 < date2) {alert('in the past'); 
        
        }
        if (date1 > date2) {
            // take to Stripe payment page
            window.location.href = STRIPE
            // makes reservation
            await Helpers.book(firstname, lastname, email, checkin, checkout)
        }
    
    }

    // check for conflict
    async function checkForOverlap() {
        //hashMap to convert month into integer representation
        let hashMap = {
            'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7,
            'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
        }

        //getting class = 'booked' for dates that are booked
        let bookedDate = document.getElementsByClassName('booked');

        //getting current month literal and year
        let currMonth = document.getElementsByTagName('p')[0];
        //slicing the currMonth to just month
        let currentM = currMonth.innerText.slice(0, -5)
        //using hashMap to get month number
        let currentMonth = hashMap[currentM]
  
     


        // checking that bookedDate has elements
        if (bookedDate.length >= 1) {
            for (let i = 0; i < bookedDate.length; i++) {

                let bookedDate = document.getElementsByClassName('booked');
                //convert checkin date object 
                const checkinDateObject = new Date(checkin)
                //convert checkout date object
                const checkoutDateObject = new Date(checkout)
                console.log('test:', bookedDate[i].id)
                console.log('debugging2:', checkinDateObject.getDate() + 1)

                //logic that if checkin day entered is in the booked class dates || checkout day is ib booked class object
                if ((checkinDateObject.getMonth() + 1) == currentMonth && (checkinDateObject.getDate() + 1) == bookedDate[i].id || checkoutDateObject.getMonth()+1 == currentMonth && (checkoutDateObject.getDate()) == bookedDate[i].id) {
                    // if the day is in booked class, means it has already been reserved
                    return alert('reservation has a conflict')
                    
                }
                else {
                    continue
                }
            }
        }
        //if above function passes and the checkin date is not from past, reservation will book
        checkIfPastDate(checkin)
           
        }
    //calling above function
    checkForOverlap()
}

// function with eventListener to book 
async function bookReservation() {
    let button = document.getElementById('reserve')
    console.log(button)
    button.addEventListener('click', function (e) { e.preventDefault(); getValues() })
}


//this function marks up all the reservations in the database that have been reserved on the calendar
async function lookUpAll() {
    // hashMap to convert literal months to numbers
    let hashMap = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7,
        'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    }

    // grabbing month and year object
    let currMonth = document.getElementsByTagName('p')[0];
    // slicing the object to only get month
    let currentM = currMonth.innerText.slice(0, -5)
    // converting month to number
    let currentMonth = hashMap[currentM]


  

    //gets reservations for current month to be displayed, We only need current month bc each render of the calendar will call a new reservations that will display current months res.
    let reservations = await Helpers.getReservationForCurrentMonth(currentM)
    console.log(reservations)

    //looping thru reservations and setting the necessary objects that will be needed 
    for (let reservation of reservations) {

        // setting checkinDate object 
        const checkinDateObject = new Date(reservation.checkin)
        
        
        // setting day of checkin which will be number 
        const checkinDay = checkinDateObject.getDate()
       

        // setting checkoutDate object
        const checkoutDateObject = new Date(reservation.checkout)

        // setting day of checkout which will be number
        const checkoutDay = checkoutDateObject.getDate()
    

    // Setting up scenarios of the objects which can only be 3 scenarios: 

        // 1st scenario : checkinDate and checkoutDate are not in the same month (edge case) and checkoutDate is currentMonth
        if (checkoutDateObject.getMonth() + 1 == currentMonth && checkoutDateObject.getMonth() !== checkinDateObject.getMonth()) {
            //in 1st scernaio, we would start at 1 and count to checkout day
            for (let i = 1; i <= checkoutDay; i++) {
            
                let reservation = document.getElementById(`${i}`)
                reservation.className = 'booked'
                reservation.style.textDecoration = 'line-through'
                reservation.style.textDecorationThickness = '4px'
                reservation.style.textDecorationColor = 'red'

            }
        }

        // 2nd scenario: checkinDate and checkoutDate is not in the same month (edge case 2) but checkinDate is current month
        if (checkinDateObject.getMonth() + 1 == currentMonth && checkoutDateObject.getMonth() !== checkinDateObject.getMonth()) {

            let date = new Date();
            console.log(date.getDate())
            let year = date.getFullYear();
            let month = date.getMonth();
            console.log(month)
            // finding last day of month
            let lastdate = new Date(year, month + 1, 0).getDate();
            console.log(lastdate)

            // if checkin day is before last day, we start on checkin day and count to last day
            // else {
                for (let i = checkinDay; i <= lastdate; i++) {

                    let reservation = document.getElementById(`${i}`)
                    reservation.className = 'booked'
                    reservation.style.textDecoration = 'line-through'
                    reservation.style.textDecorationThickness = '4px'
                    reservation.style.textDecorationColor = 'red'

                }
            }
        

        // 3rd scenario: (SIMPLEST) checkin day and checkout day is in same month 
        if (checkinDateObject.getMonth() + 1 == currentMonth && checkoutDateObject.getMonth() == checkinDateObject.getMonth()) {
            console.log(checkinDateObject.getMonth())

            // we start at checkin day and count to checkout day
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

lookUpAll();
bookReservation();




function reservationPage() {
const buttons = document.getElementsByTagName('button')
console.log(buttons)
buttons[1].addEventListener('click', function(e) {e.preventDefault();
goToReservation();
})

function goToReservation() {
    window.location.href = "http://127.0.0.1:5500/reservation.html"
}

}

reservationPage()


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      defaultView: 'dayGridMonth',
      headerToolbar: {
        center: 'addEventButton'
      },
      customButtons: {
        addEventButton: {
          text: 'Book',
          click: function() {2024
            var dateStr = prompt('Enter a CHECKIN date in YYYY-MM-DD format');
            var dateStr2 = prompt('Enter a CHECKOUT date in YYYY-MM-DD format')
            console.log(dateStr)
            var date = new Date(dateStr) ; // will be in local time
           
            var endDate = new Date(dateStr2) ;
            console.log(date, endDate)
            if (1===1) { // valid?
              Event.setDates(date,endDate)
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        }
      }
    });
  
    calendar.render();
  });

function showContact() {
    const showAboutButton = document.getElementsByTagName('button')
    console.log(showAboutButton)
    const h1 = document.getElementsByTagName('h1')
    showAboutButton[4].addEventListener('click', function(e) {e.preventDefault(); 
        toggleText() 
  
    })
};

// function addAbout() {    
//     const h1 = document.createElement('h1');
//     document.body.appendChild(h1)
//     h1.classList.add('about')
//     }
   
function toggleText() {
    const about1 = document.getElementsByClassName('form-for-email')
    console.log(about1)
    Array.from(about1).forEach((x) => {
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      })

}

if (typeof document !== 'undefined') {
showContact()
}
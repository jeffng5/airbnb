const galleryArr = [
    'backyard.png', 'bedroom.png', 'bedroom1.png', 'diningroom.png',
    'foyer.png', 'gameroom.png', 'gameroom2.png', 'kitchen.png', 'kitchen-coffee.png', 'livingroom.png', 'patio.png', 'patio1.png'
] 



function createGallery() {
    const h1 = document.createElement("h1");
    h1.innerHTML += 'GALLERY'
    h1.classList.add("gallery")

    for (let ele in galleryArr) {
    const img = document.createElement('img');
    img.setAttribute('src', "./images/" + ele)
    img.classList.add("enlarged") 
    img.innerHTML += 'onclick="toggleEnlarged(this)"'

    }
  }

function toggleEnlarged(img) {
    img.classList.toggle("enlarged");
}
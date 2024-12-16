
const galleryArr = [
    'backyard.jpg', 'bedroom.png', 'bedroom1.png', 'diningroom.png',
    'foyer.png', 'gameroom.png', 'gameroom2.png', 'kitchen.png', 'kitchen-coffee.png', 'livingroom.png', 'patio.png', 'patio1.png'
];


function toggleEnlarged(img) {
    img.classList.toggle("enlarged");
}

function createGallery() {

    const buildGallery = document.getElementsByTagName('button');
    console.log(buildGallery)
    let arr = [...buildGallery];
    galleryArr.forEach(ele => { mountPic(ele) })
    arr[2].addEventListener('click', function (e) { e.preventDefault(); toggleGallery() })
};


function mountPic(imageName) {
    let h2 = document.getElementsByTagName('h2')
    const img = document.createElement('img');
    
    // img.innerHTML += `onclick="toggleEnlarged(img)"`
    // img.src = new URL(`./static/images/${imageName}`, import.meta.url);
    let imageURL = `images/${imageName}`  
    img.src = imageURL
    img.alt = `${imageName}`.slice(0,-4)
    img.classList.add("enlarged")
    img.addEventListener('click', function (e) {
        e.preventDefault();
        toggleEnlarged(img)
    })
    h2[0].appendChild(img)
}


function toggleGallery() {
    const about1 = document.getElementsByClassName('gallery')
    console.log(about1)
    Array.from(about1).forEach((x) => {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

}




createGallery();

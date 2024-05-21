
const galleryArr = [
    'backyard.png', 'bedroom.png', 'bedroom1.png', 'diningroom.png',
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
    const img = document.createElement('img');
    let h2 = document.getElementsByTagName('h2')
    // img.innerHTML += `onclick="toggleEnlarged(img)"`
    img.src = new URL('images/'+ imageName, import.meta.url);
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

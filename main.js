// this is to keep view in mobile cool 'hehe'
document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
});
// 
let images = document.querySelectorAll('.image')

function decrease() {
    images.forEach(image => {
        image.classList.remove('flex6')
    });
}

images.forEach(image => {
    image.addEventListener('click', function () {
        decrease();
        this.classList.add('flex6')
    })
});
for (let i = 0; i < 5; i++) {
    // images[i].style.backgroundImage = "url('images/" + parseInt(i+1) + ".jpg')";
    images[i].style.backgroundImage = `url('images/${parseInt(i+1)}.jpg')`;
    
}
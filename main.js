const hamburger = document.querySelector('.hamburger');
hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    document.querySelector('.popup-menu').classList.toggle('active1');
    document.querySelector('.menu').classList.toggle('active2');
}
const step1 = step1.offsetTop;
var step2 = document.getElementsByClassName('step1-1');
var step2 = document.getElementsByClassName('step1-1');

window.addEventListener('scroll', function () {
    if(window.scrollY >= step1){
        step1.classList.add('visibility: fixed')
    }
})
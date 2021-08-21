const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        document.body.classList.remove('nav-open')
    })
})
/* Mobile menu */

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('show');
    document.body.classList.toggle('stop-scroll');
}

/* About section lateral sliders */

const items = document.querySelectorAll('.about-items');

window.addEventListener('scroll', checkItems);

function checkItems () {
    const triggerBottom = window.innerHeight / 5 * 4

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top
        
        if (itemTop < triggerBottom) {
            item.classList.add('slide-in')
        } else {
            item.classList.remove('slide-in')
        }
        
    }) 
    
}

/* Projects Section */

const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        removeCurrentActives()
        slide.classList.add('active')
    });
});


function removeCurrentActives() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });
};
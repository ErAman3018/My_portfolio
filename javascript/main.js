// ========= Change Background Header==========

const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ============== Services Model ===========
const modalViews = document.querySelectorAll('.services__modal'),
    modalbtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalclick) {
    modalViews[modalclick].classList.add('active-modal')
}

modalbtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})
// ========== Mixitup Filter Portfolio== ===========

let mixerportfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

//----------------- link active work -------------
const linkwork = document.querySelectorAll('.work__item')

function activework() {
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l => l.addEventListener('click', activework))

// =========== Swiper Testimonial =========
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

// ========== Scroll sections Active Link =============
const section = document.querySelectorAll("section[id]");
    
window.addEventListener("scroll", scrollActive)
function scrollActive() {
  	let scrollY = window.pageYOffset;

	section.forEach(current =>{
		const sectionHeight = current.offsetHeight;
		const  sectionTop = current.offsetTop - 45,
			  sectionId = current.getAttribute("id");
			//   sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
		}                                                    
	})
}
// ============ Light Dark Theme ============
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ================= Scroll Reveal Animation ============== 
const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay: 400,
})
sr.reveal(`.home__data`)
sr.reveal(`.home__handle`,{delay:700})
sr.reveal(`.home__social, .home__scroll`,{delay:900,origin:'bottom'})

// Message Sending 
document.querySelector('.contact__form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.init('JmMFSO2jOzlZeZOqS');
    // Use your EmailJS template ID and user ID
    emailjs.sendForm('service_5aycajp', 'template_v4u3k2d', this)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Error sending message:', error);
        });
});
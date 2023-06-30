// MOBILE NAV
$(document).ready(function () {
    $('.button1').click(function () {
        $('.mobile_nav').toggleClass('active')
        $('.button1').toggleClass('btn')
    })
})

// Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section id="footer">
        <div class="footer-main">
            <div class="logos">
                <a href="https://github.com/kpham841" target="_blank" aria-label="GitHub">
                    <box-icon type='logo' name='github' color='white' size='30px'></box-icon>
                </a>
                <a href="https://www.linkedin.com/in/kpham841/" target="_blank" aria-label="LinkedIn">
                    <box-icon type='logo' name='linkedin-square' color='white' size='30px'></box-icon>
                </a>
                <a href="mailto:khiempham841@gmail.com" aria-label="Email">
                    <box-icon type='solid' name='envelope' color='white' size='30px'></box-icon>
                </a>
            </div>
            <div class="caption">
                <p>Designed & Built by Khiem Pham</p>
            </div>
        </div>
    </section>`;
  }
}
    
customElements.define('footer-main', Footer);

// Hide navbar when scrolling down
let prevScrollpos = window.scrollY
document.onscroll = function () {
    let currentScrollPos = window.scrollY
    // If scrolling up
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.nav-bar').style.top = '0'
        // If scrolling down
    } else {
        document.querySelector('.nav-bar').style.top = '-100px'
    }
    prevScrollpos = currentScrollPos
}

// Modal
// create references to the modal...
let modal = document.getElementById('myModal')
// to all images -- note I'm using a class!
let images = document.getElementsByClassName('cs-pic')

// the image in the modal
let modalImg = document.getElementById('img01')
// and the caption in the modal
let captionText = document.getElementById('caption')

// Go through all of the images with our custom class
for (let i = 0; i < images.length; i++) {
    let img = images[i]
    // and attach our click listener for this image.
    img.onclick = function (e) {
        modal.style.display = 'block'
        modalImg.src = this.src
        captionText.innerHTML = this.alt
    }
}

let span = document.getElementsByClassName('close')[0]

span.onclick = function () {
    modal.style.display = 'none'
}

// SCROLL UP BUTTON
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = 'block'
    } else {
        mybutton.style.display = 'none'
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

// Invalid Form
function isValidForm() {
    let status = document.getElementById('status')
    if (
        document.getElementById('name').value == '' ||
        document.getElementById('email').value == '' ||
        document.getElementById('message').value == ''
    ) {
        alert('Please fill in all empty fields.')
        return false
    } else {
        return true
    }
}

// Form
let form = document.getElementById('my-form')

async function handleSubmit(event) {
    event.preventDefault()
    let status = document.getElementById('status')
    let data = new FormData(event.target)
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => {
            status.classList.add('success')
            status.innerHTML = 'Successfully Submitted'
            form.reset()
        })
        .catch((error) => {
            status.classList.add('error')
            status.innerHTML = 'Error submitting'
        })
}
form.addEventListener('submit', handleSubmit)

// Scroll Animations
const scrollElements = document.querySelectorAll('.js-scroll')

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    )
}

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top

    return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
    )
}

const displayScrollElement = (element) => {
    element.classList.add('scrolled')
}

const hideScrollElement = (element) => {
    element.classList.remove('scrolled')
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el)
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation()
})

// When checkbox is unchecked, hide the elements with class "web-dev"
function filterProj() {
    // check if any checkbox is checked
    let checked = document.querySelectorAll('input[type=checkbox]:checked')
    if (checked.length !== 0) {
        let projContainer = document.getElementsByClassName(
            'grid-container-projects'
        )
        projContainer[0].style.display = 'grid'

        let p1 = document.querySelector('h3')
        if (p1) {
            p1.remove()
        }

        let img1 = document.getElementById('dog')
        if (img1) {
            img1.remove()
        }

        // check if element is checked
        let checkWeb = document.getElementById('filter-web')
        let checkUiux = document.getElementById('filter-uiux')
        let checkOther = document.getElementById('filter-other')

        let webDev = document.querySelectorAll('.proj-webdev')
        let uiUx = document.querySelectorAll('.proj-uiux')
        let other = document.querySelectorAll('.proj-other')

        if (checkWeb.checked) {
            webDev.forEach((el) => {
                el.style.display = 'block'
            })
        } else {
            webDev.forEach((el) => {
                el.style.display = 'none'
            })
        }
        if (checkUiux.checked) {
            uiUx.forEach((el) => {
                el.style.display = 'block'
            })
        } else {
            uiUx.forEach((el) => {
                el.style.display = 'none'
            })
        }
        if (checkOther.checked) {
            other.forEach((el) => {
                el.style.display = 'block'
            })
        } else {
            other.forEach((el) => {
                el.style.display = 'none'
            })
        }
    } else {
        let projContainer = document.getElementsByClassName(
            'grid-container-projects'
        )
        projContainer[0].style.display = 'none'

        // Insert p element
        let p1 = document.createElement('h3')
        p1.style.textAlign = 'center'
        p1.style.color = '#000000'
        p1.style.fontFamily = 'Montserrat'
        p1.style.marginTop = '50px'
        p1.style.marginBottom = '20px'
        p1.innerHTML = "Congrats, you hid all my projects! Here's a cute dog"

        // Insert image element
        let dogImg = document.createElement('img')
        dogImg.id = 'dog'
        dogImg.src = 'https://media.tenor.com/_4xCiEhhoZsAAAAM/dog-smile.gif'
        dogImg.alt = 'dog'
        dogImg.style.width = '300px'
        dogImg.style.objectPosition = 'center'
        dogImg.style.borderRadius = '10px'
        dogImg.style.margin = '0 auto'
        dogImg.style.display = 'block'

        document.getElementsByClassName('main-containerProj')[1].appendChild(p1)
        document
            .getElementsByClassName('main-containerProj')[1]
            .appendChild(dogImg)
    }
}

document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((el) => el.addEventListener('change', filterProj))

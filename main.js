// MOBILE NAV
$(document).ready(function () {
  $('.button1').click(function () {
    $('.mobile_nav').toggleClass('active')
    $('.button1').toggleClass('btn')
  })
})


// SCROLL UP BUTTON
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// Invalid Form
function isValidForm () {
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

async function handleSubmit (event) {
  event.preventDefault()
  let status = document.getElementById('status')
  let data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => {
      status.classList.add('success')
      status.innerHTML = 'Successfully Submitted'
      form.reset()
    })
    .catch(error => {
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

const elementOutofView = el => {
  const elementTop = el.getBoundingClientRect().top

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  )
}

const displayScrollElement = element => {
  element.classList.add('scrolled')
}

const hideScrollElement = element => {
  element.classList.remove('scrolled')
}

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
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

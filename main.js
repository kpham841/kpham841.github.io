// MOBILE NAV
$(document).ready(function () {
  $('.button1').click(function () {
    $('.mobile_nav').toggleClass('active')
    $('.button1').toggleClass('btn')
  })
})

// SCROLL UP BUTTON
var mybutton = document.getElementById('myBtn')

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
  var status = document.getElementById('status')
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
var form = document.getElementById('my-form')

async function handleSubmit (event) {
  event.preventDefault()
  var status = document.getElementById('status')
  var data = new FormData(event.target)
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

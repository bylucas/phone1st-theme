//form

const form = document.querySelector(".signup-form")
//const username = document.querySelector('#username'); alternative
const feedback = document.querySelector(".feedback")
const usernamePattern = /^[a-zA-Z]{6,12}$/
//contain only letters & be between 6 & 12 characters

// validation
form.addEventListener("submit", (e) => {
  //prevent default action - refresh page
  e.preventDefault()

  //dot notation
  const username = form.username.value

  if (usernamePattern.test(username)) {
    feedback.textContent = "that username is valid!"
  } else {
    feedback.textContent =
      "username must contain only letters & be between 6 & 12 characters"
  }
})

// live feedback
form.username.addEventListener("keyup", (e) => {
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success")
  } else {
    form.username.setAttribute("class", "error")
  }
})

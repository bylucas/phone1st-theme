//change theme to dark mode
const changeTheme = document.getElementById('toggle')
const Body = document.querySelector('body')

changeTheme.addEventListener('click', () => {
  Body.classList.toggle('inverted')
})
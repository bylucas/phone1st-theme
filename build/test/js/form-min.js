const form=document.querySelector(".signup-form"),feedback=document.querySelector(".feedback"),usernamePattern=/^[a-zA-Z]{6,12}$/;form.addEventListener("submit",(e=>{e.preventDefault();const t=form.username.value;usernamePattern.test(t)?feedback.textContent="that username is valid!":feedback.textContent="username must contain only letters & be between 6 & 12 characters"})),form.username.addEventListener("keyup",(e=>{usernamePattern.test(e.target.value)?form.username.setAttribute("class","success"):form.username.setAttribute("class","error")}));
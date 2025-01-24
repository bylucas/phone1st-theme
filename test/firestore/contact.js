//Contact Form
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { db } from "./firestore-config.js";

// collection ref
const colRef = collection(db, "contacts");

const form = document.querySelector(".contact-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      feedback.style.display = "block";
      setTimeout(() => {
        (feedback.style.display = "none"), form.reset();
      }, 3000);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

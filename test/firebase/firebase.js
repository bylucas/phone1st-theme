import { formatDistanceToNow } from "date-fns"


import {
  collection,
  addDoc,
  //getDocs, - using onSnapshot
  onSnapshot,
  doc,
  deleteDoc,
  serverTimestamp,
  query,
  where,
  orderBy
} from "firebase/firestore"

import { db } from "./firebase-config.js"

// collection ref
const colRef = collection(db, "contacts")

const addContactForm = document.querySelector(".contact-form")
const feedback = document.querySelector(".feedback")
const contactList = document.querySelector(".showcontacts")


//queries
const q = query(
  colRef,
  orderBy('createdAt')
)

//realtime collection data
onSnapshot(q, (snapshot) => {
  let contacts = []
  snapshot.docs.forEach(doc => {
    doc.data().createdAt && contacts.push({ ...doc.data(), id: doc.id })
  })

  contacts.forEach(contact => {

    const time = formatDistanceToNow(contact.createdAt.toDate(), { addSuffix:true })

    let html = `<div data-id="${contact.id}">
    <h3>${contact.name}</h3>
    <p>${contact.email}</p>
    <p>${time}</p>
    </div>`
    contactList.innerHTML += html
})

//adding docs
  addContactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
      name: addContactForm.name.value,
      email: addContactForm.email.value,
      createdAt: serverTimestamp(),
    }).then(() => {
      feedback.style.display = 'block'

      setTimeout(() => {
  feedback.style.display = 'none',
  addContactForm.reset()
  }, 5000 )
    })
    .catch(err => {
      console.log(err.message)
    })
  })

//Deleting Docs
  contactList.addEventListener('click', (e) => {
    if (e.target.tagName === "H3") {
      const id = e.target.parentElement.getAttribute( 'data-id')
      const docRef = doc(db, 'contacts', id)
      deleteDoc(docRef)
    }
  })
})

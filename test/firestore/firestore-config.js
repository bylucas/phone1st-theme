import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBgOheePCJqT_ivlXs_EagQ3wQPGIMpJUg",
  authDomain: "howardlucas-7fcb0.firebaseapp.com",
  projectId: "howardlucas-7fcb0",
  storageBucket: "howardlucas-7fcb0.appspot.com",
  messagingSenderId: "945745527827",
  appId: "1:945745527827:web:3e282534ecdd22c66eabe6",
  measurementId: "G-QEE9Y648VB"
}

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()

// export firestore
export { db }
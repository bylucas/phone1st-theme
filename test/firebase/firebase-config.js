import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
 
}

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()

// export firestore
export { db }

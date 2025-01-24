//example Firestore Config File

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Your Firebase Settings
const firebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxxx",
  measurementId: "xxxxx",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();

// export firestore
export { db };

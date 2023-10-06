import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyApX1tiWOR3vvwItUHJrtjXgspQHLM6THo",
  authDomain: "makeupholicok.firebaseapp.com",
  projectId: "makeupholicok",
  storageBucket: "makeupholicok.appspot.com",
  messagingSenderId: "919134642637",
  appId: "1:919134642637:web:431918512fb30120182484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
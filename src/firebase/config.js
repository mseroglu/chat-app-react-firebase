import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

console.log(import.meta.env.VITE_API_KEY)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_KEY,
  projectId: "react-firebase-34bc1",
  storageBucket: "react-firebase-34bc1.appspot.com",
  messagingSenderId: "304544753912",
  appId: "1:304544753912:web:91609f05cffdc2d119730d",
  measurementId: "G-KCB7PHN6ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinini refaransını al
export const auth = getAuth(app)

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider()

// veritabanı referansını al
export const db = getFirestore(app)


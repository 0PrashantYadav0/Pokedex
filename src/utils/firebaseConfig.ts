import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: String(process.env.VITE_APP_APIKEY),
  authDomain: String(process.env.VITE_APP_AUTHDOMAIN),
  projectId: String(process.env.VITE_APP_PROJECTID),
  storageBucket: String(process.env.VITE_APP_STORAGEBUCKET),
  messagingSenderId: String(process.env.VITE_APP_MESSAGINGSENDINGID),
  appId: String(process.env.VITE_APP_APPID)
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");

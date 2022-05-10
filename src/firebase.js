import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5DcneOSaSLnrJnsKa4nVkX991KumFg8c",
  authDomain: "tech-sarthi.firebaseapp.com",
  projectId: "tech-sarthi",
  storageBucket: "tech-sarthi.appspot.com",
  messagingSenderId: "488395304907",
  appId: "1:488395304907:web:3e04bb56ef093d847e104e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCp9OjHCjj3n_NzYluKelfidhVvbsyoHz8",
  authDomain: "fir-tutorial-85fec.firebaseapp.com",
  projectId: "fir-tutorial-85fec",
  storageBucket: "fir-tutorial-85fec.appspot.com",
  messagingSenderId: "815132472538",
  appId: "1:815132472538:web:75e2d3b0ab96defc1be1e3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
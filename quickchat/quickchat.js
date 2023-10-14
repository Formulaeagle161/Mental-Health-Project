import { initializeApp } from "firebase/app";
import { onValue, set, ref, getDatabase, DataSnapshot } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDn4aqiCGJ83hcbhmOyVFwVuP91whsUKiU",
  authDomain: "mental-health-project-ae746.firebaseapp.com",
  databaseURL: "https://mental-health-project-ae746-default-rtdb.firebaseio.com",
  projectId: "mental-health-project-ae746",
  storageBucket: "mental-health-project-ae746.appspot.com",
  messagingSenderId: "804064066611",
  appId: "1:804064066611:web:5af95c6139f37f30b83746",
  measurementId: "G-X4FH6RXELF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

let counselors;

onValue(ref(db,'counselors'),(snapshot)=>{
  counselors = snapshot.val()
})

function counseleeInit(){

}

function counselorInit(){
  let key = prompt("Enter your counselor password: ")
   
  
}
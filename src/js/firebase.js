// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: 'AIzaSyDpHH4vTWioKzjyjXO2I80-uE6v02JiNMc',
  authDomain: 'filmoteka-students-goit.firebaseapp.com',
  projectId: 'filmoteka-students-goit',
  storageBucket: 'filmoteka-students-goit.appspot.com',
  messagingSenderId: '474370553773',
  appId: '1:474370553773:web:273214bc0fea8263371324',
  measurementId: 'G-8CJGR7QN75',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init service

const db = getFirestore();

// collection ref

const colsUserQueue = collection(
  db,
  '/users/8ilq1ie9JzHhyWmLzuNF/aaaa@gmail.com'
);
// get collection data

let users = [];
let data;
async function getItems(name) {
  const colsUserRef = collection(db, `${name}`);
  const supaData = await getDocs(colsUserRef)
    .then(snapshot => {
      snapshot.docs.forEach(user => {
        users.push({ ...user.data() });
      });
      console.log(users);
      console.log(users[0]);
      data = users[0];
      let { queue, watched } = data;
      console.log(queue);
      console.log(watched);
      queue.map(que => console.log(que));
      // Пиши код нижче, залежно, що тобі потрібно. Або черга(queue), або переглянуті(watched)
    })
    .catch(err => {
      console.log(err.message);
    });
}

// Можна прибрати конст, залишити функцію, звертатись за імЯм яке потім буде обробляти інформацію
const dataUser = getItems('vasya');
// ЯКЩО ПОВЕРТАЄ ПРОМІС, МОЖЕ ЗВЕРНУТИСЬ ДО НЬОГО, ЯК ДО ПРОМІСА
console.log(dataUser);

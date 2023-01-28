// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  addDoc,
  deleteDoc,
  arrayUnion,
  updateDoc,
  arrayRemove,
} from 'firebase/firestore';
import { Notify } from 'notiflix';

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

// Потрібні змінні, в яких будух читання або витягнення відповідної інформації

let id = 545611;

export async function getQueueItem(name) {
  const colsUserRef = collection(db, `${name}`);
  let users = [];
  let data;

  await getDocs(colsUserRef)
    .then(snapshot => {
      snapshot.docs.forEach(user => {
        users.push({ ...user.data() });
      });
      console.log(users);
      console.log(users[0]);
      data = users[0];
      let { queue, watched } = data;
      console.log(queue);

      for (let i = 0; i < queue.length; i += 1) {
        // console.log(queue[i]);
        const objParse = JSON.parse(queue[i]);
        const needType = objParse.id;
        if (needType == id) {
          // ТОДІ МАЛЮЄМО КАРТОЧКУ ТУТ
          // console.log('Yes');
        }
        // Тоді нічого не малюємо
        // console.log('no');
      }
    })
    .catch(err => {
      console.log(err.message);
    });
}

// Можна прибрати конст, залишити функцію, звертатись за імЯм яке потім буде обробляти інформацію
// ЯКЩО ПОВЕРТАЄ ПРОМІС, МОЖЕ ЗВЕРНУТИСЬ ДО НЬОГО, ЯК ДО ПРОМІСА

export async function getWatchedItem(name) {
  const colsUserRef = collection(db, `${name}`);
  let users = [];
  let data2;
  // type ID should be "NUMBER"

  await getDocs(colsUserRef)
    .then(snapshot => {
      snapshot.docs.forEach(user => {
        users.push({ ...user.data() });
      });
      console.log(users);
      console.log(users[0]);
      data2 = users[0];
      let { queue, watched } = data2;
      console.log(watched);

      for (let i = 0; i < watched.length; i += 1) {
        // console.log(watched[i]);
        const objParse2 = JSON.parse(watched[i]);
        const needType2 = objParse2.id;
        if (needType2 == id) {
          // ТОДІ МАЛЮЄМО КАРТОЧКУ ТУТ
          // console.log('Yes');
        }
        // Тоді нічого не малюємо
        // console.log('no');
      }
    })
    .catch(err => {
      console.log(err.message);
    });
}

export async function getWatchedItemAll(name) {
  const colsUserRef = collection(db, `${name}`);
  let users = [];
  let data2;
  // type ID should be "NUMBER"

  await getDocs(colsUserRef)
    .then(snapshot => {
      snapshot.docs.forEach(user => {
        users.push({ ...user.data() });
      });
      console.log(users);
      console.log(users[0]);
      data2 = users[0];
      let { queue, watched } = data2;
      console.log(watched);
    })
    .catch(err => {
      console.log(err.message);
    });
}

export async function getQueueItemAll(name) {
  const colsUserRef = collection(db, `${name}`);
  let users = [];
  let data2;
  // type ID should be "NUMBER"

  await getDocs(colsUserRef)
    .then(snapshot => {
      snapshot.docs.forEach(user => {
        users.push({ ...user.data() });
      });
      console.log(users);
      console.log(users[0]);
      data2 = users[0];
      let { queue, watched } = data2;
      console.log(queue);
    })
    .catch(err => {
      console.log(err.message);
    });
}

// Create Data

// const addWatchedBtn = document.querySelector('.add-watched');
// const delWatchedBtn = document.querySelector('.del-watched');
// const addQueueBtn = document.querySelector('.add-queue');
// const delQueueBtn = document.querySelector('.del-queue');

// addWatchedBtn.addEventListener('click', OnAddWatched(e));
// delWatchedBtn.addEventListener('click', OnDelWatched(e));
// addQueueBtn.addEventListener('click', OnAddQueue(e));
// delQueueBtn.addEventListener('click', OnDelQueue(e));
let name = 'vasya';

const ObjectData = {
  watched: [
    {
      adult: false,
      backdrop_path: '/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
      id: 505642,
    },
    {
      original_title: 'Devotion',
      overview:
        "The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",
    },
  ],
};

function OnAddWatched() {
  const newWatchedRef = doc(db, name, 'watched');
  const colRef = collection(db, 'vasya');
  setDoc(newWatchedRef, ObjectData, { merge: true })
    .then(() => {
      // console.log(colRef.id);
      Notify.success('Video added to your "watched" list');
    })
    .catch(err => Notify.failure(err.message));
  // addDoc(colRef, {
  //   Or u can create Ur specific object
  // })
}

OnAddWatched();

function OnDelWatched(e) {
  e.preventDefault();

  const docRef = doc(db, name, id);

  deleteDoc(docRef).then(() => {
    Notify.info(`Video remove from "Watched" list`);
  });
}

function OnAddQueue(e) {
  e.preventDefault();
}

function OnDelQueue(e) {
  e.preventDefault();
}

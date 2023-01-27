import { initializeApp } from 'firebase/app';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDpHH4vTWioKzjyjXO2I80-uE6v02JiNMc',
  authDomain: 'filmoteka-students-goit.firebaseapp.com',
  projectId: 'filmoteka-students-goit',
  storageBucket: 'filmoteka-students-goit.appspot.com',
  messagingSenderId: '474370553773',
  appId: '1:474370553773:web:273214bc0fea8263371324',
  measurementId: 'G-8CJGR7QN75',
};

initializeApp(firebaseConfig);

const authDb = getFirestore();
const auth = getAuth();
let name;
let currentUser;

const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.registration-form');
const logout = document.querySelector('.logout-btn');

signupForm.addEventListener('submit', e => {
  e.preventDefault();

  name = signupForm.user_name.value;
  const email = signupForm.mail.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      // Бажано сюди впихнути НЕТЛІФАЙ
      Notify.success(`The user: ${cred.user} has been created`);
      signupForm.reset();
    })
    .catch(err => {
      // netlify wrongs
      Notify.failure(err.message);
    });

  // СТВОРИТИ в БД по НЕЙМ БАЗУ ДАННИх, яка буде слідкувати за списками
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm.mail.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      Notify.success(`user logged in: ${cred.user}`);
    })
    .catch(err => {
      Notify.failure(err.message);
    });
});

logout.addEventListener('click', e => {
  signOut(auth)
    .then(() => {
      Notify.success(`The user ${name} signed out`);
    })
    .catch(err => {
      Notify.failure(err.message);
    });
});

onAuthStateChanged(auth, user => {
  currentUser = user.d.email;
  console.log(currentUser);
});

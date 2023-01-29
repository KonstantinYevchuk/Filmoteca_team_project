import { initializeApp } from 'firebase/app';
import { Notify } from 'notiflix';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

// Firebase AUTH

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
const db = getFirestore();

const auth = getAuth();
let name;
let currentUser;

const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.registration-form');
const logout = document.querySelector('.js-btn-exit');

signupForm.addEventListener('submit', e => {
  e.preventDefault();

  name = signupForm.user_name.value;
  const email = signupForm.mail.value;
  const password = signupForm.password.value;

  const ObjectDataName = {
    name: `${name}`,
  };

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      // Бажано сюди впихнути НЕТЛІФАЙ
      Notify.success(`The user: ${name} has been created`);
      signupForm.reset();
    })
    .catch(err => {
      // netlify wrongs
      Notify.failure(err.message);
    });

  // СТВОРИТИ в БД по НЕЙМ БАЗУ ДАННИх, яка буде слідкувати за списками
  const newUserRef = doc(db, email, 'username');
  setDoc(newUserRef, ObjectDataName, { merge: true }).catch(err =>
    Notify.failure(err.message)
  );
  // addDoc(colRef, {
  //   Or u can create Ur specific object
  // })
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm.mail.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      Notify.success(`user logged in: ${name}`);
      const userIconName = document.querySelector('');
    })
    .catch(err => {
      Notify.failure(err.message);
    });
});

logout.addEventListener('click', e => {
  signOut(auth)
    .then(() => {
      Notify.info(`The user ${name} signed out`);
    })
    .catch(err => {
      Notify.failure(err.message);
    });
});

const userLoginIcon = document.querySelector('js-btn-in');
const userLogoutIcon = document.querySelector('js-btn-exit');

onAuthStateChanged(auth, user => {
  currentUser = user.email;
  console.log(currentUser);
  console.log(user);
  return user.isAnonymous;
});




const loginFormBtn = document.querySelector('#data-formBtn-login');
const regFormBtn = document.querySelector('#data-formBtn-reg');
const logForm = document.querySelector('#data-login-box');
const regForm = document.querySelector('#data-reg-box');
loginFormBtn.addEventListener('click', e => {
  logForm.classList.add('current');
  regForm.classList.remove('current');
  loginFormBtn.classList.toggle('target-btn');
  regFormBtn.classList.toggle('target-btn');
});
regFormBtn.addEventListener('click', e => {
  regForm.classList.add('current');
  logForm.classList.remove('current');
  loginFormBtn.classList.toggle('target-btn');
  regFormBtn.classList.toggle('target-btn');
});

// function onFormToggle(add, rev) {
//   console.log('HELLOO');
//   add.classList.add('current');
//   rev.classList.remove('current');
//   loginFormBtn.classList.toggle('target-btn');
//   regFormBtn.classList.toggle('target-btn');
// }
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  fetchSignInMethodsForEmail,
  getAuth,
  getUserByEmail,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  addDoc,
  onSnapshot,
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
const auth = getAuth();

// Ready exports
// РОБЛЮ ПО НОВОМУ

// ДОДАЄ КАРТОЧКУ В БД КОРИСТУВАЧА

export async function createNewQueueDataItem(idObj, addObj) {
  // id фільма, якого додаєте в БД
  const id = idObj;
  // newObjectForExample { ОБ'ЄКТ } фільма який додаєте в БД
  const newObjectForExample = addObj;

  // Дістає мило користувача за яким шукає в БД
  const userData = getAuth().onAuthStateChanged(user => {
    if (user) {
      const userMail = user.email;

      //getItemsFromList дістає всі дані, що записані у користувача
      const queueList = getItemsFromQueueList(userMail, 'queue')
        .then(async dataList => {
          console.log(dataList);

          // Перевірка масиву чи він пустий
          if (dataList.queue[0] == undefined) {
            // якщо пустий відразу додає об'єкт фільма
            dataList.queue[0] = newObjectForExample;
          } else {
            // Якщо не пустий, то перебирай весь масив об'єктів, перевіряє айдішники фільма що додається
            if (!dataList.queue.find(obj => obj.id === id)) {
              // якщо не знаходить, то додає об'єкт фільма у масив даних
              dataList.queue.push(newObjectForExample);
            }
          }
          // Це проміс, тому потрібно повернути щось конкретне для слідуючого зена
          return dataList;
        })
        .then(async newDataList => {
          console.log(newDataList);
          // newDataList це новий масив, який буде перезаписуватися на БД
          const mergeNewQueueData = await OnAddObj(
            userMail,
            newDataList,
            'queue'
          );
        });
    } else {
      Notify.info('You need to log in');
    }
  });
}

async function OnAddObj(userMail, data, list) {
  const newQueueRef = doc(db, userMail, list);
  const data2 = data;
  console.log(data2);
  const result = await setDoc(newQueueRef, data2, { merge: true })
    .then(() => {
      Notify.success('Video added to your "watched" list');
    })
    .catch(err => Notify.failure(err.message));
  return result;
}

// async function getItemsFromList(userMail, list) {
//   const docRef = doc(db, userMail, list);
//   const docSnap = await getDoc(docRef);
//   const objectsArray = { queue: [] };
//   if (docSnap.exists()) {
//     docSnap.data().queue.map(obj => {
//       objectsArray.queue.push(obj);
//     });
//     // console.log(docSnap.data());

//     // console.log(objectsArray);
//     return objectsArray;
//   }
//   return objectsArray;
// }

// ДОДАЄ ФІЛЬМ В ПЕРЕГЛЯНУТИх

export async function createNewWatchedDataItem(idObj, addObj) {
  // id фільма, якого додаєте в БД
  const id = idObj;
  // newObjectForExample { ОБ'ЄКТ } фільма який додаєте в БД
  const newObjectForExample = addObj;

  // Дістає мило користувача за яким шукає в БД
  const userData = getAuth().onAuthStateChanged(user => {
    if (user) {
      const userMail = user.email;

      //getItemsFromList дістає всі дані, що записані у користувача
      const queueList = getItemsFromWatchedList(userMail, 'watched')
        .then(async dataList => {
          console.log(dataList);

          // Перевірка масиву чи він пустий
          if (dataList.watched[0] == undefined) {
            // якщо пустий відразу додає об'єкт фільма
            dataList.watched[0] = newObjectForExample;
          } else {
            // Якщо не пустий, то перебирай весь масив об'єктів, перевіряє айдішники фільма що додається
            if (!dataList.watched.find(obj => obj.id === id)) {
              // якщо не знаходить, то додає об'єкт фільма у масив даних
              dataList.watched.push(newObjectForExample);
            }
          }
          // Це проміс, тому потрібно повернути щось конкретне для слідуючого зена
          return dataList;
        })
        .then(async newDataList => {
          console.log(newDataList);
          // newDataList це новий масив, який буде перезаписуватися на БД
          const mergeNewQueueData = await OnAddObj(
            userMail,
            newDataList,
            'watched'
          );
        });
    } else {
      Notify.info('You need to log in');
    }
  });
}

async function getItemsFromQueueList(userMail, list) {
  const docRef = doc(db, userMail, list);
  const docSnap = await getDoc(docRef);
  const objectsArray = { queue: [] };
  if (docSnap.exists()) {
    // console.log(docSnap.data());
    if (docSnap.data().queue === undefined) {
      return objectsArray;
    } else {
      docSnap.data().queue.map(obj => {
        objectsArray.queue.push(obj);
      });
      return objectsArray;
    }
  }
  return objectsArray;
}

async function getItemsFromWatchedList(userMail, list) {
  const docRef = doc(db, userMail, list);
  const docSnap = await getDoc(docRef);
  const objectsArray = { watched: [] };
  if (docSnap.exists()) {
    // console.log(docSnap.data());
    if (docSnap.data().watched === undefined) {
      return objectsArray;
    } else {
      docSnap.data().watched.map(obj => {
        objectsArray.watched.push(obj);
      });
      return objectsArray;
    }
  }
  return objectsArray;
}

// ВИДАЛЯЄ ФІЛЬМ З БД КОРИСТУВАЧА

export async function deleteWatchedDataItem(idObj, addObj) {
  // id фільма, якого видаляєте в БД
  const id = idObj;
  // newObjectForExample { ОБ'ЄКТ } фільма який видаляєте в БД
  const newObjectForExample = addObj;

  // Дістає мило користувача за яким шукає в БД
  const userData = getAuth().onAuthStateChanged(user => {
    if (user) {
      const userMail = user.email;

      //getItemsFromList дістає всі дані, що записані у користувача
      const queueList = getItemsFromWatchedList(userMail, 'watched')
        .then(async dataList => {
          // console.log(dataList);
          // Перевірка масиву чи він пустий
          if (dataList.watched[0] == undefined) {
            // якщо знаходить, то потрібно видалити об'єкт фільма з масива даних
            // Це проміс, тому потрібно повернути щось конкретне для слідуючого зена
            return dataList;
          } else {
            for (let i = 0; i < dataList.watched.length; i += 1) {
              if (dataList.watched[i].id === id) {
                dataList.watched.splice(i, 1);
                // console.log(dataList);
                return dataList;
              }
            }
          }
        })
        .then(async newDataList => {
          // console.log(newDataList);
          // newDataList це новий масив, який буде перезаписуватися на БД
          const mergeNewQueueData = await OnAddObj(
            userMail,
            newDataList,
            'watched'
          );
        });
    } else {
      Notify.info('You need to log in');
    }
  });
}

export async function deleteQueueDataItem(idObj, addObj) {
  // id фільма, якого видаляєте в БД
  const id = idObj;
  // newObjectForExample { ОБ'ЄКТ } фільма який видаляєте в БД
  const newObjectForExample = addObj;

  // Дістає мило користувача за яким шукає в БД
  const userData = getAuth().onAuthStateChanged(user => {
    if (user) {
      const userMail = user.email;

      //getItemsFromList дістає всі дані, що записані у користувача
      const queueList = getItemsFromQueueList(userMail, 'queue')
        .then(async dataList => {
          // Перевірка масиву чи він пустий
          if (dataList.queue[0] == undefined) {
            // якщо знаходить, то потрібно видалити об'єкт фільма з масива даних
            // Це проміс, тому потрібно повернути щось конкретне для слідуючого зена
            return dataList;
          } else {
            for (let i = 0; i < dataList.queue.length; i += 1) {
              if (dataList.queue[i].id === id) {
                dataList.queue.splice(i, 1);
                return dataList;
              }
            }
          }
        })
        .then(async newDataList => {
          // newDataList це новий масив, який буде перезаписуватися на БД
          const mergeNewQueueData = await OnAddObj(
            userMail,
            newDataList,
            'queue'
          );
        });
    } else {
      Notify.info('You need to log in');
    }
  });
}

// Живу сторінку потрібно доробити, без допомоги ніяк не обійтись. Не я ж малюю)

// async function realDBQueueItems() {
//   const userData = getAuth().onAuthStateChanged(user => {
//     if (user) {
//       // тут вже пишемо методи, які беруть або створюють дату з фаєрбейса

//       const userMail = user.email;
//       const colRealRef = collection(db, userMail);

//       onSnapshot(colRealRef, snapshot => {
//         let user = [];
//         snapshot.docs.forEach(doc => {
//           user.push({ ...doc.data() });
//         });
//         console.log(user);
//       });
//     }
//   });
// }

// realDBQueueItems();

// Real time collection data

// const colRealRef = collection(db, userMail);

// onSnapshot(colRealRef, snapshot => {
//   let user = [];
//   snapshot.docs.forEach(doc => {
//     user.push({ ...doc.data() });
//   });
//   console.log(user);
// });

export async function checker(idItem, watchBtn, queueBtn) {
  const userData = getAuth().onAuthStateChanged(user => {
    if (user) {
      const userMail = user.email;

      const docRealRef = collection(db, userMail);

      onSnapshot(docRealRef, snapshot => {
        let user = [];

        snapshot.docs.forEach(doc => {
          user.push({ ...doc.data() });
        });

        let [queue, watched] = user;
        if (queue.queue.find(film => film.id === idItem)) {
          queueBtn.classList.add('button__accent');
          queueBtn.textContent = 'Remove from queue';
        } else {
          queueBtn.textContent = 'Add to queue';
          queueBtn.classList.remove('button__accent');
        }

        if (watched.watched.find(film => film.id === idItem)) {
          watchBtn.classList.add('button__accent');
          watchBtn.textContent = 'Remove from watched';
        } else {
          watchBtn.textContent = 'Add to watched';
          watchBtn.classList.remove('button__accent');
        }
      });
    }
  });
}

async function markUpWatched(idItem, watchBtn, queueBtn) {
  const userData = getAuth().onAuthStateChanged(user => {
    if (user) {
      const userMail = user.email;

      const docRealRef = collection(db, userMail);

      onSnapshot(docRealRef, snapshot => {
        let user = [];

        snapshot.docs.forEach(doc => {
          user.push({ ...doc.data() });
        });

        let [queue, watched] = user;
      });
    }
  });
}

async function markUpQueue(idItem, watchBtn, queueBtn) {
  const userData = getAuth().onAuthStateChanged(user => {
    if (user) {
      const userMail = user.email;

      const docRealRef = collection(db, userMail);

      onSnapshot(docRealRef, snapshot => {
        let user = [];

        snapshot.docs.forEach(doc => {
          user.push({ ...doc.data() });
        });

        let [queue, watched] = user;
      });
    }
  });
}

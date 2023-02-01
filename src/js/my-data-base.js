import { refs } from './refs';
// import { createNewQueueDataItem, createNewWatchedDataItem, deleteWatchedDataItem, deleteQueueDataItem,checkItemInWatchedList,checkItemInQueueList} from './firebase';
import { createNewQueueDataItem, createNewWatchedDataItem, deleteWatchedDataItem, deleteQueueDataItem} from './firebase';

export default function addDataBase(movieData) {

  // const watchBtn = document.querySelector('[data-action="watch"]');
  // const queueBtn = document.querySelector('[data-action="queue"]');
  const watchBtn = refs.watchBtn;
  const queueBtn = refs.queueBtn;

//   const isLibrary = location.pathname.includes('library');
//   const cartItem = document.querySelector(`[data-movie-id="${movieData.id}"]`);
     
  watchBtn.addEventListener('click', addWatch);
  queueBtn.addEventListener('click', addQueue);

  // let watchedList = checkItemInWatchedList(movieData.id);
  // let queueList = checkItemInQueueList(movieData.id); 
  
  // if (!watchedList) {
  //   watchBtn.textContent = 'Add to watched';
  //   watchBtn.classList.remove('button__accent');
  // } else {
  //   watchBtn.classList.add('button__accent');
  //   watchBtn.textContent = 'Remove from watched';
  // }

  // if (!queueList) {
  //   queueBtn.textContent = 'Add to queue';
  //   queueBtn.classList.remove('button__accent');
  // } else {
  //   queueBtn.classList.add('button__accent');
  //   queueBtn.textContent = 'Remove from queue';
  // }


  
  // if (!watchedList.find(film => film.id === movieData.id)) {
  //   watchBtn.textContent = 'Add to watched';
  //   watchBtn.classList.remove('button__accent');
  // } else {
  //   watchBtn.classList.add('button__accent');
  //   watchBtn.textContent = 'Remove from watched';
  // }

//   if (!queueList.find(film => film.id === movieData.id)) {
//     queueBtn.textContent = 'Add to queue';
//     queueBtn.classList.remove('button__accent');
//   } else {
//     queueBtn.classList.add('button__accent');
//     queueBtn.textContent = 'Remove from queue';
//   }
    // console.log('movieData',movieData);
    function addWatch() {
      if (movieData) {
        // createNewWatchedDataItem(movieData.id, movieData);
        deleteWatchedDataItem(movieData.id, movieData);

    //  if (watchedList.find(film => film.id === movieData.id)) {
    //    watchedList = watchedList.filter(film => film.id !== movieData.id);
    //    watchBtn.classList.remove('button__accent');
    //    watchBtn.textContent = 'Add to watched';
    //    if (isLibrary && cartItem ) {
    //       cartItem.remove();
    //     }
    //  } else {
    //    watchedList.push(movieData);
    //    watchBtn.classList.add('button__accent');
    //    watchBtn.textContent = 'Remove from watched';
    //   }
    //   localStorage.setItem(LOCAL_STORAGE_WATCHED, JSON.stringify(watchedList));
    }
  }

  function addQueue() {
    if (movieData) {
      createNewQueueDataItem(movieData.id, movieData);
    //  if (queueList.find(film => film.id === movieData.id)) {
    //    queueList = queueList.filter(film => film.id !== movieData.id);
    //    queueBtn.classList.remove('button__accent');
    //    queueBtn.textContent = 'Add to queue';
    //     if (isLibrary && cartItem ) {
    //       cartItem.remove();
    //     }
    //  } else {
    //    queueList.push(movieData);
    //    queueBtn.classList.add('button__accent');
    //    queueBtn.textContent = 'Remove from queue';
    //   }
    //   localStorage.setItem(LOCAL_STORAGE_QUEUE, JSON.stringify(queueList));
    }
  }

}

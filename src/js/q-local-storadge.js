const LOCAL_STORAGE_WATCHED = 'watched';
const LOCAL_STORAGE_QUEUE = 'queue';

function addLocalStorage(movieData) {

  const watchBtn = document.querySelector('[data-action="watch"]');
  const queueBtn = document.querySelector('[data-action="queue"]');

  watchBtn.addEventListener('click', addWatch);
  queueBtn.addEventListener('click', addQueue);

  let watchedList = getList(LOCAL_STORAGE_WATCHED);
  let queueList = getList(LOCAL_STORAGE_QUEUE); 
  
  if (!watchedList.find(film => film.id === movieData.id)) {
    watchBtn.textContent = 'Add to watched';
  } else {
    watchBtn.textContent = 'Remove from watched';
  }

  if (!queueList.find(film => film.id === movieData.id)) {
    queueBtn.textContent = 'Add to queue';
  } else {
    queueBtn.textContent = 'Remove from queue';
  }

  function addWatch() {
    if (movieData) {
     if (watchedList.find(film => film.id === movieData.id)) {
       watchedList = watchedList.filter(film => film.id !== movieData.id);
       watchBtn.textContent = 'Add to watched';
     } else {
        watchedList.push(movieData);
       watchBtn.textContent = 'Remove from watched';
      }
      localStorage.setItem(LOCAL_STORAGE_WATCHED, JSON.stringify(watchedList));
    }
  }

  function addQueue() {
    if (movieData) {
     if (queueList.find(film => film.id === movieData.id)) {
       queueList = queueList.filter(film => film.id !== movieData.id);
       queueBtn.textContent = 'Add to queue';
     } else {
        queueList.push(movieData);
       queueBtn.textContent = 'Remove from queue';
      }
      localStorage.setItem(LOCAL_STORAGE_QUEUE, JSON.stringify(queueList));
    }
  }

}

function getList(key) {
  let localList = JSON.parse(localStorage.getItem(key));
  if (localList === null) {
    localList = [];
  }
  return localList;
}

export { addLocalStorage };
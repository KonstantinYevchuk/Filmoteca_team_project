!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("gsgVr"),i("kvC6y"),i("auTmQ"),i("04QnZ"),i("dMbqt"),i("9ycmQ"),i("3nKWv"),i("jcFG7");var s=i("6Zzi9"),o=(s=i("6Zzi9"),i("4Nugj"));window.addEventListener("scroll",(function(){var e=window.screen.height;scrollY>20&&o.refs.buttonTop.classList.remove("is-hidden");scrollY<e/4&&o.refs.buttonTop.classList.add("is-hidden")})),o.refs.buttonTop.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),i("5xtVg"),i("ivF4K");var a={openModalBtn:document.querySelector("[data-modal-reg-open]"),closeModalBtn:document.querySelector("[data-modal-reg-close]"),modal:document.querySelector("[data-reg-modal]")};function d(){a.modal.classList.toggle("is-hidden")}a.openModalBtn.addEventListener("click",d),a.closeModalBtn.addEventListener("click",d);var l=i("bpxeT"),c=i("2TvXO"),u=(o=i("4Nugj"),i("fkNhc")),f=i("6JpON"),g=i("6m2hf"),m=i("gQOBw");(0,u.initializeApp)({apiKey:"AIzaSyDpHH4vTWioKzjyjXO2I80-uE6v02JiNMc",authDomain:"filmoteka-students-goit.firebaseapp.com",projectId:"filmoteka-students-goit",storageBucket:"filmoteka-students-goit.appspot.com",messagingSenderId:"474370553773",appId:"1:474370553773:web:273214bc0fea8263371324",measurementId:"G-8CJGR7QN75"});var h,p=(0,g.getFirestore)(),v=(0,m.getAuth)();function y(){return(y=e(l)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.onAuthStateChanged)(v,(function(e){e?(o.refs.logBtnContainer.hidden=!0,o.refs.exitBtnContainer.hidden=!1,o.refs.libraryHidden.classList.replace("visually-hidden","nav__item"),o.refs.watchBtn.hidden=!1,o.refs.queueBtn.hidden=!1):(o.refs.logBtnContainer.hidden=!1,o.refs.exitBtnContainer.hidden=!0,o.refs.libraryHidden.classList.replace("nav__item","visually-hidden"),o.refs.watchBtn.hidden=!0,o.refs.queueBtn.hidden=!0)}));case 2:e.sent;case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}o.refs.signupForm.addEventListener("submit",(function(e){e.preventDefault(),h=o.refs.signupForm.user_name.value;var t=o.refs.signupForm.mail.value,n=o.refs.signupForm.password.value;(0,m.createUserWithEmailAndPassword)(v,t,n).then((function(e){f.Notify.success("The user: ".concat(h," has been created")),o.refs.logBtnContainer.hidden=!0,o.refs.exitBtnContainer.hidden=!1,o.refs.signupForm.reset(),d(),o.refs.libraryHidden.classList.replace("visually-hidden","nav__item")})).catch((function(e){f.Notify.failure(e.message)}));var r=(0,g.doc)(p,t,"queue");(0,g.setDoc)(r,{queue:[]},{merge:!0}).catch((function(e){return f.Notify.failure(e.message)}));var i=(0,g.doc)(p,t,"watched");(0,g.setDoc)(i,{watched:[]},{merge:!0}).catch((function(e){return f.Notify.failure(e.message)}))})),o.refs.loginForm.addEventListener("submit",(function(e){e.preventDefault(),h=o.refs.loginForm.login.value;var t=o.refs.loginForm.mail.value,n=o.refs.loginForm.password.value;(0,m.signInWithEmailAndPassword)(v,t,n).then((function(e){f.Notify.success("user: ".concat(h," logged in")),o.refs.logBtnContainer.hidden=!0,o.refs.exitBtnContainer.hidden=!1,d(),o.refs.libraryHidden.classList.replace("visually-hidden","nav__item")})).catch((function(e){f.Notify.failure(e.message)}))})),o.refs.logout.addEventListener("click",(function(e){(0,m.signOut)(v).then((function(){f.Notify.info("The user logged out"),o.refs.logBtnContainer.hidden=!1,o.refs.exitBtnContainer.hidden=!0,o.refs.libraryHidden.classList.replace("nav__item","visually-hidden")})).catch((function(e){f.Notify.failure(e.message)}))})),function(){y.apply(this,arguments)}(),o.refs.loginFormBtn.addEventListener("click",(function(e){o.refs.logForm.classList.add("current"),o.refs.regForm.classList.remove("current"),o.refs.loginFormBtn.classList.toggle("target-btn"),o.refs.regFormBtn.classList.toggle("target-btn")})),o.refs.regFormBtn.addEventListener("click",(function(e){o.refs.regForm.classList.add("current"),o.refs.logForm.classList.remove("current"),o.refs.loginFormBtn.classList.toggle("target-btn"),o.refs.regFormBtn.classList.toggle("target-btn")})),(0,s.createPopularMoviesMarkup)()}();
//# sourceMappingURL=index.7ce75a31.js.map
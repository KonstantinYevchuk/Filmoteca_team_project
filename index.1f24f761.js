var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,s.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s),s("lY1JX"),s("gjiCh"),s("5MxpA"),s("5AVro"),s("9448T"),s("3INcY"),s("fvCRb"),s("2nhTy");var r=s("bmZal"),i=(r=s("bmZal"),s("krGWQ"));window.addEventListener("scroll",(function(){const e=window.screen.height;scrollY>20&&i.refs.buttonTop.classList.remove("is-hidden");scrollY<e/4&&i.refs.buttonTop.classList.add("is-hidden")})),i.refs.buttonTop.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),s("bTcpz"),s("cddKH");const o={openModalBtn:document.querySelector("[data-modal-reg-open]"),closeModalBtn:document.querySelector("[data-modal-reg-close]"),modal:document.querySelector("[data-reg-modal]")};function a(){o.modal.classList.toggle("is-hidden")}o.openModalBtn.addEventListener("click",a),o.closeModalBtn.addEventListener("click",a);i=s("krGWQ");var d=s("gKkQl"),l=s("7Y9D8"),c=s("ftYLF"),f=s("eyjy7");(0,d.initializeApp)({apiKey:"AIzaSyDpHH4vTWioKzjyjXO2I80-uE6v02JiNMc",authDomain:"filmoteka-students-goit.firebaseapp.com",projectId:"filmoteka-students-goit",storageBucket:"filmoteka-students-goit.appspot.com",messagingSenderId:"474370553773",appId:"1:474370553773:web:273214bc0fea8263371324",measurementId:"G-8CJGR7QN75"});const u=(0,c.getFirestore)(),g=(0,f.getAuth)();let m;i.refs.signupForm.addEventListener("submit",(e=>{e.preventDefault(),m=i.refs.signupForm.user_name.value;const t=i.refs.signupForm.mail.value,n=i.refs.signupForm.password.value;(0,f.createUserWithEmailAndPassword)(g,t,n).then((e=>{l.Notify.success(`The user: ${m} has been created`),i.refs.logBtnContainer.hidden=!0,i.refs.exitBtnContainer.hidden=!1,i.refs.signupForm.reset(),a(),i.refs.libraryHidden.classList.replace("visually-hidden","nav__item")})).catch((e=>{l.Notify.failure(e.message)}));const s=(0,c.doc)(u,t,"queue");(0,c.setDoc)(s,{queue:[]},{merge:!0}).catch((e=>l.Notify.failure(e.message)));const r=(0,c.doc)(u,t,"watched");(0,c.setDoc)(r,{watched:[]},{merge:!0}).catch((e=>l.Notify.failure(e.message)))})),i.refs.loginForm.addEventListener("submit",(e=>{e.preventDefault(),m=i.refs.loginForm.login.value;const t=i.refs.loginForm.mail.value,n=i.refs.loginForm.password.value;(0,f.signInWithEmailAndPassword)(g,t,n).then((e=>{l.Notify.success(`user: ${m} logged in`),i.refs.logBtnContainer.hidden=!0,i.refs.exitBtnContainer.hidden=!1,a(),i.refs.libraryHidden.classList.replace("visually-hidden","nav__item")})).catch((e=>{l.Notify.failure(e.message)}))})),i.refs.logout.addEventListener("click",(e=>{(0,f.signOut)(g).then((()=>{l.Notify.info("The user logged out"),i.refs.logBtnContainer.hidden=!1,i.refs.exitBtnContainer.hidden=!0,i.refs.libraryHidden.classList.replace("nav__item","visually-hidden")})).catch((e=>{l.Notify.failure(e.message)}))})),async function(){await(0,f.onAuthStateChanged)(g,(e=>{e?(i.refs.logBtnContainer.hidden=!0,i.refs.exitBtnContainer.hidden=!1,i.refs.libraryHidden.classList.replace("visually-hidden","nav__item"),i.refs.watchBtn.hidden=!1,i.refs.queueBtn.hidden=!1):(i.refs.logBtnContainer.hidden=!1,i.refs.exitBtnContainer.hidden=!0,i.refs.libraryHidden.classList.replace("nav__item","visually-hidden"),i.refs.watchBtn.hidden=!0,i.refs.queueBtn.hidden=!0)}))}(),i.refs.loginFormBtn.addEventListener("click",(e=>{i.refs.logForm.classList.add("current"),i.refs.regForm.classList.remove("current"),i.refs.loginFormBtn.classList.toggle("target-btn"),i.refs.regFormBtn.classList.toggle("target-btn")})),i.refs.regFormBtn.addEventListener("click",(e=>{i.refs.regForm.classList.add("current"),i.refs.logForm.classList.remove("current"),i.refs.loginFormBtn.classList.toggle("target-btn"),i.refs.regFormBtn.classList.toggle("target-btn")})),(0,r.createPopularMoviesMarkup)();
//# sourceMappingURL=index.1f24f761.js.map

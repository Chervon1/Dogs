// OUR firebase File

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getFirestore, addDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvk2Gs-_NTPadVvN03EmpwVu40FUW_ogA",
  authDomain: "dogbreed-b1789.firebaseapp.com",
  projectId: "dogbreed-b1789",
  storageBucket: "dogbreed-b1789.appspot.com",
  messagingSenderId: "844401602012",
  appId: "1:844401602012:web:5e785176b0d8e01dd1f319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
window.auth = getAuth();
const db = getFirestore(app);

// exposed functionality

window.signup = function(email, password){
    return createUserWithEmailAndPassword (auth, email, password);
}

window.isLoggedIn = function(){
    return auth.currentUser !== null;
}

window.login = function(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}

window.logout = function(){
    auth.signOut();
}

window.onLogin = function( f ){
    onAuthStateChanged(auth, user => {
        f( user );
    });
}

//////////////////////////////////////////////
// exposed functionality for db
window.addComment = function(comment){
    return addDoc( collection(db, "comments"), {comment} );
}

window.forEachComment = async function( f ){
    var docs = await getDocs( collection(db, "comments") );
    console.log(docs);
    docs.forEach( doc => f(doc.data()) );
}

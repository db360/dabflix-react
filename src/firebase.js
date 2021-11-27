import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMSkC8bB5IYk62cKx8emRpM6FGkozFFxs",
    authDomain: "dabflix-react.firebaseapp.com",
    projectId: "dabflix-react",
    storageBucket: "dabflix-react.appspot.com",
    messagingSenderId: "874798129099",
    appId: "1:874798129099:web:329f82f8d4ebbadf30204e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  //la base de datos se exporta como default solo un default, los independientes los que quedarmos
  export default db;
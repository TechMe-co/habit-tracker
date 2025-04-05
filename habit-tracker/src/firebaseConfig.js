import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAthjnCQhq9_MdjdVayowgO0up1WQLVBrM",
    authDomain: "habit-tracker-9bd92.firebaseapp.com",
    projectId: "habit-tracker-9bd92",
    storageBucket: "habit-tracker-9bd92.firebasestorage.app",
    messagingSenderId: "77924030534",
    appId: "1:77924030534:web:1df22ca875dceff2005247"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  export { db, auth };
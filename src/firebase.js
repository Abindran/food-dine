import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBs1zCJXq5qpiGR7Dm6dawhfesm4mwJvj4",
    authDomain: "food-dine-34ab0.firebaseapp.com",
    projectId: "food-dine-34ab0",
    storageBucket: "food-dine-34ab0.appspot.com",
    messagingSenderId: "181131727882",
    appId: "1:181131727882:web:460421a46be8e42c723bf3",
    measurementId: "G-92YWZ9P69M"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db}
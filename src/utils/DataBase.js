import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFvrHs--PvgnZPnP1JXZlT1UWTOoxVd30",
    authDomain: "superchango-a4045.firebaseapp.com",
    databaseURL: "https://superchango-a4045.firebaseio.com/",
    projectId: "superchango-a4045",
    storageBucket: "superchango-a4045.appspot.com",
    messagingSenderId: "496146550265",
    appId: "1:496146550265:web:a557b75c8eec68517cc128",
    measurementId: "G-24637XG8ZK"
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

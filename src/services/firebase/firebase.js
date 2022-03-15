import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABwj1GebR_MRRvfL6TVcjEt_prjXEnn-Q",
  authDomain: "react-dani.firebaseapp.com",
  projectId: "react-dani",
  storageBucket: "react-dani.appspot.com",
  messagingSenderId: "1043824621430",
  appId: "1:1043824621430:web:7c46ebb52db67c3db5ac57"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
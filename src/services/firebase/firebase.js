import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
   apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        resolve(products);
      })
      .catch((error) => {
        reject("No products found: ", error);
      });
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(firestoreDb, "products", productId);

    getDoc(docRef)
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        resolve(product);
      })
      .catch((error) => {
        reject("No products found: ", error);
      });
  });
};

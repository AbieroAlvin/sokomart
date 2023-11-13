import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEsI3IANT8Tjj8VYfjUr4hrE4D46hZIgI",
  authDomain: "crypto-app-7e859.firebaseapp.com",
  projectId: "crypto-app-7e859",
  storageBucket: "crypto-app-7e859.appspot.com",
  messagingSenderId: "436323072534",
  appId: "1:436323072534:web:0860eac7e269774d3e5337",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

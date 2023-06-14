import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, debugErrorMap, getAuth, initializeAuth } from "firebase/auth";
import {
  GoogleAuthProvider,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3NHvxq-knrpm9159BpEHiLHByw-lWGlw",
  authDomain: "react-native-template-16ff6.firebaseapp.com",
  projectId: "react-native-template-16ff6",
  storageBucket: "react-native-template-16ff6.appspot.com",
  messagingSenderId: "220973491456",
  appId: "1:220973491456:web:2e595fb8721f844f477fe5",
  measurementId: "G-JDV1Z1SY2K",
};

//* Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

//* Auth
// ! (errorMap: debugErrorMap) is used to get descriptive error messages otherwise first one also works
// ! persistence:getReactNativePersistence(AsyncStorage) is used to user from storage
// export const firebaseAuth:Auth = getAuth(firebaseApp);
export const firebaseAuth: Auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
  errorMap: debugErrorMap,
});

export const googleProvider = new GoogleAuthProvider();

export const firebaseDb = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDHDHkmUQj8IW2BIhELy47ypeqbu1xE3lY",
  authDomain: "zcs-transport.firebaseapp.com",
  projectId: "zcs-transport",
  storageBucket: "zcs-transport.firebasestorage.app",
  messagingSenderId: "276634968614",
  appId: "1:276634968614:web:fe271e43d9f6234c413ce7",
  measurementId: "G-DPLT410MTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

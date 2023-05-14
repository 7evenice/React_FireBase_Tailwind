import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAYpwyTIH2i7EoiYwdHtpx0X7g6byHQBo0',
  authDomain: 'abc123-bf336.firebaseapp.com',
  projectId: 'abc123-bf336',
  storageBucket: 'abc123-bf336.appspot.com',
  messagingSenderId: '1010889709004',
  appId: '1:1010889709004:web:699d4d8edc52ed6569f969',
  measurementId: 'G-HBBJMB43MJ',
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

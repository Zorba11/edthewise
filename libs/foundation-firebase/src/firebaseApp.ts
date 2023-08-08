// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { Auth, getAuth } from 'firebase/auth';
import { firebaseConfig } from './config/firebaseConfig';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(firebaseApp);

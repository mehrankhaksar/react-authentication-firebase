import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB2hjkwiPwAxdsRiyG56wwe4j3Adhj2BUo',
  authDomain: 'react-authentication-9ade5.firebaseapp.com',
  projectId: 'react-authentication-9ade5',
  storageBucket: 'react-authentication-9ade5.appspot.com',
  messagingSenderId: '376877780183',
  appId: '1:376877780183:web:8d3bf861c46ccd5e447492',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;

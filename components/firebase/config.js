//import * as firebase from 'firebase';
import 'firebase/auth';
import firebase from 'firebase';
import {getAuth} from '@firebase/auth';
import {initializeFirestore} from 'firebase/firestore';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbCm2XQX9H40uvAaRSMw_uVV6pBq7GPT8',
  authDomain: 'jia-app-f3098.firebaseapp.com',
  databaseURL: 'JIA App.firebaseio.com',
  projectId: 'jia-app-f3098',
  storageBucket: 'jia-app-f3098.appspot.com',
  messagingSenderId: '646783795324',
  appId: '1:646783795324:web:b28ed8c19b9759459cc9f9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

/*
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});*/

export { firebase };
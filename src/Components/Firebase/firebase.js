import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCm0C0Dr2ppiVi1WKMweHW1psRBMOgnxuo',
    authDomain: 'calendar-app-f0c88.firebaseapp.com',
    databaseURL: 'https://calendar-app-f0c88.firebaseio.com',
    projectId: 'calendar-app-f0c88',
    storageBucket: 'calendar-app-f0c88.appspot.com',
    messagingSenderId: '1022865556679',
    appId: '1:1022865556679:web:b2f3ea221012800f8ceae2',
    measurementId: 'G-L01KHTCQ8L',
};

firebase.initializeApp(config);
export default firebase;

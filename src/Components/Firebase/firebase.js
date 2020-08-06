import app from 'firebase/app';

const config = {
    // apiKey: "AIzaSyCm0C0Dr2ppiVi1WKMweHW1psRBMOgnxuo",
    // authDomain: "calendar-app-f0c88.firebaseapp.com",
    // databaseURL: "https://calendar-app-f0c88.firebaseio.com",
    // projectId: "calendar-app-f0c88",
    // storageBucket: "calendar-app-f0c88.appspot.com",
    // messagingSenderId: "1022865556679",
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
 
export default Firebase;

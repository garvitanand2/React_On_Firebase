import app from "firebase/app";

const config = {
    apiKey: "AIzaSyAm-_scOoGmAbARCXms6askSZQAQ-U_LDM",
    authDomain: "react-sample-891a0.firebaseapp.com",
    databaseURL: "https://react-sample-891a0.firebaseio.com",
    projectId: "react-sample-891a0",
    storageBucket: "react-sample-891a0.appspot.com",
    messagingSenderId: "659219665642",
    appId: "1:659219665642:web:796376c56f60b0b7c73d93",
    measurementId: "G-VJSBXW9W3H",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;

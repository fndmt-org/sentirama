import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBz9WIj8SHoc9F2l9Uz2BipbTbM_iGRY4w",
    authDomain: "corona-mood.firebaseapp.com",
    databaseURL: "https://corona-mood.firebaseio.com",
    projectId: "corona-mood",
    storageBucket: "corona-mood.appspot.com",
    messagingSenderId: "915912794570",
    appId: "1:915912794570:web:ba18ea9f96b8ea0981af33",
    measurementId: "G-PKF0ZEL622"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    doAddMood = (name, message, emoji, date) => {
        return this.messages().push().set({
            message,
            name,
            date,
            emoji,
        });
    };

    // *** Message API ***
    message = uid => this.db.ref(`message/${uid}`);
    messages = () => this.db.ref('messages');

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}
export default Firebase;

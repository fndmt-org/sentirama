import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// Add the Performance Monitoring library
import "firebase/performance";

const firebaseConfigDev = {
    apiKey: "AIzaSyBz9WIj8SHoc9F2l9Uz2BipbTbM_iGRY4w",
    authDomain: "corona-mood.firebaseapp.com",
    databaseURL: "https://corona-mood.firebaseio.com",
    projectId: "corona-mood",
    storageBucket: "corona-mood.appspot.com",
    messagingSenderId: "915912794570",
    appId: "1:915912794570:web:ba18ea9f96b8ea0981af33",
    measurementId: "G-PKF0ZEL622"
};

const firebaseConfigProd = {
    apiKey: "AIzaSyCBFwQPjyZSPKAmYP1QhoRcBbj1_ft2xyk",
    authDomain: "sentirama-2e79b.firebaseapp.com",
    projectId: "sentirama-2e79b",
    storageBucket: "sentirama-2e79b.appspot.com",
    messagingSenderId: "1045798979793",
    appId: "1:1045798979793:web:34057c4c256092af5e9df0",
    measurementId: "G-J5TSPJ1G8M"
};

const isProduction = process.env.NODE_ENV === 'production'

const config = isProduction ? firebaseConfigProd : firebaseConfigDev;

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfigDev);
        // Initialize Performance Monitoring and get a reference to the service
        this.perf = app.performance();
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

    doAddMood = (message, name, date, emoji = 'neutral', category, set, color) => {
        return this.messages().push().set({
            message,
            name,
            date,
            emoji,
            category,
            set,
            color,
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

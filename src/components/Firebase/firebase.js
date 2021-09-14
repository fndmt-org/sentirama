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


    // *** API ***
    // eslint-disable-next-line max-params
    doAddMood = (name, message, emoji, date, category, set, color, uuid) => {
        console.log(
            "name",name,
            "message",message,
            "emoji",emoji,
            "date",date,
            "category",category,
            "set",set,
            "color",color,
            "uuid", uuid
        )
        return this.messagesRef().push().set({
            message,
            name,
            date,
            emoji,
            category,
            set,
            color,
            uuid,
        }, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log('rec ok');
            }
        });
    };


    // *** Message API ***
    messageRef = uuid => this.db.ref(`message/${uuid}`);
    messagesRef = () => this.db.ref('messages');
}
export default Firebase;

import { initializeApp } from "firebase/app"
import { getDatabase, ref, query, set as dbset, onValue, equalTo } from "firebase/database";

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
        this.app = initializeApp(config);
        this.db = getDatabase();
    }

    mood = uid => ref(this.db, `mood/${uid}`);
    moods = () => ref(this.db, 'moods');

    // *** API ***
    doAddMood = ({uuid, ...params}) => {
        dbset(ref(this.db, 'moods/' + uuid), {
            uuid,
            ...params
        }).then(() => {
            // Data saved successfully!
        }).catch((error) => {
            // The write failed...
        });
    };

    doUpdateMood = ({uuid, ...params}) => {
        const moodRef = ref(this.db, 'moods/' + uuid);
        onValue(moodRef, (snapshot) => {
            if (snapshot.exists()){
                const data = snapshot.val();
                console.log(data);
            } else{
                doAddMood({uuid, ...params});
            }
        });
    }

    getGlobalMood = (callback) => {

        const globalMoodRef = ref(this.db, 'moods');
        onValue(globalMoodRef, (snapshot) => {
            callback(snapshot.exists() ? snapshot.val() : null);
        });


    }

}
export default Firebase;

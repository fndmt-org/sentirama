import { initializeApp } from "firebase/app"
import { getDatabase, ref, query, set as dbset, onValue, equalTo } from "firebase/database";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MESUREMENT_ID,
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

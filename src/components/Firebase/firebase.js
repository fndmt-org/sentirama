import { initializeApp } from "firebase/app"
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
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

const MOODS_PATH = "moods";
const MOOD_PATH = "mood";

class Firebase {
    constructor() {
        this.app = initializeApp(config);
        this.dbFirestore = getFirestore();
        this.docRef = doc(this.dbFirestore);
        this.db = getDatabase();
        this.auth = getAuth();
    }

    moodsFirestore = async () => {
        console.log(await getDoc(this.docRef));
    }

    singIn = (callback) =>{
        signInAnonymously(this.auth)
            .then(() => {
                callback();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode)
                console.error(errorMessage)
            });
    }

    mood = uid => ref(this.db, `${MOOD_PATH}/${uid}`);
    moods = () => ref(this.db, MOODS_PATH);

    // *** API ***
    doAddMood = ({uuid, ...params}) => {
        dbset(ref(this.db, `${MOODS_PATH}/` + uuid), {
            uuid,
            ...params
        }).then(() => {
            // Data saved successfully!
        }).catch((error) => {
            // The write failed...
        });
    };

    doUpdateMood = ({uuid, ...params}) => {
        const moodRef = ref(this.db, `${MOODS_PATH}/` + uuid);
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

        const globalMoodRef = ref(this.db, MOODS_PATH);
        onValue(globalMoodRef, (snapshot) => {
            callback(snapshot.exists() ? snapshot.val() : null);
        });


    }

}
export default Firebase;

import { initializeApp } from "firebase/app"
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, query, set as dbset, onValue, equalTo, orderByChild, serverTimestamp } from "firebase/database";
import { getPerformance } from "firebase/performance";

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
const SESSION_PATH = "sessions"

class Firebase {
    constructor() {
        this.app = initializeApp(config);
        this.db = getDatabase();
        this.auth = getAuth();
        // Initialize Performance Monitoring and get a reference to the service
        this.perf = getPerformance(this.app);
    }

    sessions = () => ref(this.db, SESSION_PATH);
    mood = uuid => ref(this.db, `${MOOD_PATH}/${uuid}`);
    moods = uuid => ref(this.db, uuid ? `${MOODS_PATH}/${uuid}`: MOODS_PATH);

    singIn = (callback = () => {}) =>{
        signInAnonymously(this.auth)
            .then(() => {
                var sessionsRef = sessions;
                sessionsRef.push({
                    startedAt: serverTimestamp(),
                });
                callback();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode)
                console.error(errorMessage)
            });
    }


    // *** API ***
    doAddMood = ({uuid, ...params}) => {
        const {createdAt, ...restParams} = params;

        dbset(this.moods(uuid), {
            uuid,
            createdAt: createdAt ? createdAt : serverTimestamp(),
            ...restParams
        }).then((data) => {
            console.log(data ? data : "no data");
        }).catch((error) => {
            console.error(error);
        });
    };

    doUpdateMood = ({uuid, ...params}) => {
        const moodRef = this.mood(uuid);
        onValue(moodRef, (snapshot) => {
            if (snapshot.exists()){
                const data = snapshot.val();
                console.log(data);
            } else{
                doAddMood({uuid, ...params});
            }
        });
    }

    getGlobalMood = (callback = () => {}) => {
        const globalMoodRef = this.moods();
        onValue(globalMoodRef, (snapshot) => {
            callback(snapshot.exists() ? snapshot.val() : null);
        });
    }

    fetchMoods = (callback = () => {}) => {
        const moodsList =  query(this.moods(), orderByChild('createdAt'));
        onValue(moodsList, (snapshot) => {
            let keys = []
            snapshot.forEach(item => {
                var itemVal = item.val();
                keys.push(itemVal);
            });
            callback(snapshot.exists() ? keys.reverse() : null);
        })
    }
}

export default Firebase;

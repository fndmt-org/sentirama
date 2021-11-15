// node
const admin = require("firebase-admin");
const serviceAccount = require("../sentirama-app-firebase-adminsdk-eenoq-7e77242f19.json");
const generateColorSteps = require('../src/components/Styles/colorSteps');

const moods = require("./moods.grid.js");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sentirama-app-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.firestore();


async function setDocument({db, collection, doc, data}) {
    const res = await db.collection(collection).doc(doc).set(data);
    console.log('Set: ', res);
}

const unmetColors = {
    colorStart: 'hsla(270, 75%, 40%, 1)',
    colorEnd: 'hsla(60, 75%, 50%, 1)',
};

const metColors = {
    colorStart: 'hsla(70, 75%, 50%, 1)',
    colorEnd: 'hsla(240, 75%, 50%, 1)',
};

const getMoodsColor = (colors, arr) => {
    const colorArray = generateColorSteps({
        ...colors,
        steps: arr.length
    });

    return arr.map((item, index) => ({color: colorArray[index], ...item}))
}

function setMoods(db, moods) {
    const unmet = moods.filter((mood)=> mood.set === 'unmet');
    const met = moods.filter((mood)=> mood.set === 'met');
    const moodsColors = [
        ...getMoodsColor(unmetColors,unmet),
        ...getMoodsColor(metColors,met),
    ];

    for (let i = 0; i < moodsColors.length; i++) {
        const doc = moodsColors[i].value_es.toLowerCase();
        const docNormalized = doc.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        console.log(docNormalized, moodsColors[i]);
        setDocument({
            db,
            collection: 'mood',
            doc: docNormalized,
            data: moodsColors[i],
        });
    }
}

setMoods(db, moods);

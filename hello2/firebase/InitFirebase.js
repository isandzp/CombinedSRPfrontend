import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";

const clientCredentials = {
    apiKey: "AIzaSyCt0I40pMFA9aEtkKclo2hYwd7llkosJpo",
    authDomain: "srpproj-8177c.firebaseapp.com",
    projectId: "srpproj-8177c",
    storageBucket: "srpproj-8177c.appspot.com",
    messagingSenderId: "179370331880",
    appId: "1:179370331880:web:aefd7363c63dcfd3f8435d",
    measurementId: "G-L5VJG7Y8Q0"
};

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

const realDB = getDatabase(app);

export { initFirebase, db, realDB };
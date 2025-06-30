import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDnLeghq8ghLosQPsVJG-Kg_ZekRnw4FGk",
    authDomain: "p-nerd-quiz-application-2.firebaseapp.com",
    projectId: "p-nerd-quiz-application-2",
    storageBucket: "p-nerd-quiz-application-2.appspot.com",
    messagingSenderId: "121041099785",
    appId: "1:121041099785:web:985d3ce6c7f664d5adacd8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

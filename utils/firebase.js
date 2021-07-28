import firebase from "firebase";

const firebaseConfig ={
    apiKey: "AIzaSyAja63C2cNhw4laIwWiR7b4WPCq8tSNvEA",
    authDomain: "infra-tempo-163202.firebaseapp.com",
    projectId: "infra-tempo-163202",
    storageBucket: "infra-tempo-163202.appspot.com",
    messagingSenderId: "940289436117",
    appId: "1:940289436117:web:375247f0ffa56d81a7b55c"
}

export const firebaseapp = firebase.initializeApp(firebaseConfig)
import firebase from 'firebase/app';  
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBlRIjKkA-EAZRtVz9QhgNyIyp_Nr5ics0",
    authDomain: "chanonyt-anonymous-chat.firebaseapp.com",
    databaseURL: "https://chanonyt-anonymous-chat.firebaseio.com",
    projectId: "chanonyt-anonymous-chat",
    storageBucket: "chanonyt-anonymous-chat.appspot.com",
    messagingSenderId: "1004168284529"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
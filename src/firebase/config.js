import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjkk9VkKMYf1KWosYij67IrU9Gb0hi830",
    authDomain: "fire-gram-d42aa.firebaseapp.com",
    projectId: "fire-gram-d42aa",
    storageBucket: "fire-gram-d42aa.appspot.com",
    messagingSenderId: "236964761789",
    appId: "1:236964761789:web:1718faf26ebef709a427d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp; 


export { projectStorage, projectFirestore, timestamp };
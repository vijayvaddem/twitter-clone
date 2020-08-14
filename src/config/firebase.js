import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD23u_I7R8C9wrdah1ctSL2R46gJlRP31A",
  authDomain: "twitter-clone-ed9b6.firebaseapp.com",
  databaseURL: "https://twitter-clone-ed9b6.firebaseio.com",
  projectId: "twitter-clone-ed9b6",
  storageBucket: "twitter-clone-ed9b6.appspot.com",
  messagingSenderId: "307772871955",
  appId: "1:307772871955:web:676eb300578754472ab6e6",
  measurementId: "G-5DE3LKLQ5N",
};

const firebaseConn = firebase.initializeApp(firebaseConfig);
const db = firebaseConn.firestore();

// db.collection("posts")
//   .get()
//   .then((response) => {
//     response.docs.forEach((document) => {
//       console.log("This-->", document.data());
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export default db;

import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
  
        
            apiKey: "AIzaSyCq5Kq55eQF4qJiApj6uP3ae0GIuMD8w6s",
            authDomain: "contact-portfolio-bc9c9.firebaseapp.com",
            databaseURL: "https://contact-portfolio-bc9c9.firebaseio.com",
            projectId: "contact-portfolio-bc9c9",
            storageBucket: "contact-portfolio-bc9c9.appspot.com",
            messagingSenderId: "463781798083",
            appId: "1:463781798083:web:14c4436440c6c5ddeb8276"
          
    }
)

const db = firebaseApp.firestore()

export {db}; 
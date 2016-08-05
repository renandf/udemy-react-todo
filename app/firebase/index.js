import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAX7eJrD1daaCP9_MTzoEypcirE4ZHRrg4",
    authDomain: "udemy-react-todo-app.firebaseapp.com",
    databaseURL: "https://udemy-react-todo-app.firebaseio.com",
    storageBucket: "",
  };
  
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

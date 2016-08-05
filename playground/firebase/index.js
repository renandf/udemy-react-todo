import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAX7eJrD1daaCP9_MTzoEypcirE4ZHRrg4",
  authDomain: "udemy-react-todo-app.firebaseapp.com",
  databaseURL: "https://udemy-react-todo-app.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Renan',
    age: 32
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Get better'
});

todosRef.push({
  text: 'Prepare for City2surf'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.update({
//   'user/name': 'Renato'
// });
//
// firebaseRef.child('app').update({name: 'something else'});

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});

// Multipath update
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application',
//   'user/name': 'Mudando nome'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed');
// });

// Child update
// firebaseRef.child('app').update({ name: 'Todo Application' });
// firebaseRef.child('user').update({ name: 'Mike' });

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// Remove (delete)
// firebaseRef.update({ isRunning: null });
// firebaseRef.child('user/age').remove();

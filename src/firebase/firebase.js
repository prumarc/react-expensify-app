import * as firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyCP867jQTnVMGvkSuc3CTA15odw8OCD7gI",
    authDomain: "expensify-e32f9.firebaseapp.com",
    databaseURL: "https://expensify-e32f9.firebaseio.com",
    projectId: "expensify-e32f9",
    storageBucket: "expensify-e32f9.appspot.com",
    messagingSenderId: "496144189804"
};

firebase.initializeApp(config);

const database = firebase.database();



// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) =>{
//         const val = snapshot.val();
//         console.log(val);
//     }).catch(() => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Marcos Prudencio',
//     age: 30,
//     stressLeve: 6,
//     job: {
//         title: 'Software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Puebla',
//         country: 'Mexico'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLeve: 10,
//     'job/company': 'Amazon2',
//     'location/city': 'Seattle'
// });

// database.ref()
// .remove()
// .then(() => {
//     console.log('data was removed');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });

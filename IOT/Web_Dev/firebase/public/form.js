// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALjEYXMUR9Rx6qEWFO1yac0suXRx2rhR4",
    authDomain: "iot-project-491.firebaseapp.com",
    databaseURL: "https://iot-project-491.firebaseio.com",
    projectId: "iot-project-491",
    storageBucket: "iot-project-491.appspot.com",
    messagingSenderId: "96196344655",
    appId: "1:96196344655:web:252d4b1c19ad12c4f0a33a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//  firebase DATABASE
let id = 1001

let db = firebase.database();


/*
function addInfo(name, age) {
    let id = db.ref('iot1/user').push().key;
    
    db.ref(`iot1/user${id}/name`).set(name);
    db.ref(`iot1/user${id}`).child('age').set(age);
}
*/


//  new function to add
function addInfo2(name, age) {
    //let id = db.ref('iot1/user').push().key;
    
    db.ref(`iot1/PAYTM${id}`).set({
        name: name,
        age: age
    });
}



/*      DOM     */

let submitted = () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    addInfo2(name, age);
    id+=1;
}

let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submitted);


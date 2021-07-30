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

let db = firebase.database();
var id = 0


function addInfo(name, age, id) {
    db.ref(`user${id}/name`).set(name);
    db.ref(`user${id}`).child('age').set(age);
    db.ref('id').set(id);
}

//  new structure
function addInfo2(name, age, id) {
    db.ref('user/'+id).set({
        name: name,
        age: age
    });
    db.ref('id').set(id);
}



/*      DOM     */

let submitted = () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    console.log(id)
    addInfo2(name, age, id);
    id+=1;
}

let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submitted);

/*
//  value listener 'on'

let idRef = db.ref(id);
idRef.on('value', snap => console.log(snap.value));
*/
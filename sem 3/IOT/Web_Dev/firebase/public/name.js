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


let db = firebase.database();
//  db.ref('iot2/id').once('value').then( snap => console.log(snap.val()));     //  read by 'once'      value pull              (once)
//  db.ref('iot2/id').on('value', snap => console.log(snap.val()));             //  read by 'on'        value change event      (sync)









//  retrieve data of saved user in database
db.ref().child('iot2').once('value').then(snap => {
    //  list of each userId
    let items = snap.val();
    //  taking data from each user ID
    for(const item in items) 
        db.ref('iot2/'+item).once('value').then(snap => createNewNode(snap.val()));
});






//  remove as data is deleted on database
db.ref().child('iot2').on('child_removed', snap => {
    let data = snap.val();
    alert(`Deleted from database!\nName:  ${data.name}\nDesignation: ${data.designation}`);
    removeNode(data.name);
})








let submiButton = document.getElementById('submit');
submiButton.addEventListener('click', () => {

    let desig = document.getElementById('desig').value;
    let name = document.getElementById('name').value;

    let id = db.ref('iot2/user').push().key;
    console.log(id);
    addData(name, desig, id);
    
    
    //  retrieve data of newly added user.
    db.ref('iot2/'+id).once('value').then(snap => {
        //  add it to client machine
        createNewNode(snap.val());

    });
    
})





//  create tag and show data there
function createNewNode(data) {
    let outerWrapper = document.querySelector('.outputWrapper');
    let wrapper = document.createElement('div');
    wrapper.classList.add('person');

    let name = document.createElement('h1');
    name.appendChild(document.createTextNode(data.name));
    wrapper.appendChild(name);

    let desig = document.createElement('p');
    desig.appendChild(document.createTextNode(data.designation));
    wrapper.appendChild(desig);

    wrapper.id = data.name;
    outerWrapper.appendChild(wrapper);   
}

//  remove tag using it's ID
function removeNode(divName) {
    let removeDiv = document.getElementById(divName);
    removeDiv.remove();
}

//  add data to database  
let addData = (name, desig, id) => {
    db.ref('iot2/'+id).set({
        name: name,
        designation: desig
    });
}

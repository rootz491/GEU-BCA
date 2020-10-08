  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA1j_7FO-_URmRpoSCuOJbS7_M30X_8J2M",
  authDomain: "first-app-491.firebaseapp.com",
  databaseURL: "https://first-app-491.firebaseio.com",
  projectId: "first-app-491",
  storageBucket: "first-app-491.appspot.com",
  messagingSenderId: "775097660967",
  appId: "1:775097660967:web:a3e48c53e3fdefefd70002",
  measurementId: "G-K3Q1K1JYXV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dbRef = firebase.database();


/*      work only once!
dbRef.ref('comment').once('value').then( snap => {
    let comments = snap.val();
    for(const item in comments)
        dbRef.ref(`comment/${item}`).once('value').then(snap => createComment(snap.val()));
})
*/


//  fetch any new posts

dbRef.ref('comment').on('child_added', snap => {
    let comment = snap.val();
    createComment(comment);
});






















  //    DOM


//sign in button listener
let signIn = document.getElementById('signIn');
signIn.addEventListener('click', () => {
    console.log('signIn click');
})



//sign out button listener
let signOut = document.getElementById('signOut');
signOut.addEventListener('click', () => {
    console.log('signOut click');
})



//Form event listener
let form = document.querySelector('form');
form.addEventListener('submit', postComment);


//  functions


let createComment  = commentObj => {
    let wrapper = document.getElementById('commentWrapper');
    let commentBody = document.createElement('div');
    commentBody.id = 'comment';

    let commentContext = document.createElement('p');
    commentContext.id = "commentContext";
    commentContext.appendChild(document.createTextNode(commentObj.text));

    let commentName = document.createElement('h4');
    commentName.id = 'commentName';
    commentName.appendChild(document.createTextNode(commentObj.name));

    commentBody.appendChild(commentContext);
    commentBody.appendChild(commentName);

    wrapper.appendChild(commentBody);
}



function postComment(e)  {
    e.preventDefault();
    
    let name = document.getElementById('postName');
    let text = document.getElementById('postText');
    let postId = dbRef.ref('comment').push().key;

    dbRef.ref(`comment/${postId}`).set({
        name: name.value,
        text: text.value
    });

    //console.log(postId, name, text);
    name.value = "";
    text.value = ""; 

    alert('Posted successfully\n it may take few seconds to appear!');
}

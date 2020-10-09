let dbRef = firebase.database();

/*  

//  CHILD_ADDED respond upon adding child to some reference and return children as they are added!
dbRef.ref(`iot3/post`).on('child_added', snap => {
    let data = snap.val();
    let id = snap.key;
    createPostElement(id, data.title, data.content, data.author);
});

*/


/*          Listener Queries */

//  CHILD_REMOVED resond when some data is deleted while listening for that data. and return the object of that removed data.
dbRef.ref('iot3/post').on('child_removed', snap => {
    let id = snap.key;
    console.log("post removed successfully");
    document.querySelector(`.${id}`).remove();
});

dbRef.ref('iot3/post').on('child_moved', snap => {
    console.log(snap.val());
})






/*          Simple Queries       */

//  retrieve last Post
dbRef.ref('iot3/post').limitToLast(1).on('child_added', snap => {
    let data = snap.val();
    let id = snap.key;
    createTitleOnlyPost(id, data.title, data.likes, 'latestPost');
});

//  retrieve first post
dbRef.ref('iot3/post').limitToFirst(1).on('child_added', snap => {
    let data = snap.val();
    let id = snap.key;
    createTitleOnlyPost(id, data.title, data.likes, 'oldestPost');
});

/*          complex comparision on queries        */

//  post with likes > 35
dbRef.ref('iot3/post').orderByChild('likes').startAt(35).on('child_added', snap => {
    let data = snap.val();
    let id = snap.key;
    createTitleOnlyPost(id, data.title, data.likes, 'likeSortPost');
});

//  post in ascending order {title: A-Z}
dbRef.ref('iot3/post').orderByChild('title').on('child_added', snap => {
    let data = snap.val();
    let id = snap.key;
    createTitleOnlyPost(id, data.title, data.likes, 'ascendingOrderedPost');
});

//  posts of a perticular author
dbRef.ref('iot3/post').orderByChild('author').equalTo('DEV').on('child_added', snap => {
    let data = snap.val();
    let id = snap.key;
    createTitleOnlyPost(id, data.title, data.likes, 'devPost');
});

//  using orderByKey or orderByValue will return whole object postId as keys.
//dbRef.ref('iot3/post').orderByValue().once('value', snap => console.log(snap.val()));

/*          POST WALL        */

//  VALUE return actual object as values
dbRef.ref('iot3/post').once('value', snap => {
    let obj = snap.val();
    for(let item in snap.val()) {
        let data = obj[item];
        createPostElement(item, data.title, data.content, data.author, data.likes, "postWrapper");
    }
});



















//  DOM / Listener / function

let postNow = document.querySelector('form');
postNow.addEventListener('submit', (e) => {
    e.preventDefault();
    //  fetch input data
    let inputTitle = document.getElementById('postTitleInput');
    let inputText = document.getElementById('postTextInput');
    let inputAuthor = document.getElementById('postAuthorInput');
    //  push data to database    
    uploadData(inputAuthor.value, inputText.value, inputTitle.value);
    //  reset form
    inputAuthor.value = '';
    inputText.value = '';
    inputTitle.value = '';
});

//  upload data to database
let uploadData = (author, content, title) => {
    let id = dbRef.ref().child('iot3/post').push().key;
    dbRef.ref().child('iot3/post/'+id).set({
        title: title,
        content: content,
        author: author,
        likes: 0
    })
        .then( () => {
            console.log('Post successfully!');
        })
        .catch( error => {
            console.log(error);
        });
}

//  add data to DOM
let createPostElement = (id, title, content, author, likes, postWrapperId) => {
    let postWrapper = document.getElementById(postWrapperId);
    let post = document.createElement('div');
    post.id = id;
    post.classList.add('post');
    //  title tag
    let titleTag = document.createElement('h1');
    titleTag.id =  'postTitle'
    titleTag.appendChild(document.createTextNode(title));
    //  likes tag
    let likesTag = document.createElement('h1');
    likesTag.appendChild(document.createTextNode(`❤ ${likes}`));
    likesTag.id = 'postLikes';
    //  content tag
    let contentTag = document.createElement('p');
    contentTag.id = 'postBody';
    contentTag.appendChild(document.createTextNode(content));
    //  author tag
    let authorTag = document.createElement('h2');
    authorTag.id = 'postAuthor';
    authorTag.appendChild(document.createTextNode(author));
    //  append to post
    post.appendChild(titleTag);
    post.appendChild(likesTag);
    post.appendChild(contentTag);
    post.appendChild(authorTag);
    //  append tot postWrapper
    postWrapper.appendChild(post)
}

let createTitleOnlyPost = (id, title, likes, postWrapperId) => {
    let postWrapper = document.getElementById(postWrapperId);
    let post = document.createElement('div');
    post.id = 'titlePost';
    //  title tag
    let titleTag = document.createElement('a');
    titleTag.id =  'postTitle'
    titleTag.appendChild(document.createTextNode(title));
    titleTag.href = `#${id}`;
    //  likes tag
    let likesTag = document.createElement('h1');
    likesTag.appendChild(document.createTextNode(`❤ ${likes}`));
    likesTag.id = 'postLikes';
    //  appennd to post
    post.appendChild(titleTag);
    post.appendChild(likesTag);
    //  append to postWrapper
    postWrapper.appendChild(post);
}
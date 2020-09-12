/*

console.log("karan");



//  high order function

const filter = (array, instruction) => {
    let newArr = []
    for (let i=0; i<array.length; i++) {
        newArr.push(instruction(array[i]));
    }
    return newArr;
}

console.log(filter([1,2,3,4], (item) => item**2));

// callback

const map = (arr, callback) => {
    const newArr = filter(arr, callback);
    return newArr;
}

console.log(map(['a', 'b', 'c', 'd'], (item) => item+item));

// built-in functions

let arr = [1,2,3,4,5,6,7,8,9,10]

const iterate = arr.map = item => {
    console.log(item);
}


let a=1, b=1;
console.log(a===b) 


var book = {
    price: 100
}

function updatePrice(bookObj, price) {
    bookObj.price=price;
}

updatePrice(book, 400);

console.log(book.price);

*/

let submitted = () => {
    let getter1 = document.getElementById('name').value;
    let getter2 = document.getElementById('email').value;
    document.getElementById('infoName').innerText = `Name:   ${getter1}`;
    document.getElementById('infoEmail').innerHTML = `Email: ${getter2}`;
}

// let submitBtn = document.getElementById('submit');

// submitBtn.addEventListener('click', submitted);
































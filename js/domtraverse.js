console.log('Hello');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');

// console.log(cont.childNodes); //This will consider all the text,spaces,comments etc.
// console.log(cont.children); //This will not consider text,spaces,comments etc.

let container = document.querySelector('div.container');
console.log(container.children[1].children[0].children);

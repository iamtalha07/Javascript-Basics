console.log('DOM');

//Add a class name to the li element

let ele = document.createElement('li');
let text = document.createTextNode('i am a text node');
ele.append(text);
ele.className = 'childul';
ele.id = 'createdli';
ele.setAttribute('title','mytitle')
// ele.innerText = "Hello this is talha";

let ul = document.querySelector('ul.this');
ul.appendChild(ele);
// console.log(ul);




let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is for elem2');
elem2.appendChild(tnode);
ele.replaceWith(elem2);

// console.log(ele);
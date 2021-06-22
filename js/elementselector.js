//Single Element Selector
let element = document.getElementById('first');
// element = element.className;

//element.style.color = 'red';

// element.innerText = "tHIS IS talha";

// element.innerHTML = "<b>tHIS IS talha</b>";

let sel = document.querySelector('h1');
sel.style.color = 'green';
// console.log(sel);

//Multi Element Selector
let elem = document.getElementsByClassName('child');

let ele = document.getElementsByClassName('container');
//console.log(ele[0].getElementsByClassName('child'));


ele = document.getElementsByTagName('div');
console.log(ele);

// Array.from(ele).forEach(function(elements){
//     element.style.color = 'red';
//     console.log(elements);
    
// });

Array.from(ele).forEach(element => {
    element.style.color = 'red';
    console.log(element);
});
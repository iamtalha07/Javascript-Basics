console.log('Hello from event2')

let btn = document.getElementById('btn');

btn.addEventListener('click',func1);  //Single Click
btn.addEventListener('dblclick',func2);  //Double Click Event Listner 
btn.addEventListener('mousedown',func3);  //It will consider left click right click wheel click 


function func1(e)
{
    console.log('Thanks for using JS',e);
    e.preventDefault();
}

function func2(e)
{
    console.log('Double Click',e);
    e.preventDefault();
}

function func3(e)
{
    console.log('mouse Down',e);
    e.preventDefault();
}

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('You enter no');
// });  // evenet will trigger when you put mouse on the element

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('You exit no');
// }); // evenet will trigger when you remove mouse on the element

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;
    console.log('Move');
}); // evenet will trigger when you move your mouse
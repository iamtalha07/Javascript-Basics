console.log('hello');

// document.getElementById('heading').addEventListener('click',function(e){
// console.log('You have clicked heading');
// let variable = e.target;
//  variable = e.target.className;
//  variable = e.target.classList;
//  variable = e.target.id;

// console.log(variable);
// // location.href = "//google.com";
// });


document.getElementById('heading').addEventListener('mouseover',function(e){
    console.log('You have clicked heading');
    let variable = e.target;
     variable = e.target.className;
     variable = e.target.classList;
     variable = e.target.id;
    
    console.log(variable);
    // location.href = "//google.com";
    });


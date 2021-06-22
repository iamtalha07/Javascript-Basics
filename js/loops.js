// for each

let arr = [2,3,4,5,6,7,8,9]

// arr.forEach(element => {
//     console.log(element);
// });

arr.forEach(function(element){
    console.log(element);
});

let obj = {
    name: 'Talha',
    company: 'Arpatech',
    os: 'Ubuntu'
}

for(let key in obj)
{
    console.log(`${key} this is ${obj[key]}`);
}
//Template Literals
let html = "<h1>HELLO, This is talha</h2>";
html = html.concat('Bin Ishaque',' Arpatech');


// console.log(html);
// console.log(html.length); //length of string
// console.log(html.toLowerCase()); //convert all the letters to lowercase
// console.log(html.toUpperCase()); //convert all the letters to Uppercase

//indexing
// console.log(html[1]);
// console.log(html.indexOf('This'));
// console.log(html.lastIndexOf('<'));
// console.log(html.endsWith('Arpatech')); //Check if the string ends at Arpatech, Datatype Boolean
// console.log(html.substring(0,4)); //returns <h1> 
// console.log(html.slice(0,8));
// console.log(html.split(' ')); //returns <h1> 

let fruit1 = "apple"; 
let fruit2 = "orange";
let name = "Talha";

let myHtml = `Hello ${name}
            <h2>You Like ${fruit1} and ${fruit2}</h2>


            `;
            document.body.innerHTML = myHtml;



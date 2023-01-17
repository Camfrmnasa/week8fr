// very easy challenge//
function min(x, y) {
    if (x > y) {
        return y;
    }
    else {
        return x;
    }
}

console.log(min(14 , 13))

// easy challenge//
let students = [
    {
    firstName: "John",
    lastName: "Doe",
    age: "19"
},
    {
    firstName: "James",
    lastName: "Bond",
    age: "20"
},
    {
    firstName: "Abdul",
    lastName: "Khan",
    age: "36"
}
]

console.log(`Hello, my name is ${students[1].firstName} ${students[1].lastName} 
and I'm ${students[1].age} years old.`);

// Medium challenge
let userInput = parseInt(prompt("type a number here from 1 to 12."));

switch(userInput) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break;
    case 6 :
        console.log("June");
        break;
    case 7 :
        console.log("July");
        break;
    case 8 :
        console.log("August");
        break;
    case 9 :
        console.log("September");
        break;
    case 10 :
        console.log("October");
        break;
    case 11 :
        console.log("November");
        break;
    case 12 :
        console.log("December");
        break;
    default:
        console.log("Type a number 1 to 12 please")
}

// hard challenge
let characters = [
    { /* i = 0 */
    name: "Cam",
    height: 9,
    mass: 8
},
    { /* i = 1 */
    name: "Harry",
    height: 10,
    mass: 45
}
]

var CamBMI = characters[0].mass / (characters[0].height * characters[0].height); /*.098 --> 0.1 */
var HarryBMI = characters[1].mass / (characters[1].height * characters[1].height); /*.45 */

let tomHasAHigherBMI = new Boolean(tomBMI > jerryBMI);

console.log(`Cam has a higher BMI than Harry? ${tomHasAHigherBMI}`);
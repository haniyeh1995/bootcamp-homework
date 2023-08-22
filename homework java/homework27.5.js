let numberID = prompt('please enter your numberID');
alert("your numberID is" + " " + numberID);

let evenNumber = (numberID/2) + 1 ;
result = parseInt(evenNumber);
console.log(result);

// way2
// let i = 0;
// let evenNumber = [];
// while ( i <= numberID ){
//     evenNumber.push(i);
//     i+=2;
// }
// console.log(evenNumber.length);



const firstName = prompt ('please enter your firstname');
const lastName = prompt ('please enter your lastName');
const fullName = firstName + " " + lastName;
alert("your name is" + " " + fullName);

const fullNameWithoutSpace = fullName.split(" ").join('');
console.log(fullNameWithoutSpace.length);



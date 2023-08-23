// 1
let n = prompt('please enter your number');

function prime(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(prime(n));



// 2
const userName = prompt('please enter your name');
const getUserName = userName.split('').reverse('').join('');
console.log(getUserName);



// 3
let userNumber = prompt("please enter your number");

let x;
let y;
let z;
for( x=1; x < userNumber - 1 ; x++ ){
    for( y=x; y < userNumber; y++){
        z=Math.sqrt(x**2 + y**2);
        if(z%1===0){
            if(z<=userNumber){
                console.log(x,y,z);
            }
        }
    }

}



// 4
const nickName = prompt('please enter your nickname');
tosplitName = nickName.split('');
console.log(toArrayName);
const dupplicateChar = [];
let i = 0;
while(i< toArrayName.length){
    const item = tosplitName[i].repeat(2);
    dupplicateChar.push(item);
    i++;

}
console.log(dupplicateChar);

let result = dupplicateChar.join('');
console.log(result);



// 5
const number = "1,2,3,4,5"
const toArrNumber = number.split(",");
let deleteItems;
if(toArrNumber.length <=2){
console.log(null);
}else{
deleteItems= toArrNumber.slice(1,-1).join(' ');
}
console.log(deleteItems);










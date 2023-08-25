// 2

let Arr = [];
let quitEnter = false;

while (quitEnter != true) {
    quitEnter = prompt('please enter your items and at the end type quit');
    if (quitEnter === 'quit') {
        quitEnter = true;

    } else {
        Arr.push(quitEnter);
    }
}
console.log(Arr);

sortArr = Arr.sort();
console.log(sortArr);


let result = Number(sortArr[0]) + Number(sortArr[1]);
console.log(result);
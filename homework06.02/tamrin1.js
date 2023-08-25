
// 1
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

let sum = 0;
for (let i = 0; i <= Arr.length - 1; i++) {
    sum += Number(Arr[i]);
}
console.log(sum);

let average = sum / Arr.length;

console.log(average);
let finalTest = average.toFixed(2);
console.log(finalTest);














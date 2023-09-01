const enterNumber = prompt('please enter your series of number');
const ArrOfNmber = enterNumber.split('');
console.log(enterNumber)
// console.log(ArrOfNmber); 

const descendingOfArr = ArrOfNmber.sort(
  function(x,y){
    return y-x;
  }
);

// console.log(descendingOfArr);

const result = descendingOfArr.join('');
console.log(result);
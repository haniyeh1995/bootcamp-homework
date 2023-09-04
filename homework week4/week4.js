// 1
let userText = prompt ('Please enter your text');
function removeVowels(text) {
    let result = text;
    let vowels = ['a','e','o','u','i','A', 'E', 'I', 'O', 'U'];
    
    result = result.split("").filter(
        (value => !vowels.includes(value))).join("")

    return result;
};
console.log(removeVowels(userText));


// 2
const arr = [];
let quitEnter = false;
while(!quitEnter){
    const userOpinion = prompt('please enter your Names and then type quit')
        if(userOpinion === 'quit'){
        quitEnter = true;
    }else{
        arr.push(userOpinion);
    }
};
function likeThis(names) {
    if (names.length === 0) {
      return 'Nobody likes this.';
    } else if (names.length === 1) {
      return `${names[0]} likes this.`;
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this.`;
    } else {
      return `${names.slice(0, -1).join(', ')} and ${names.slice(-1)[0]} like this.`;
    }
  }
console.log(likeThis(arr));


// 3
const Number1 = prompt('please enter your first series of numbers and split them with comma');
const arrayNumber1 = Number1.split(",");
const Number2 = prompt('please enter your second series of numbers and split them with comma');
const arrayNumber2 = Number2.split(",");

function findArrayDifference(array1, array2) {
    let difference = array1;
    difference=difference.filter(
        (value =>!array2.includes(value)) 
    )
    return difference
}
console.log(findArrayDifference(arrayNumber1,arrayNumber2));


// 4
const TextByUser = prompt('please enter your text');
function countDuplicate(input) {
    let characterCounts = {};
    let duplicatesCount = 0;
    let lowercase = input.toLowerCase();
  
    for (let i = 0; i < lowercase.length; i++) {
      let character = lowercase[i];
      characterCounts[character] = (characterCounts[character] || 0) + 1;
  
      if (characterCounts[character] === 2) {
        duplicatesCount++;
      }
    }
  
    return duplicatesCount;
  }
  
  console.log(countDuplicate(TextByUser));
  

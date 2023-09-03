// 1
let userText = prompt ('Please enter your text');
function removeVowels(text) {
    let result = '';
    let vowels = ['a','e','o','u','i','A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < text.length; i++) {
    
        if (!vowels.includes(text[i])) {
            result += text[i];
            
        }
    }

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
console.log(arrayNumber1);
console.log(arrayNumber2);

function findArrayDifference(array1, array2) {
    let difference = [];
    
    for (let i = 0; i < array1.length; i++) {
      if (!array2.includes(array1[i])) {
        difference.push(array1[i]);
      }
    }
    return difference
}
console.log(findArrayDifference(arrayNumber1,arrayNumber2));

// 4
const userText = prompt('please enter your text');

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
  
  console.log(countDuplicate(userText));
  

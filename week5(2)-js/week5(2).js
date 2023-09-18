// 1
// const userText = prompt('please enter your 10digit number');

// function validateISBN10(isbn) {
//     isbn = isbn.replace(/[-\s]/g, '');
//     if (isbn.length !== 10) {
//       return false;
//     }

//     var sum = 0;
//     for (var i = 0; i < 10; i++) {
//       var digit = isbn[i];
//       if (i === 9 && digit === 'X') {
//         digit = 10;
//       }

//       if (isNaN(parseInt(digit))) {
//         return false;
//       }

//       sum += parseInt(digit) * (i + 1);
//     }

//     return sum % 11 === 0;
//   }

//   console.log(
//     validateISBN10(userText)
//   );

// 2
// const text = prompt('please enter your text');
// let markers = [];

// function stripComments(text, markers) {
//     let lines = text.split('\n');
//     for (let i = 0; i < lines.length; i++) {
//       for (let marker of markers) {
//         let index = lines[i].indexOf(marker);
//         if (index !== -1) {
//           lines[i] = lines[i].substring(0, index).trim();
//           break;
//         }
//       }
//     }
//     return lines.join('\n');
//   }

//   console.log(
//     stripComments(text)
//   );


// 3
// const time = prompt('please enter your time');

// function formatDuration(seconds) {
//     const units = {
//         year: 31536000,
//         month: 2592000,
//         week: 604800,
//         day: 86400,
//         hour: 3600,
//         minute: 60,
//         second: 1
//     };

//     const result = [];

//     for (const [unit, value] of Object.entries(units).reverse()) {
//         if (seconds >= value) {
//             const quotient = Math.floor(seconds / value);
//             result.push(`${quotient} ${quotient > 1 ? unit + 's' : unit}`);
//             seconds %= value;
//         }
//     }

//     if (result.length > 1) {
//         const lastComponent = result.pop();
//         return result.join(", ") + " and " + lastComponent;
//     } else {
//         return result[0] || "0 seconds";
//     }
// }

// console.log(
//     formatDuration(time)
// );


// 4
// const userNumber = prompt('please enter your number');
// function maxSubarraySum(arr) {
    
//     let allPositive = true;
//     let allNegative = true;
//     let sum = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       if (num < 0) {
//         allPositive = false;
//       } else if (num > 0) {
//         allNegative = false;
//       }
  
//       sum += num;
//     }
  
//     if (allPositive) {
//       return sum;
//     } else if (allNegative) {
//       return 0;
//     }

//     let maxSum = 0;
//     let currentSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       currentSum = Math.max(currentSum + arr[i], arr[i]);
//       maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
//   }

//   console.log(maxSubarraySum(userNumber));

  
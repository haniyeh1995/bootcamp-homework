Arr = [];
let quitEnter = false;
while(quitEnter != true){
    const userOpinion = prompt('please enter your opinion and then type quit')
        if(userOpinion === 'quit'){
        quitEnter = true;

    }else{
        Arr.push(userOpinion);

    }
}
console.log(Arr);



// function likeOrDislike(buttons) {
//     let like = false;
//     let dislike = false;
  
//     for (let i = 0; i < buttons.length; i++) {
//       if (buttons[i] === 'Like') {
//         like = !dislike;
//         dislike = false;
//       } else if (buttons[i] === 'Dislike') {
//         dislike = !like;
//         like = false;
//       }
//     }
  
//     if (like && !dislike) {
//       return 'Like';
//     } else if (!like && dislike) {
//       return 'Dislike';
//     } else {
//       return 'Nothing';
//     }
//   }

//   console.log(likeOrDislike(Arr));
// if (Arr.length > 0) {
//     console.log(likeOrDislike(Arr)); 
//   } else {
//     console.log('Nothing');
//   }



  function likeOrDislike(buttons) {
    let answer = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] !== 'Nothing') {
        answer = buttons[i];
      }else if (answer === "like"){
        return "like";
      }else if (answer === "dislike") {
        return "dislike";
      } else {
        return "Nothing";
      }
   
    }    
     return answer;
  }


  console.log(likeOrDislike(Arr));



// function likeOrDislike(buttons) {
//     let like = false;
//     let dislike = false;
    
//     for (let i = buttons.length - 1; i >= 0; i--) {
//       if (buttons[i] === 'Like') {
//         like = !dislike;
//         dislike = false;
//       } else if (buttons[i] === 'Dislike') {
//         dislike = !like;
//         like = false;
//       }
//     }
    
//     if (like) {
//       return 'Like';
//     } else if (dislike) {
//       return 'Dislike';
//     } else {
//       return 'Nothing';
//     }
//   }
  
//   console.log(likeOrDislike(Arr));


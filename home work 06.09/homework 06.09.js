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





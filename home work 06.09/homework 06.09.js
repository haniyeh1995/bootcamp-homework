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
  const rull= {
      'nothing': "  {
          like like
      dislike dislike
    ,
          like  :  {
          like  nothing
          dislike dislike
          }
      
      }
  }
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] !== 'Nothing') {
        answer =rull.answer.buttons[i]
   
    }    
     return answer;
  }


  console.log(likeOrDislike(Arr));





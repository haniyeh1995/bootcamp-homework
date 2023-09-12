// 1
// import './app.css'
// function App() {
//   function onClick(event){
//     alert(event.target.innerHTML)
//   }

//   return (
//     <div onClick={onClick}>
//       hello world
//     </div>
   
//    )
// }

// export default App
// ------------------------------
// 2
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [hex, setHex] = useState('#000000')

//   const changeHandler = (event) => {
//     setHex(event.target.value);
//     console.log(event.target.value);
//   }

//   const sum = () => {

//   }

//   return (
//     <div>
//       <div className='colorbox' style={{backgroundColor: hex,}}>

//       </div>
//       <input value={hex} onChange={changeHandler}/>
//       <input value={hex} onChange={changeHandler}/>
//     </div>
//   )
// }

// export default App
// --------------------------------------------

// homework
import { useState } from 'react'
import './App.css'

function App() {
  const [firstNumb, setFirstNum] = useState('');
  const [secNumb, setSecondNum] = useState('');
  const [final, setFinal] = useState('');
  
  const first = (event) => {
    setFirstNum(event.target.value);
    setFinal(Number(event.target.value) + Number(secNumb));
  }
  const second = (event) => {
    setSecondNum(event.target.value);
    setFinal(Number(event.target.value) + Number(firstNumb));
  }

  
  return (
    <>
      <div id='final'>{final}</div>    
      <div>
      <input className='first' value={firstNumb} placeholder='number1' onChange={first}/>
      <input className='second' value={secNumb} placeholder='number2' onChange={second}/>
      </div>
      


    </>
  )
}

export default App






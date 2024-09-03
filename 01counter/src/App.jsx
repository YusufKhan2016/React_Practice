import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  
  let [counter, setCounter] = useState(0);

  /*here counter is a variable 
  and setCounter is a function which is responsible for updating variable */
  // let counter = 4;

  const addvalue = ()=> {
    // console.log("Clicked",Math.random());
    if(counter<20) counter=counter+1;
    //now I have to call setCounter function
    setCounter(counter);
  }

  const removeValue = ()=> {
    if(counter>0) {
      counter --;
      setCounter(counter);
    }
    
  }
  return (
    <>
     <h1>Hello world</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addvalue}>Add Value</button>
     <br />

     <button
     onClick={removeValue}>Remove Value</button>
     <div className="message"></div>
    </>
  )
}

export default App

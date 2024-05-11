import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=5;
  // useState is a hook:- takes 2 variable, first is on which the operation will be done and second is function which does that operation//
  let [counter,setCounter]=useState(5)
  const addValue=()=>{
    if(counter<20){
      //counter=counter+1;
     // setCounter(counter)
      /* this is bcoz of useState, which sends the code in batches.... 
      the below method is used to inc. the count by 4 directly, as mentioned above setCounter is a function
      that accepts callback function...
      so it goes like ((prevCounter) => prevCounter+1)
      and if you write...*/
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      //this will increase the value only by 1, bcoz useState sends the code in batches

      /*setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)*/
    }
    
    console.log("clicked",counter);
  }


  const removeValue=()=>{
    if(counter>0){
      counter=counter-1;
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App

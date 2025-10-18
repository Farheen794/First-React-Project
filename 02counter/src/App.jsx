import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = ()=>{
    if(count==0) document.getElementById('msg').innerHTML=""
    if(count>=10){
      setCount(count)
      document.getElementById('msg').innerHTML="<h2>Cannot go beyond 10</h2>"
    }
    else{
      setCount(count+1)
    }
  }
  const removeValue=()=>{
    if(count==10) document.getElementById('msg').innerHTML=""
    if(count<=0){
      setCount(count)
      document.getElementById('msg').innerHTML="Cannot be negative"
    }
    else setCount(count-1)
  }

  return (
    <>
     <h1>This is my second React Project</h1>
     <h2>Counter: {count}</h2>
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>Remove value</button>
     <div id="msg"></div>
    </>
  )
}

export default App

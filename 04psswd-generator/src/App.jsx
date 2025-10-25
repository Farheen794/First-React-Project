import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numallowed, setNumallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [psswd,setPsswd] = useState("")
  const [copied, setCopied] = useState(false)


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str+="0123456789"
    if(charallowed) str+="!@#$%67*()*,.~`"

    for (let i = 1; i <=length; i++) {
      let index= Math.floor(Math.random()* str.length)
      pass+=str.charAt(index)      
    }
    setPsswd(pass)
  }, [length, numallowed, charallowed,setPsswd])

  useEffect(()=>{passwordGenerator()},[length,numallowed,charallowed,passwordGenerator])
  const passwordRef=useRef(null)

  const cpyPsswdToClipboard=useCallback(()=>{
    if(passwordRef.current){
      passwordRef.current.select()
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    }
    window.navigator.clipboard.writeText(psswd)
  },[psswd])

  return (
    <>
      <h1 className='text-5xl text-center font-medium text-white'>Password Generator</h1>
      <div className='bg-gray-600 text-white rounded-2xl my-7 mx-auto py-4 max-w-md'>
        <div className='flex overflow-hidden mb-4'>
          <input type='text' value={psswd} className='outline-none py-1 px-3 bg-white text-black mx-5 mt-3  w-full'placeholder='password' ref={passwordRef}readOnly/>
          <button
          className={`px-3 py-0.5 mt-3 shrink-0 mr-4 transition-colors duration-200 
            ${copied ? 'bg-blue-500' : 'bg-blue-800'} text-white`}
          onClick={cpyPsswdToClipboard}
          >
  {copied ? 'Copied!' : 'Copy'}
</button>

        </div>
        <div className='flex text-md gap-x-4'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={8} max={25} value={length} className='cursor-pointer'onChange={(e)=>{setlength(e.target.value)}} />
              <label>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" id="numallowed" value={numallowed} onChange={(e)=>{setNumallowed(e.target.checked)}} />
              <label htmlFor='numallowed'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" id="charallowed" value={charallowed} onChange={(e)=>{setCharallowed(e.target.checked)}} />
              <label htmlFor='charallowed'>Characters</label>
            </div>
        </div>
      </div>
       
    </>
  )
}

export default App

import { useState, useCallback, useEffect, useRef} from "react"


function App() {
  //here we are setting the default values of length , numberAllowed, CharAllowed, password
  const [buttonText, setButtonText] = useState("Copy");
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowd] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  // userCallback hook

  const passwordGenerator = useCallback(()=>{
    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*(){}|~_+-=";
    for(let i =1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    password.current?.setSelectionRange(0,999) // this is used for specific range to copy
    window.navigator.clipboard.writeText(password)
    setButtonText("Copied");
    setTimeout(() => {
      setButtonText("Copy");
    }, 3000);
    
  },[password, buttonText])

  // useEffect hook
  
  useEffect(() =>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-2 px-3 mt-2 rounded-lg" 
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">{buttonText}</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>setLength(e.target.value)}
            />
            <label > Length:{length}</label>
          </div>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowd((prev)=>!prev);
            }} />
              <label htmlFor="numberInput">Numbers</label>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }} />
              <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App

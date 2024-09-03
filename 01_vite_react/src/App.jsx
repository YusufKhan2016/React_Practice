import Chai from "./chai" 

function App() {
  const username = "chai aur code"
  return (
    <>
      <h1>Hello REACT WORLD {username}</h1>  
      
      <Chai />

    </>

    // here the <> symbol is used instead of <div> and it's called fragment 
    // also we can just return 1 element here that's why we have wrapped those h1 and chai in a div 
  )
}

export default App

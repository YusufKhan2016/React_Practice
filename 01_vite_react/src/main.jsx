import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <>
            <h1>Custom App</h1>
        </>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const ReactElement = React.createElement(
    
)
createRoot(document.getElementById('root')).render(
  
    anotherElement 
  
)

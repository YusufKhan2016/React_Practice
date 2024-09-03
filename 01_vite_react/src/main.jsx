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
    'a', 
    {href: 'https://chaicode.com', target: '_blank'},
    'click me to visit chai code website'
)
/*
here react's createElement method have a syntax as we can see by line:
1. tar
2. attribute
3. inner text */
createRoot(document.getElementById('root')).render(
  
    ReactElement
    // <App/>
  
)

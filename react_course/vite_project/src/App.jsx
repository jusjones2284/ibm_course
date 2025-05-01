import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateManagement from './StateManagement'
import MyComponent from './MyComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        
      </p>
      <div>
         <StateManagement />
         <MyComponent />
      </div>
     
    </>
  )
}

export default App

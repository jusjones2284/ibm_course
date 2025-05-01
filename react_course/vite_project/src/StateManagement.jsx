import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function StateManagement() {
    const [color, setColor] = useState("yellow")
    const [isVisible, setIsVisible] = useState(true)
    console.log(color);
    const [changeColor, setChangeColor] = useState(false)
    const [data, setData] = useState(0)

    const updateName = ()=>{
        setColor("green")
        setChangeColor(true)
    }
    const toggleVisibility =()=>{
        setIsVisible(!isVisible)
    }
    // useEffect(()=>{
    //     fetch('https://api.example.json()')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data)
            
    //     })
    //     .catch(error => console.error('Error fetching data: ', error))
    
    // }, [])

    function MyComponent(){
        const [count, setCount] = useState(0)

        const increment =()=>{
            setCount(prevCount => prevCount + 1); 
        }
    }

  return (
    <div>
        <h1>The current color is {color}</h1>
        <button onClick={updateName} disabled={changeColor}>click to update</button>
        <div>
            <h2>Toggle Message</h2>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide Message' : 'Show Message'}
            </button>
            {isVisible && <p>This is a hidden message.</p>}
        </div>
        {/* {<h1>Count: {count}</h1> }
        {<button onClick={increment}>Increment</button>} */}
    </div>
  )
}

export default StateManagement
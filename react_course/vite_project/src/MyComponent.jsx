import React from 'react'
import { useEffect } from 'react'

const MyComponent = () => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('Interval tick');
        }, 1000)

        return ()=>{
            clearInterval(timer)
        }
    }, [])
  return (
    <div>
        <h1>Component with Interval</h1>
    
    </div>
  )
}

export default MyComponent
import  PropTypes  from "prop-types"
import { useState } from "react"



function CounterApp({value}) {


    const [counter , setCounter ] = useState(value)

    const handleAdd = ()=>{
        setCounter(counter + 1)
        
    // setCounter((c)=>c+1)
    }

     const handleSubtract = ()=>{
      setCounter(counter - 1)
     }

    const handleReset = ()=>{
        setCounter(value)
    }

  return (
    <> 
    <h1>Counter app</h1>
    <h2>{counter}</h2>
    <button    onClick={handleAdd}>+1</button> <button    onClick={handleSubtract}>-</button>
    <button    onClick={handleReset}>reset</button>

    </>
  )
}

CounterApp.prototype ={
    value: PropTypes.number
}

export default CounterApp
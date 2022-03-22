import {useState} from 'react'

const UseCounter = (value) => {
    const [counter, setCounter] = useState(value);

    const handleSum= ()=>{
        setCounter(counter+1)
    }

    const handleRes= ()=>{
        setCounter(counter-1)
    }

    const handleReset=()=>{
        setCounter(value)
    }

  return {

        counter,
        handleRes,
        handleReset,
        handleSum
    
  }
}

export default UseCounter

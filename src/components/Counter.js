import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Counter = () => {


    const [counter, setCounter] = useState(10);

    const handleSum= ()=>{
        setCounter(counter+1)
    }

    const handleRes= ()=>{
        setCounter(counter-1)
    }

    const handleReset=()=>{
        setCounter(10)
    }

  return (
    <div>Counter : {counter}
        <Button variant="warning" onClick={handleSum}>Sumar</Button>
        <Button variant="danger" onClick={handleReset}>Reset</Button>
        <Button variant="warning" onClick={handleRes}>Restar</Button>
    </div>

  )
}

export default Counter
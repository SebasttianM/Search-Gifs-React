////Custom Hook

import React from 'react'
import { Button } from 'react-bootstrap';
import UseCounter from '../hooks/UseCounter';

const CounterCustom = () => {

    const{counter, handleRes, handleReset, handleSum} =UseCounter(0)

  return (
    <div>Counter : {counter}
        <Button variant="warning" onClick={handleSum}>Sumar</Button>
        <Button variant="danger" onClick={handleReset}>Reset</Button>
        <Button variant="warning" onClick={handleRes}>Restar</Button>
    </div>

  )
}

export default CounterCustom
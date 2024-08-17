import React, { useState } from 'react'

export default function Counterinterview() {

    let [cha,setcha] = useState(0);

    let inc = ()=>{
        setcha(precounter=>precounter + 1);
        setcha(precounter=>precounter + 1);
        setcha(precounter=>precounter + 1);
        setcha(precounter=>precounter + 1);
        setcha(precounter=>precounter + 1);
    }

    let dec = ()=>{
        setcha(cha - 1);
    }

  return (
    <div>
        <p>{cha}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function () {

    let [cha,setcha] = useState(0);

  return (

    <div>
        <p>{cha}</p>
        <button onClick={()=>setcha(cha < 20?cha + 1:cha)}>Increment</button>
        <button onClick={()=>setcha(cha > 0 ? cha - 1:cha)}>Decrement</button>
    </div>
  )
}

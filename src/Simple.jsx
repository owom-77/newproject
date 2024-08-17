import React, { useReducer, useState } from 'react'

export default function () {

    let reducer = (state,action)=>{
        switch(action.type){
            case 'INC':
                return state < 20? state + 1:state;
            case 'DEC':
                return state > 0 ? state -1 :state; 
                
        }
    }

    let [state,dispatch] = useReducer(reducer,0)

  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>dispatch({type : 'INC'})}>Increment {state}</button>
        <button onClick={()=>dispatch({type : 'DEC'})}>Decrement {state}</button>
        <p>{state}</p>
    </div>
  )
}

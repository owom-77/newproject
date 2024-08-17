import React, { useState, useCallback, useEffect, useRef } from 'react'

export default function Password() {

    let [length,setlength] = useState(8);
    let [num,setnum] = useState(false);
    let [character,setcharacter] = useState(false)
    let [pass,setpass] = useState('');

    let passwordGen = useCallback(()=>{
        let pa = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if(num) str += '1234567890';
        if(character) str+= '!@#$%^&*?>'

        for(let i=1;i<=length;i++){
            pa += str.charAt(Math.floor(Math.random()*str.length));
        }
        setpass(pa);

    },[length,num,character,setpass])

    useEffect(()=>{
        passwordGen();
    },[length,num,character,setpass])

    let show = ()=>{
        password.current?.select();
        password.current?.setSelectionRange(0,4)
        navigator.clipboard.writeText(pass)
    }

    // useRef Hook....

    let password = useRef(null);

    // useRef Hook 

  return (
    <div>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>

            <div className='className="flex shadow rounded-lg overflow-hidden mb-r"'>

                <input type = "text" value = {pass} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={password}></input>

                <button onClick={show} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
            </div>
            <div className='felx text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type = "range" min={6}max={40}v value={length} onChange={(eve)=>setlength(eve.target.value)}className='cursor-pointer'/>
                <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type = "checkbox" defaultChecked = {num} onChange={()=>{setnum(!num)}}></input>
                <label htmlFor='num'>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
                <input type = "checkbox" defaultChecked = {character} onChange={()=>{setcharacter(!character)}}></input>
                <label htmlFor='charachter'>Character</label>
            </div>

            </div>
        </div>
    </div>
  )
}

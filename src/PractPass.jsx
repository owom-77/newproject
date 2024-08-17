import React, { useCallback, useEffect, useState,useRef } from 'react'

export default function PractPass() {

    let [pass,setpass] = useState('');
    let [length,setlength] = useState(8);
    let [number,setnumber] = useState(false);
    let [lower,setlower] = useState(false);
    let [upper,setupper] = useState(false);
    let [symbol,setsymbol] = useState(false);

    /*let passwordGen = useCallback(()=>{

        let str = "";
        let pa = '';

        if(number) str += '1234567890';
        if(lower) str += 'abcdefghijklmnopqrstuvwxyz';
        if(upper) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(symbol) str += '!@#$%^&*?>';

        for(let i=1;i<=length;i++){
            pa += str.charAt(Math.floor(Math.random()*str.length));
        }
        setpass(pa);

    },[length,upper,lower,symbol,number,setpass]);

    useEffect(()=>{
        passwordGen();
    },[length,upper,lower,symbol,number,setpass])*/

    let myRef = useRef(null);

    let copy = ()=>{
        myRef.current?.select();
        myRef.current?.setSelectionRange(0,4);
        navigator.clipboard.writeText(pass)
    }
    
    let show = ()=>{
        let str = "";
        let pa = '';

        if(number) str += '1234567890';
        if(lower) str += 'abcdefghijklmnopqrstuvwxyz';
        if(upper) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(symbol) str += '!@#$%^&*?>';

        for(let i=1;i<=length;i++){
            pa += str.charAt(Math.floor(Math.random()*str.length));
        }
        setpass(pa);
    }

  return (
    <div>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>

            <div className='className="flex shadow rounded-lg overflow-hidden mb-r"'>

                <input type = "text" value = {pass} className='outline-none w-full py-1 px-3' placeholder='Password' ref={myRef} ></input>

                <button  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copy}>Copy</button>
            </div>
            <div className='felx text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type = "range" value={length} min={6}max={40}v className='cursor-pointer' onChange={(eve)=>setlength(eve.target.value)}/>
                <label>Length :{length} </label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type = "checkbox" defaultChecked = {number} onChange={()=>setnumber(!number)}></input>
                <label htmlFor='num'>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
                <input type = "checkbox"  defaultChecked = {lower} onChange={()=>setlower(!lower)}></input>
                <label htmlFor='lower'>Lower</label>
            </div>
            
            <div className='flex items-center gap-x-1'>
                <input type = "checkbox"  defaultChecked = {upper} onChange={()=>setupper(!upper)}></input>
                <label htmlFor='lower'>upper</label>
            </div>

            <div className='flex items-center gap-x-1'>
                <input type = "checkbox"  defaultChecked = {symbol} onChange={()=>setsymbol(!symbol)}></input>
                <label htmlFor='lower'>Symbol</label>
            </div>

            <div className='flex items-center gap-x-1'>
                <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={show}>Click</button>
            </div>

            </div>
        </div>
    </div>
  )
}

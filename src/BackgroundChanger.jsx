import React, { useState } from 'react'

export default function BackgroundChanger() {

    let array = ["black","white","red","green","yellow"];

    let [cha,setcha] = useState('');

    let show = (ind)=>{
        setcha(ind);
    }

  return (
    <div className = {`bg-${cha} w-[100] h-[100]`} style={{
        backgroundColor:'white',
        
    }}>
        <div>
            {array.map((val,i)=>{
                return (
                    <p className='inline m-10 my-auto' onClick={()=>show(val)}>{val}</p>
                )
            })}
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    let data = useLoaderData()

    /*let [data,setdata] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/owom-77')
        .then((res)=>res.json())
        .then((result)=>{
            setdata(result);
        })
    },[])*/

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers {data.followers}</div>
  )
}

export let github_loader = async ()=>{
    let response = await fetch('https://api.github.com/users/owom-77')

    return response.json();
}
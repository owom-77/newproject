import { useState,useEffect } from "react";

export default function UseCurrency(currency){

    let [data,setdata] = useState('');

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((result)=>{
            setdata(result[currency])
        })
    },[currency])

    console.log(data)

    return(
        data
    )
}

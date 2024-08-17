import React from 'react'
import Card from './Card'

export default function Tailfirst() {

    let array = ["omkar","aditya","rohan","jay"];

    let info = {
        omkar : 'I am omkar',
        aditya :'I am aditya',
        rohan : 'I am rohan',
        jay : 'i am jay'
    }

    let btn = {
        omkar : 'Click to Omkar Profile',
        aditya : 'Click to Aditya Profile',
        rohan : 'Click to Rohan Profile',
        jay : 'Click to Jay Profile'
    }

    return (
        <div>
            <h1 className='text-3xl font-bold underline bg-gray-900 text-white p-4 rounded-xl inline-block mt-40'>Hi...Omkar</h1>

            {array.map((val,i)=>{
                return(
                    <Card data = {val} info = {info} btn = {btn} key={i}/>  
                )
            })}
            

        </div>
    )
}

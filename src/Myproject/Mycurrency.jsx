import React, { useState } from 'react'
import MyusecurrencyHook from './MyusecurrencyHook';
import MyinputBox from './MyinputBox';

export default function Mycurrency() {    

    let [amount,setamount] = useState(0);
    let [from,setfrom] = useState('inr');
    let [to,setTo] = useState('usd');
    let [amountconverter,setamountconverter] = useState(0);

    let currencyInfo = MyusecurrencyHook(from);

    let options = Object.keys(currencyInfo);

    let swap = ()=>{
        setfrom(to)
        setTo(from)
    }

    let convert = (eve)=>{
        setamountconverter(amount * currencyInfo[to])

        eve.preventDefault();
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1723791749202-561abfb9b81a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form onClick={convert}>

                        <div className="w-full mb-1">
                            <MyinputBox
                                label = 'From'
                                amount = {amount}
                                setamount = {setamount}
                                options = {options}
                                currencyChange = {setfrom}
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <MyinputBox
                                label = 'To'
                                amount={amountconverter}
                                options={options}
                                currencyChange = {setTo}
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                           Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

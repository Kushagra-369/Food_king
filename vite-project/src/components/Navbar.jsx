import React from 'react'
import { FaCrown } from "react-icons/fa6";




export default function Navbar() {


    let data = [
        { title1: "Eat", dropdown: ["pizza", "Burger" ] },
        { title1: "Drink", dropdown: ["Coldrinks", "Juices"] },
        { title1: "Method", dropdown: ["Home delivery", "Offline",] },
        { title1: "About", dropdown: "" },
    ];

    return (
        <div >
            <div className=' flex justify-center gap-20 items-center py-15 bg-yellow-300 ' style={{backgroundImage:'url(https://burgerpizzalover.in/wp-content/uploads/2025/01/Pizza-burger-coldrink.webp)', backgroundRepeat: 'no-repeat',backgroundSize: '300px'}}>

                <div className=' text-6xl flex gap-5 items-center '>
                    <h1><FaCrown /></h1>
                    <h1>FOOD KING </h1>
                </div>

                <div className=' flex  gap-10'>
                    {
                        data.map((item, index) => (
                            <div key={index} className=' relative group cursor-pointer'>
                                <h1 className='text-xl font-semibold'>{item.title1}</h1>

                                {item.dropdown.length > 0 && (

                                    <div className=' absolute top-full left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-50 '>
                                        {item.dropdown.map((subitem, subindex) => (
                                            <div key={subindex} className='px-4 py-2 hover:bg-yellow-200'>
                                                {subitem}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>

            
        </div>
    )
}

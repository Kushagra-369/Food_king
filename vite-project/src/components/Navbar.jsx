import React, { useState } from 'react'
import { FaCrown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";



export default function Navbar() {


    let data = [
        { title1: "Eat", dropdown: ["pizza", "Burger"] },
        { title1: "Drink", dropdown: ["Coldrinks", "Juices"] },
       
        { title1: "About", dropdown: "" },
    ];

    const [text, settext] = useState(false)

    const cross = () => {
        settext(!text)
    }
    return (
        <div >
            <div className=' flex justify-center gap-20 items-center py-15 bg-yellow-300 ' style={{ backgroundImage: 'url(https://burgerpizzalover.in/wp-content/uploads/2025/01/Pizza-burger-coldrink.webp)', backgroundRepeat: 'no-repeat', backgroundSize: '300px' }}>

                <div className=' text-6xl flex gap-5 items-center '>
                    <h1><FaCrown /></h1>
                    <h1>FOOD KING </h1>
                </div>

                <div className='hidden  md:flex  gap-10'>
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

                <div onClick={cross} className=' items-center md:hidden block text-3xl'>
                    {text ? <GiSplitCross /> : <FaBars />}
                </div>

                {
                    text && (
                        <ul className=' bg-gray-500 text-2xl text-yellow-300 absolute top-28  right-20'>
                            {
                                data.map((item, index) => (
                                    <div key={index} className=' relative group cursor-pointer'>
                                        <h1 className='text-2xl py-2 font-semibold'>{item.title1}</h1>

                                        {item.dropdown.length > 0 && (

                                            <div className=' absolute top-2 right-2  w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-50 '>
                                                {item.dropdown.map((subitem, subindex) => (
                                                    <div key={subindex} className='text-xl  text-black px-4 py12 hover:bg-yellow-200'>
                                                        {subitem}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))
                            }
                        </ul>
                    )
                }

            </div>


        </div>
    )
}

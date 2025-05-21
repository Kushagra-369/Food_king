import React, { useState } from 'react'
import { FaCrown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";
import { Link, Element } from 'react-scroll';



export default function Navbar() {


    let data = [
        { title1: "Eat", dropdown: ["pizza", "Burger"], title2 : ["pizza","burger"] },
        { title1: "Drink", dropdown: ["Coldrinks", "Juices"] , title2 : ["coldrinks","juices"] },
       
        { title1: "About", dropdown: "" },
    ];

   

  

    const [text, settext] = useState(false);
        const [activeDropdown, setActiveDropdown] = useState(null); 

    

    const cross = () => {
        settext(!text);
        setActiveDropdown(null);
    }

     const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };
    return (
        <div >
            <div className=' flex justify-center gap-20 items-center py-15 bg-black md:bg-yellow-300 text-white md:text-black' style={{ backgroundImage: 'url(https://burgerpizzalover.in/wp-content/uploads/2025/01/Pizza-burger-coldrink.webp)', backgroundRepeat: 'no-repeat', backgroundSize: '300px' }}>

                <div className=' text-6xl flex gap-5 items-center '>
                    <h1 ><FaCrown /></h1>
                    <h1>FOOD KING </h1>
                </div>

                <div className='hidden  md:flex  gap-10'>
                    {
                        data.map((item, index) => (
                            <div key={index} className=' relative group cursor-pointer'>
                                <h1 className='text-xl hover:text-red-600 font-semibold'>{item.title1}</h1>

                                {item.dropdown.length > 0 && (

                                    <div className=' absolute top-full left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-50 '>
                                        {item.dropdown.map((subitem, subindex) => (
                                            <Link to = {item.title2[subindex]} smooth={true} duration={600}>
                                                <div key={subindex} className='px-4 py-2 hover:bg-yellow-200'>
                                                {subitem}
                                            </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>

                <div onClick={cross} className=' md:hidden block px-5 z-50 text-3xl'>
                    {text ? <GiSplitCross /> : <FaBars />}
                </div>

                {
                    text && (
                        <ul className=' md:hidden fixed top-0 right-0 h-full w-full bg-gray-800 text-yellow-300 p-10 z-40 shadow-lg transition-all duration-300'>
                            {
                                data.map((item, index) => (
                                    <div key={index} className=' relative group cursor-pointer hover:text-red-600'>
                                        <h1 className='text-2xl py-2 font-semibold' onClick={() => toggleDropdown(index)}>{item.title1}</h1>

                                        {(item.dropdown.length > 0 && activeDropdown === index) && (

                                            <div className=' absolute top-2   w-40 bg-white rounded shadow-lg opacity-100 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-50 '>
                                                {item.dropdown.map((subitem, subindex) => (
                                                    <Link to = {item.title2[subindex]} smooth={true} duration={600} onClick={cross} >
                                                <div key={subindex} className='px-4 py-1 text-black hover:bg-yellow-200'>
                                                {subitem}
                                            </div>
                                            </Link>
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

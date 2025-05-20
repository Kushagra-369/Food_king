import React from 'react'
import image1 from '../assets/images/pizzza1.webp'
import image2 from '../assets/images/pizza2.webp'
import image3 from '../assets/images/pizza3.webp'

export default function Pizza() {
    return (
        <div>
            <div className=' bg-cyan-200 py-15 px-10'>
                <h1 className=' text-8xl'>PIZZA</h1>
                <div className=' py-10 flex justify-around'>
                    <a href=""> <div>
                        <h1 className=' px-17 text-2xl' >Pizza1</h1>
                        <img className=' py-3 h-50 w-50 rounded-4xl' src={image1} alt="" />
                        <div className=' border-2 h-20 w-50 text-center bg-red-600 text-yellow-400 items-center '>
                            <h1 className=' items-center py-5 text-2xl '>Order now</h1>
                        </div>
                    </div></a>
                    <a href=""> <div>
                        <h1 className=' px-17 text-2xl' >Pizza2</h1>
                        <img className=' py-3 h-50 w-50 rounded-4xl' src={image2} alt="" />

                    </div></a>
                    <a href=""> <div>
                        <h1 className=' px-17 text-2xl' >Pizza1</h1>
                        <img className=' py-3 h-50 w-50 rounded-4xl' src={image3} alt="" />

                    </div></a>
                </div>

                <div>
                    <div className='py-10 text-4xl'>
                        <h1>Make Your Own Pizza</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

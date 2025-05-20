import React from 'react'
import image1 from '../assets/images/burger1.jpg'
import image2 from '../assets/images/burger2.jpg'
import image3 from '../assets/images/burger3.jpg'
import { TypeAnimation } from 'react-type-animation';

export default function Burger() {
    return (
        <div>
            <div className=' bg-cyan-200 py-15 px-10'>
                <TypeAnimation
                    sequence={[
                        'BURGER',
                        1000,
                        'Order now',
                        1000,
                    ]}
                    wrapper="span"
                    speed={12}
                    style={{ fontSize: '6em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <div className=' py-10 flex justify-around'>
                   <a href=""> <div>
                        <h1 className=' px-17 text-2xl' >Burger1</h1>
                        <img className=' py-3 h-50 w-50 rounded-4xl' src={image1} alt="" />
                        <div className=' border-2 h-20 w-50 text-center bg-red-600 text-yellow-400 items-center '>
                            <h1 className=' items-center py-5 text-2xl '>Order now</h1>
                        </div>
                    </div></a>
                   <a href=""> <div>
                        <h1 className=' px-17 text-2xl' >Burger2</h1>
                        <img className=' py-3 h-50 w-50 rounded-4xl' src={image2} alt="" />
                            <div className=' border-2 h-20 w-50 text-center bg-red-600 text-yellow-400 items-center '>
                            <h1 className=' items-center py-5 text-2xl '>Order now</h1>
                        </div>
                    </div></a>
                   <a href=""> <div>
                        <h1 className=' px-17 text-2xl' >Burger3</h1>
                        <img className=' py-3 h-50 w-50 rounded-4xl' src={image3} alt="" />
                            <div className=' border-2 h-20 w-50 text-center bg-red-600 text-yellow-400 items-center '>
                            <h1 className=' items-center py-5 text-2xl '>Order now</h1>
                        </div>
                    </div></a>
                </div>

                <div>
                    <div className='py-10 text-4xl'>
                        <h1>Make Your Own Burger</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

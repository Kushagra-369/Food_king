import React from 'react'
import image1 from '../assets/images/pizzza1.webp'
import image2 from '../assets/images/pizza2.webp'
import image3 from '../assets/images/pizza3.webp'
import { TypeAnimation } from 'react-type-animation';


export default function Pizza() {

   let data = [
    {title1 : "Pizza 1 ", title2 :"Order now" , title3 : image1},
    {title1 : "Pizza 2 ", title2 :"Order now" , title3 : image2},
    {title1 : "Pizza 3 ", title2 :"Order now" , title3 : image3}
   ];

    return (
        <div className=' bg-cyan-200'>
            <div className='  py-15 px-10'  >
                <TypeAnimation
                    sequence={[
                        'PIZZA',
                        1000,
                        'Order now',
                        1000,

                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ fontSize :'4em' , display:'inline-block'}}
                    md:style={{ fontSize: '6em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <div className=' gap-2 py-10 flex justify-around items-center text-center' >

                    {
                        data.map((item,key) => (
                            <a href=""> <div>
                        <h1 className=' md:px-17 text-2xl' >{item.title1}</h1>
                        <img className=' py-3 h-25 w-25 md:h-50 md:w-50 rounded-4xl' src={item.title3} alt="" />
                        <div className=' border-2 md:h-20 md:w-50 text-center hover:bg-red-700 bg-red-600 text-yellow-400 items-center '>
                            <h1 className=' items-center py-5 text-2xl '>{item.title2}</h1>
                        </div>
                    </div></a>
                        ))
                    }

                </div>

                <div>
                    <div className='py-10 text-2xl md:text-4xl'>
                        <h1>Make Your Own Pizza</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

import React from 'react'
import image1 from '../assets/images/burger1.jpg'
import image2 from '../assets/images/burger2.jpg'
import image3 from '../assets/images/burger3.jpg'
import { TypeAnimation } from 'react-type-animation';

export default function Burger() {
    let data = [
        {title1 : "Burger 1 ", title2 :"Order now" , title3 : image1},
        {title1 : "Burger 2 ", title2 :"Order now" , title3 : image2},
        {title1 : "Burger 3 ", title2 :"Order now" , title3 : image3}
       ];
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
              <div className=' py-10 flex justify-around items-center text-center'>

                    {
                        data.map((item,key) => (
                            <a href=""> <div>
                        <h1 className=' md:px-17 text-2xl' >{item.title1}</h1>
                        <img className=' py-3 h-25 w-25 md:h-50 md:w-50 rounded-4xl' src={item.title3} alt="" />
                        <div className=' border-2 md:h-20 md:w-50 text-center bg-red-600 hover:bg-red-700 text-yellow-400 items-center '>
                            <h1 className=' items-center py-5 text-2xl '>{item.title2}</h1>
                        </div>
                    </div></a>
                        ))
                    }

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

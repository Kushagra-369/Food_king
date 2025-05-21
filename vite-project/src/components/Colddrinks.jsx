import React from 'react'
import image1 from '../assets/images/fanta.jpg'
import image2 from '../assets/images/coca-cola.jpg'
import image3 from '../assets/images/thumbs-up.jpg'
import { Link, Element } from 'react-scroll';

import { TypeAnimation } from 'react-type-animation';

export default function Coldrinks() {
    let data = [
        {title1 : "Fanta", title2 :"Order now" , title3 : image1},
        {title1 : "Coca-Cola ", title2 :"Order now" , title3 : image2},
        {title1 : "Thumbs-up ", title2 :"Order now" , title3 : image3}
       ];
    return (
       <Element name = "coldrinks">
         <div>
            <div className=' bg-cyan-200 py-15 px-10'>
                <TypeAnimation
                    sequence={[
                        'COLDRINKS',
                        1000,
                        'Order now',
                        1000,
                    ]}
                    wrapper="span"
                    speed={12}
                    style={{ fontSize :'3em' , display:'inline-block'}}
                    md:style={{ fontSize: '6em', display: 'inline-block' }}
                    repeat={Infinity}
                />
              <div className='gap-3 py-10 flex justify-around items-center text-center'>

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

                
            </div>
        </div>
       </Element>
    )
}

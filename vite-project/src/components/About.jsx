import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";



export default function About() {

    let data = [
        {title1 : "Eternal" , title2 : ["Food king" , "Blinkit" , "district" , "Feeding India"]},
        {title1 : "For restraunt" , title2 : ["Apps for you" , "Partner with us" ]},
        {title1 : "For Delivery partners" , title2 : ["Apps for you" , "Partner with us"]},
        {title1 : "Learn more" , title2 : ["Privacy" , "Security" , "Terms of service" , "Blog "]},
    ];

    let data2 =[
                {title1 : "Social links" , title2 : [<CiLinkedin /> , <CiInstagram />,<CiYoutube />,<FaFacebook />]},

    ]
  return (
    <div className=' bg-black text-white  h-full w-full py-30'>

        <h1 className=' text-7xl px-23'>Food King</h1>
            
        <div className=' px-7 grid grid-cols-2 md:flex justify-center gap-20  py-15 '>
        {
            data.map((item,key) =>(
                    <h1 key={key} className='  text-3xl'>{item.title1}
                    <div className=' py-5 text-gray-400 '>
                        {
                        item.title2.map((subitem,subkey) =>(
                            <a href=""><h1 className=' hover:text-white text-xl py-2' key={subkey}>{subitem}</h1></a>
                        ))
                    }
                    </div>
                    </h1>
                    
                ))
            }

            {
            data2.map((item,key) =>(
                    <h1 key={key} className='  text-3xl'>{item.title1}
                    <div className=' py-5 flex text-white gap-3 '>
                        {
                        item.title2.map((subitem,subkey) =>(
                            <a href=""><h1 className=' hover:text-white text-3xl py-2' key={subkey}>{subitem}</h1></a>
                        ))
                    }
                    </div>
                    </h1>
                    
                ))
            }

            </div>

            


        
    </div>
  )
}

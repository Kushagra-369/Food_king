import React from 'react'
import image1 from '../assets/images/OniBuns.jpg'
import { href, Link } from 'react-router-dom'


export default function Onibunsfinal() {


    let data = [
        { href: '', href2: "" }
    ]
    return (
        <div className=' flex justify-center bg-cyan-200'>
            <div className=' border-2 border-red-600 h-100 w-70 bg-red-500'>
                <h1 className=' text-2xl text-center'>Your order is ready</h1>
                <img className=' h-60 w-70 py-2' src={image1} alt="" />
                <h1 className=' text-2xl text-center py-2'>Order now</h1>
                <div className='py-5 flex p-2 gap-2  text-yellow-300'>
                    {
                        data.map((item, key) => (
                            <Link to={item.href}><h1 className=' border-2 border-black h-10 w-30 text-2xl bg-blue-500 hover:bg-blue-700 items-center text-center'>yes</h1></Link>

                        ))
                    }
                    {
                        data.map((item, key) => (
                            <Link to={item.href2}><h1 className=' border-2 border-black h-10 w-30 text-2xl bg-blue-500 hover:bg-blue-700 items-center text-center'>no</h1></Link>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

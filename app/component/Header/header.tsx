import React from 'react'
import Link from 'next/link'
const page = () =>{
  return(
    <div className="bg-blue-800 h-[100px]">
        <h1 className=" inline-flex text-4xl font-semibold text-white px-10 py-4 mt-4" >Modern Era</h1>
        <ul className="inline-flex space-x-20 sm:mt-0 mt-4 ml-80 text-2xl" >
        <li><Link  href="/" className="hover:text-white ">Home</Link></li>
        <li><Link  href="/contact" className="hover:text-white ">Contact</Link></li>
        <li><Link  href="/About" className="hover:text-white ">About</Link></li>
        <li><Link  href="/faqs" className="hover:text-white ">FAQs</Link></li>
        </ul>
    
        <ul className="inline-flex space-x-9 sm:mt-0 mt-4 ml-60 text-[20px]" >
            <li><Link href="#!" className="hover:text-blue-400">Login</Link></li>
            <li><Link href="#!" className="hover:text-blue-400">Signup</Link></li>
        </ul>
    </div>

  )
}
export default page
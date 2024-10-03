import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-around font-bold text-3xl bg-[#FF6500] p-2  text-white items-center sticky top-0'>
            <div className='flex items-center justify-center'>
                <img src="/images/key.png" className='w-10 invert' alt="" />
                <h1 className='mx-2 '>
                    {/* Here I can Use Image from Next/Image */}
                    KeyGuard
                </h1>
                
            </div>
            <ul className='flex mx-4 gap-3 font-bold text-xl'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>

        </nav>
    )
}

export default Navbar

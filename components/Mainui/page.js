import React from 'react'


const Mainui = () => {
    return (
        <>
            <div className='background_color'>
                <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#FF6500] opacity-20 blur-[100px]"></div></div>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center  my-10 text-[#1E3E62]'>
                <div className='flex gap-2 justify-center items-center '>
                    <img src="/images/key.png" className='w-10' alt="" />
                    <h1 className='font-bold text-3xl'><span className='font-bold text-4xl text-[#FF6500]'>&lt;</span>Key<span className='text-[#FF6500]'>Guard/</span><span className='font-bold text-4xl text-[#FF6500]'>&gt;</span></h1>
                </div>
                <p className='font-bold'>Your Own Password Manager</p>
            </div>


            <div className='input_fields flex flex-col w-[80%] mx-auto my-10 '>
                <form className='flex flex-col gap-3' action="/">
                    <div className='flex gap-3'>
                        <label className='font-bold text-lg text-[#1E3E62] mx-1 px-6 cursor-pointer' htmlFor="link">Link:</label>
                        <input className="border-2 w-full border-[#FF6500] rounded-3xl px-5 font-bold text-[#1E3E62] text-xl" type="text" placeholder='Enter the Website link' id='link'/>
                    </div>
                    <div className='flex gap-3'>
                        <label className='font-bold text-lg text-[#1E3E62] mx-1 cursor-pointer' htmlFor="username">Username:</label>
                        <input className='border-2 w-[80%] border-[#FF6500] rounded-3xl px-5 text-xl font-bold text-[#1E3E62]' type="text" name="" id="username" placeholder='Username' />
                        <label className='font-bold text-lg text-[#1E3E62] mx-1 cursor-pointer' htmlFor="password">Passsword:</label>
                        <input className='border-2 w-[80%] border-[#FF6500] rounded-3xl px-5 text-xl font-bold text-[#1E3E62]' type="text" name="" id="password" placeholder='Passsword' />
                    </div>
                    <div className='text-center my-2'>
                        <input className='font-bold text-lg text-white bg-[#FF6500] px-4 py-1 rounded-lg cursor-pointer hover:scale-105' type="submit" value="Add Password" />
                    </div>
                </form>
            </div>

            <div className='password_cards'>

            </div>

        </>
    )
}

export default Mainui

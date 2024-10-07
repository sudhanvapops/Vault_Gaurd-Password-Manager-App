"use client"

import { formsubmit } from '@/_actions/formsubmit'
import React, { useState, useRef, useEffect } from "react"
import { load_data } from '@/_actions/load_data'


const Mainui = () => {

    const [data, setData] = useState([])
    let ref = useRef()

    // To Load The Data From the Database
    const fetchData = async () => {
        try {
            const data = await load_data(); 
            setData(data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className='background_color'>
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#FF6500] opacity-20 blur-[100px]"></div></div>
            </div>

            <div className='flex flex-col gap-2 justify-center items-center  my-10 text-[#1E3E62]'>
                <div className='flex gap-2 justify-center items-center '>
                    <img src="/images/key.png" className='w-10' alt="" />
                    <h1 className='font-bold text-3xl'><span className='font-bold text-4xl text-[#FF6500]'>&lt;</span>Key<span className='text-[#FF6500]'>Guard/</span><span className='font-bold text-4xl text-[#FF6500]'>&gt;</span></h1>
                </div>
                <p className='font-bold'>Your Own Password Manager</p>
            </div>

            <div className='form input_fields flex flex-col w-[80%] mx-auto my-10 '>
                <form className='flex flex-col gap-3' ref={ref} action={
                    async (formdata) => {
                        await formsubmit(formdata)
                        ref.current.reset()
                        fetchData()
                    }}>
                    <div className='flex gap-3'>
                        <label className='font-bold text-lg text-[#1E3E62] mx-1 px-6 cursor-pointer' htmlFor="link_">Site:</label>
                        <input className="border-2 w-[115%] border-[#FF6500] rounded-3xl px-5 font-bold text-[#1E3E62] text-xl" type="text" placeholder='Enter the Website link' id='link_' name='link' />

                        <label className='font-bold text-lg text-[#1E3E62] px-6 cursor-pointer' htmlFor="sitename">SiteName:</label>
                        <input className="border-2 w-[118%] border-[#FF6500] rounded-3xl px-5 font-bold text-[#1E3E62] text-xl" type="text" placeholder='SiteName' id='sitename' name='sitename' />
                    </div>
                    <div className='flex gap-3'>
                        <label className='font-bold text-lg text-[#1E3E62] mx-1 cursor-pointer' htmlFor="username">Username:</label>
                        <input className='border-2 w-[80%] border-[#FF6500] rounded-3xl px-5 text-xl font-bold text-[#1E3E62]' type="text" name="username" id="username" placeholder='Username' />
                        <label className='font-bold text-lg text-[#1E3E62] mx-1 cursor-pointer' htmlFor="password">Passsword:</label>
                        <input className='border-2 w-[80%] border-[#FF6500] rounded-3xl px-5 text-xl font-bold text-[#1E3E62]' type="text" name="password" id="password" placeholder='Passsword' />
                    </div>
                    <div className='text-center my-2'>
                        <input className='font-bold text-lg text-[#FF6500]  border-2 border-[#FF6500] 
                        px-4 py-1 rounded-lg cursor-pointer
                        hover:scale-105 hover:bg-[#FF6500] hover:text-white
                        transition duration-75'
                            type="submit" value="Add Password" />
                    </div>
                </form>
            </div>

            <div className='password_tables flex flex-col items-center justify-center text-[#1E3E62] my-10'>
                <h2 className='font-bold text-4xl my-4'>Your Passwords</h2>
                <table className="table-auto  text-center w-[80vw] overflow-hidden rounded-lg">
                    <thead className='bg-[#FF6500] text-white font-bold text-xl'>
                        <tr className='border border-black'>
                            <th className='min-w-32 p-2'>SiteName</th>
                            <th className='min-w-32 p-2'>UserName</th>
                            <th className='min-w-32 p-2'>Password</th>
                        </tr>
                    </thead>
                    <tbody className='font-bold bg-orange-200'>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index} className='border border-black'>
                                    <td className='min-w-32 p-2'>{item.siteName}</td>
                                    <td className='min-w-32 p-2'>{item.username}</td>
                                    <td className='min-w-32 p-2'>{item.password}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="p-4">No passwords found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Mainui

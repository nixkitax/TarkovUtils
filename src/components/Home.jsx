import React from 'react';
import { useEffect } from 'react';
const Home = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
    return (
        <div className=" py-10 px-10 rounded-xl shadow-xl mt-10 flex justify-center items-center flex-col backdrop-saturate-200 "
            style={{
                background:
                    "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
            }}>

            < div className='text-white justify-center items-center flex flex-col' >
                <h1 className='text-5xl '> Tarkov Tools </h1>
                <span className='text-4xl mt-20 hover:underline hover:cursor-pointer'>META EQUIP</span>
                <span className='text-4xl mt-5 hover:underline hover:cursor-pointer'>ITEMS</span>
                <span className='text-4xl mt-5 hover:underline hover:cursor-pointer'><a href="/maps">MAPS</a></span>
                <span className='text-4xl mt-5 hover:underline hover:cursor-pointer'>QUESTS</span>
            </div >

        </div >
    )
}

export default Home
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setIsVisible(true);

        return () => {
            document.body.style.overflow = "scroll";
        };
    }, []);

    return (
        <div className={`home-container relative py-10 px-10 rounded-xl shadow-xl -mt-24 h-full w-full flex justify-center items-center flex-col ${isVisible ? 'animate-fade-in' : ''}`}>
            <div className="background-video absolute inset-0 z-0">
                <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="/videos/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='text-white flex flex-col relative z-10 w-full' style={{
                background:
                    "linear-gradient(to top right, rgba(125,125,125,.60), rgba(6,13,12,.95))",
            }}>
                <h1 className='text-5xl font-bold ml-8 my-10'> Tarkov Tools </h1>
                <span className='text-4xl mt-10 hover:underline hover:cursor-pointer ml-8 animate-fade-in'>
                    META EQUIP
                    <span className="ml-2 transition-transform transform inline-block">➡️</span>
                </span>
                <span className='text-4xl hover:underline hover:cursor-pointer ml-8 animate-fade-in'>
                    ITEMS
                    <span className="ml-2 transition-transform transform inline-block">➡️</span>
                </span>
                <span className='text-4xl hover:underline hover:cursor-pointer ml-8 animate-fade-in'>
                    <a href="/maps" className="animate-fade-in">MAPS</a>
                    <span className="ml-2 transition-transform transform inline-block">➡️</span>
                </span>
                <span className='text-4xl hover:underline hover:cursor-pointer ml-8 mb-10 animate-fade-in'>
                    QUESTS
                    <span className="ml-2 transition-transform transform inline-block">➡️</span>
                </span>
            </div>
        </div>
    )
}

export default Home;

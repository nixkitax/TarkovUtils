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
        <div className="home-container relative h-full w-full flex justify-center items-center">
            <div className={`py-10 px-10 rounded-xl shadow-xl h-full flex justify-center items-center flex-col ${isVisible ? 'animate-fade-in' : ''}`}>
                <div className="background-video absolute inset-0 z-0" style={{ top: '-100px' }}> {/* Modifica top per spostare il video più in alto */}
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="/videos/background.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='flex flex-col justify-center items-center w-full z-10 -mt-44'>
                    <h1 className='text-6xl text-white font-extrabold mb-10'> tarkools </h1>
                    <div className='flex flex-col'>
                        <span className='text-5xl text-white hover:bg-white hover:text-black hover:cursor-pointer transition-colors duration-300'>
                            - meta equip
                        </span>
                        <span className='text-5xl text-white hover:bg-white hover:text-black hover:cursor-pointer transition-colors duration-300'>
                            <a href="/item" className="animate-fade-in">- items</a>
                        </span>
                        <span className='text-5xl text-white hover:bg-white hover:text-black hover:cursor-pointer transition-colors duration-300'>
                            <a href="/maps" className="animate-fade-in">- maps</a>
                        </span>
                        <div className='text-5xl text-white hover:bg-white hover:text-black hover:cursor-pointer transition-colors duration-300'>
                            <span className=' w-full hover:cursor-pointer'>
                                - quests
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

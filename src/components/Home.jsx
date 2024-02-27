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
            <div className="flex-1 h-full">
                <div className={`py-10 px-10 rounded-xl shadow-xl h-full flex justify-center items-center flex-col ${isVisible ? 'animate-fade-in' : ''}`}>
                    <div className="background-video absolute inset-0 z-0">
                        <video autoPlay loop muted className="w-full h-full object-cover">
                            <source src="/videos/background.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-white bg-black relative flex flex-col items-center h-full -ml-20 z-10 w-full -mt-20' style={{
                        background:
                            "linear-gradient(to top right, rgba(125,125,125,.60), rgba(6,13,12,.95))",
                        height: "100%"
                    }}>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <h1 className='text-6xl specifico font-bold ml-8 my-10'> TARKOOLS </h1>
                            <span className='text-5xl specifico hover:bg-white hover:text-black hover:cursor-pointer ml-8 transition-colors duration-300'>
                                META EQUIP
                            </span>
                            <span className='text-5xl specifico hover:bg-white hover:text-black hover:cursor-pointer ml-8 transition-colors duration-300'>
                                ITEMS
                            </span>
                            <span className='text-5xl specifico hover:bg-white hover:text-black hover:cursor-pointer ml-8 transition-colors duration-300'>
                                <a href="/maps" className="animate-fade-in specifico">MAPS</a>
                            </span>
                            <div className='text-5xl specifico hover:bg-white hover:text-black hover:cursor-pointer ml-8 transition-colors duration-300'>
                                <span className=' w-full hover:cursor-pointer'>
                                    QUESTS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}

export default Home;

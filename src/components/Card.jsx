import React, { useState } from 'react';

const Card = ({ name, link_2d, link_3d, link_interactive, imgSrc }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='flex justify-center items-center flex-col my-3 mx-3'>
            <div
                className="relative w-64 h-40 bg-cover bg-center cursor-pointer overflow-hidden mx-3 my-1 rounded-xl  "
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt="Card background"
                        className={`w-full h-full object-cover transition-opacity ${hovered ? 'brightness-75' : 'brightness-100'}`}
                    />
                )}

                <div className="">
                    {hovered && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="space-y-2 text-center">
                                {link_2d && (
                                    <button className="bg-black text-white  font-semibold hover:text-black hover:bg-white mx-2 py-2 px-4 border border-black hover:border-transparent rounded">
                                        <a href={link_2d}>2D map</a>
                                    </button>
                                )}
                                {link_3d && (
                                    <button className="bg-black text-white  font-semibold hover:text-black hover:bg-white mx-2 py-2 px-4 border border-black hover:border-transparent rounded">
                                        <a href={link_2d} >3D map</a>
                                    </button>
                                )}
                                {link_interactive && (
                                    <button className="bg-black text-white  font-semibold hover:text-black hover:bg-white mx-2 py-2 px-4 border border-black hover:border-transparent rounded ">
                                        <a href={link_interactive} >Interactive Map</a>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <span className=' font-semibold'> {name}</span>
        </div>
    );
};

export default Card;

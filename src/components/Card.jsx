import React, { useState } from 'react';

const Card = ({ name, link_2d, link_3d, link_interactive, imgSrc }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='flex justify-center items-center flex-col my-3 mx-3'>
            <div
                className="relative w-64 h-40 bg-cover bg-center cursor-pointer overflow-hidden mx-3 my-1 rounded-xl"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt="Card background"
                        className={`transition-opacity ${hovered ? 'brightness-50' : 'brightness-100'}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                        }}
                    />
                )}

                <div className="">
                    {hovered && (
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-3">
                            <div className="space-x-2 text-center mb-5">
                                {link_2d && (
                                    <button className="bg-black text-white font-semibold hover:text-black hover:bg-white py-2 px-4 border border-black hover:border-transparent rounded mr-3">
                                        <a href={link_2d}>2D map</a>
                                    </button>
                                )}
                                {link_3d && (
                                    <button className="bg-black text-white font-semibold hover:text-black hover:bg-white py-2 px-4 border border-black hover:border-transparent rounded mr-3">
                                        <a href={link_3d}>3D map</a>
                                    </button>
                                )}
                                {link_interactive && (
                                    <button className="bg-black text-white font-semibold hover:text-black hover:bg-white my-2 px-4 border border-black hover:border-transparent rounded mr-3">
                                        <a href={link_interactive}>Interactive Map</a>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-center">
                <span className='font-semibold text-white'>{name}</span>
            </div>
        </div>
    );
};

export default Card;

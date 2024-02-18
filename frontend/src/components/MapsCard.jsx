import React from 'react';


const MapsCard = ({ name, description, link_2d, link_3d, link_interactive, imgSrc }) => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-row w-full gap-10">
            <div className="flex flex-col w-1/2 self-center">
                <h1 className="text-xl font-bold mb-1">
                    {name}
                </h1>

                <span className="mb-8">
                    {description}
                </span>
                <div className='flex space-x-6'>
                    {link_2d && (
                        <button class="bg-transparent hover:bg-black  text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                            <a href={link_2d}>2D map</a>
                        </button>
                    )}
                    {link_3d && (
                        <button class="bg-transparent hover:bg-black  text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                            <a href={link_2d} >3D map</a>
                        </button>
                    )}
                    {link_interactive && (
                        <button class="bg-transparent hover:bg-black  text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                            <a href={link_interactive} >Interactive Map</a>
                        </button>
                    )}
                </div>
            </div>
            <div className=" ml-32 flex justify-center items-center w-1/2">
                <img src={imgSrc} alt="" className='w-full object-cover h-60 rounded-xl' />
            </div>
        </div>
    );
}

export default MapsCard;

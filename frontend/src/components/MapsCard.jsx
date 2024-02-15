import React from 'react';
import Image from './Image'

const Button = ({ href, children }) => {
    return (
        <a href={href} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 w-fit">
            {children}
        </a>
    );
}

const MapsCard = ({ name, id, description, link_2d, link_3d, link_interactive, img }) => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-row w-full gap-10">
            <div className="flex flex-col w-1/2 self-center">
                <h1 className="text-xl font-bold mb-1">
                    {name}
                </h1>
                <h2 className="text-s font-light mb-3">
                    [ID: {id}]
                </h2>
                <span className="mb-8">
                    {description}
                </span>
                {link_2d && (
                    <a href={link_2d} className="text-blue-500 hover:underline">2D map </a>
                )}
                {link_3d && (
                    <a href={link_3d} className="text-blue-500 hover:underline">3D map </a>
                )}
                {link_interactive && (
                    <a href={link_interactive} className="text-blue-500 hover:underline">Interactive Map </a>
                )}
            </div>
            <div className=" ml-32 flex justify-center items-center w-1/2">
                <Image img={img} />
            </div>
        </div>
    );
}

export default MapsCard;

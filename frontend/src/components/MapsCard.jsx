import React from 'react';

const MapsCard = ({ name, id, link_2d, link_3d }) => {
    return (
        <div className="flex flex-row items-center bg-white border-2 p-4 mb-4">
            <div className="flex-grow">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600 text-xs">ID: {id}</p>
            </div>
            <div className="ml-4 pt-1">
                <a href={link_2d} className="text-blue-500 hover:underline">2D map </a> |
                <a href={link_3d} className="text-blue-500 hover:underline ml-2">3D map</a>
            </div>
        </div>
    );
}

export default MapsCard;

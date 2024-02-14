import React from 'react';

// Componente per il pulsante
const Button = ({ href, children }) => {
    return (
        <a href={href} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
            {children}
        </a>
    );
}

const MapsCard = ({ name, id, link_2d, link_3d, link_interactive }) => {
    return (
        <div className="bg-white border-2 rounded-lg p-4 w-full flex flex-row justify-between">
            <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600 text-xs">ID: {id}</p>
            </div>
            <div className="flex flex-row mt-2">
                <div className="inline-flex">
                    {link_2d && (
                        <Button href={link_2d}>2D map</Button>
                    )}
                    {link_3d && (
                        <Button href={link_3d}>3D map</Button>
                    )}
                    {link_interactive && (
                        <Button href={link_interactive}>Interactive map</Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MapsCard;

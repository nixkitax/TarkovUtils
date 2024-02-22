import React from 'react';

const HeroCards = ({ name, description, icon }) => {
    return (
        <div className="bg-white rounded-lg  p-6 mb-4 justify-center items-center mx-14 my-10 px-20">
            <div className="flex items-center justify-center">
                {icon}
                <h2 className="text-lg font-semibold">{name}</h2>
            </div>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
}

export default HeroCards;

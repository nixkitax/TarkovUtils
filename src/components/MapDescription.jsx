import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MAPS } from '../apolloClient';
import { getImageSrc } from '../utils/imageHelper';

const MapDescription = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MAPS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const map = data.maps.find(map => map.id === id);
    if (!map || !map.name) return <div>Map not found or name missing</div>;


    if (!map) return <div>Map not found</div>;

    return (
        <div className="mt-10 rounded-xl shadow-xl mt- flex flex-col backdrop-saturate-200 no-scrollbar"
            style={{
                background: "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
            }}>
            <div className='mt-10 text-white flex flex-col mx-10 justify-between'>
                <div className='flex flex-row'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <h1 className='text-5xl -mt-0'>{map.name}</h1>
                            <h2 className=' text-gray-400'>  [ID: {map.id}] </h2>
                            <div className='mt-10 mr-32'>
                                <h2 className=' text-2xl'>  Description </h2>
                                <span className='pt-10 text-gray-300'>{map.description}</span>
                                <ul>
                                    <li>Wiki: {map.wiki}</li>
                                    <li>Enemies: {map.enemies}</li>
                                    <li>Raid Duration: {map.raidDuration}</li>
                                    <li>Players: {map.players}</li>
                                    <li>Bosses:</li>
                                    <ul>
                                        {map.bosses.map(boss => (
                                            <li key={boss.boss.id}>
                                                Boss Name: {boss.boss.name}<br />
                                                Spawn Chance: {boss.spawnChance}<br />
                                                Spawn Locations: {boss.spawnLocations.map(location => location.name).join(', ')}<br />
                                                {boss.escorts.map(escort => (
                                                    <div key={escort.boss.name}>
                                                        Escort Name: {escort.boss.name}<br />
                                                        {escort.amount.map((amount, index) => ( // Iterating over the array
                                                            <div key={index}>
                                                                Amount: {amount.count}<br />
                                                                Chance: {amount.chance}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </li>
                                        ))}
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-40 w-40 bg-slate-600'>
                        <img src={getImageSrc(`../Images/maps/${map.normalizedName}-img.png`)} alt={map.name} className='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapDescription;

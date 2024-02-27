import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MAPS } from '../apolloClient';
import { getImageSrc } from '../utils/imageHelper';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import mapsData from './json/mapsData.json'
import { Spinner } from "@material-tailwind/react";


const MapDescription = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MAPS);

    if (loading) return <div className='flex justify-center items-center'> <Spinner className="h-16 w-16 text-gray-500" /> </div>;
    if (error) return <div>Error: {error.message}</div>;

    const mapFromQuery = data.maps.find(map => map.id === id);
    const mapFromJSON = mapsData.find(map => map.id === id);
    const map = { ...mapFromQuery, ...mapFromJSON };

    if (!map || !map.name) return <div>Map not found or name missing</div>;



    if (!map) return <div>Map not found</div>;

    return (
        <div className="mt-10 rounded-xl shadow-xl mt- flex flex-col backdrop-saturate-200 no-scrollbar"
            style={{
                background: "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
            }}>
            <div className='flex flex-row text-white ml-10 mt-4 text-xs'>[<a href="/" className='hover:underline mr-1'>Home</a>  <ArrowRightIcon className='w-3 mr-1' /><a href="/Maps" className='hover:underline mr-1'>Maps</a> <ArrowRightIcon className='w-3 mr-1' /> {map.name}]</div>
            <div className='mt-10 text-white flex flex-col mx-10 justify-between'>
                <div className='flex flex-row'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <h1 className='text-5xl -mt-0'>{map.name}</h1>
                            <h2 className=' text-gray-400'>  [ID: {map.id}] </h2>
                            <div className='mt-3'>
                                {map.link_2d && (
                                    <button className="bg-black text-white font-semibold hover:text-black hover:bg-white py-2 px-4 border border-black hover:border-transparent rounded mr-3">
                                        <a href={map.link_2d}>2D map</a>
                                    </button>
                                )}
                                {map.link_3d && (
                                    <button className="bg-black text-white font-semibold hover:text-black hover:bg-white py-2 px-4 border border-black hover:border-transparent rounded mr-3">
                                        <a href={map.link_3d}>3D map</a>
                                    </button>
                                )}
                                {map.link_interactive && (
                                    <button className="bg-black text-white font-semibold hover:text-black hover:bg-white py-2 px-4 border border-black hover:border-transparent rounded mr-3">
                                        <a href={map.link_interactive}>Interactive Map</a>
                                    </button>
                                )}

                            </div>
                            <div className='mt-10 mr-8'>
                                <h2 className='text-2xl font-semibold'>Description</h2>
                                <hr className=" border-white mb-4" />
                                <p className='mt-2 text-white'>{map.description}</p>

                                <div className="mt-6">
                                    <h2 className="text-2xl font-semibold">Enemies</h2>
                                    <hr className=" border-white mb-4" />

                                    <ul className='mt-4'>
                                        {map.enemies.map((enemy, index) => (
                                            <li key={index}>{enemy}</li>
                                        ))}                                        <li><span className='font-semibold'>Raid Duration:</span> {map.raidDuration}</li>
                                        <li><span className='font-semibold'>Players:</span> {map.players}</li>
                                    </ul>
                                </div>
                                <ul>
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
                    <div className='mt-40 '>
                        <table className="border-collapse border border-gray-400">
                            <tr className="border-t border-gray-400">
                                <td className='flex flex-auto items-center justify-center' >
                                    {map.name}
                                </td>
                            </tr>
                            <tr className="border-t border-gray-400">
                                <td colSpan="2">
                                    <img src={getImageSrc(`../Images/maps/${map.normalizedName}-img.png`)} alt={map.name} className=' max-w-96' />
                                    <span className='text-light text-center justify-center flex'>"ciao" </span>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-400">
                                <td>
                                    tupitupi
                                </td>
                            </tr>
                            <tr className="border-t border-gray-400">
                                <td>
                                    tapitapi
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default MapDescription;

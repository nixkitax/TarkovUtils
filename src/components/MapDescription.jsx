import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MAPS } from '../apolloClient';
import { getImageSrc } from '../utils/imageHelper';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import mapsData from './json/mapsData.json'
import Loading from './Loading';

const MapDescription = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MAPS);

    if (loading) return <Loading />
    if (error) return <div>Error: {error.message}</div>;

    const mapFromQuery = data.maps.find(map => map.id === id);
    const mapFromJSON = mapsData.find(map => map.id === id);
    const map = { ...mapFromQuery, ...mapFromJSON };

    if (!map || !map.name) return <div>Map not found or name missing</div>;



    if (!map) return <div>Map not found</div>;

    return (
        <div className="mt-10 rounded-xl shadow-xl mt- flex flex-col backdrop-saturate-200"
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
                            <div className='mt-10 mr-8 mb-32'>
                                <h2 className='text-2xl font-semibold'>Description</h2>
                                <hr className=" border-white mb-4" />
                                <p className='mt-2 text-white'>{map.description}</p>

                                <div className="mt-6">
                                    <h2 className="text-2xl font-semibold">Enemies</h2>
                                    <hr className=" border-white mb-4" />

                                    <ul className='mt-4'>
                                        {map.enemies.map((enemy, index) => (
                                            <li key={index}>{enemy}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative overflow-x-auto shadow-md mt-6 sm:rounded-lg">
                                    <h2 className="text-2xl font-semibold">Boss</h2>
                                    <hr className=" border-white mb-4" />

                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-white uppercase bg-gray-50/40 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Potrait Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Locations
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Escort
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Wiki
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {map.bosses.map((bossSpawn, index) => (
                                                <tr key={index} className={index % 2 === 0 ? "   text-white even:dark:bg-gray-800 border-b dark:border-gray-700" : " text-white border-b"}>
                                                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                        <img src={bossSpawn.boss.imagePortraitLink} className="w-32" alt={bossSpawn.boss.name} />
                                                    </td>
                                                    <td className="px-6 py-4">{bossSpawn.boss.name}</td>
                                                    <td className="px-6 py-4">{bossSpawn.spawnLocations.map(location => location.name).join(', ')}</td>
                                                    <td className="px-6 py-4">{bossSpawn.escorts.map(escort => escort.boss.name).join(', ')}</td>
                                                    <td className="px-6 py-4">
                                                        <a href={bossSpawn.boss.wikiLink} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Wiki</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='mt-40'>
                        <table className="border border-gray-400">
                            <tr className="border-t border-gray-400">
                                <td className='flex flex-auto items-center justify-center' >
                                    {map.name}
                                </td>
                            </tr>
                            <tr className="border-t border-gray-400">
                                <td colSpan="2">
                                    <img src={getImageSrc(`../Images/maps/${map.normalizedName}-img.png`)} alt={map.name} className='max-w-96 mx-2 my-2' />
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

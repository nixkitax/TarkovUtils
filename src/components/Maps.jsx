import React, { useEffect, useState } from 'react';
import Card from './Card';
import mapsData from './json/mapsData.json';
import { Link } from 'react-router-dom';
import { getImageSrc } from '../utils/imageHelper';
import { ArrowUpRightIcon, MapIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Maps = () => {
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const body = document.body;
            const html = document.documentElement;
            const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowHeight = window.innerHeight;
            setIsOverflowing(documentHeight > windowHeight);
        };

        handleResize(); // Controlla la dimensione dello schermo al caricamento della pagina

        window.addEventListener('resize', handleResize); // Aggiunge un event listener per controllare le modifiche della dimensione dello schermo

        return () => {
            window.removeEventListener('resize', handleResize); // Rimuove l'event listener quando il componente viene smontato
        };
    }, []);

    return (
        <div className="mt-10 px-10 rounded-xl shadow-xl  flex-col backdrop-saturate-200 no-scrollbar lg:mb-32"
            style={{
                background:
                    "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
                overflowY: isOverflowing ? 'scroll' : 'hidden' // Abilita lo scrolling verticale solo se c'è overflow
            }}>
            <div className='flex flex-row text-white ml-3 mt-4 text-xs'>[<a href="/" className='hover:underline mr-1'>Home</a><ArrowRightIcon className='w-3 mr-1' /><a href="/Maps" className='hover:underline ml-0'>Maps</a>]</div>
            <div className='mt-10 text-white justify-center items-center flex flex-col'>
                <h1 className='text-5xl'>Tarkov Tools</h1>
                <div className="flex items-center py-4 rounded-lg bg-customBlue relative overflow-hidden mt-10">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-grayweird"></div>
                    <MapIcon className=' w-24 ml-10' />
                    <div className=' ml-8'>
                        <h2 className="text-xl font-semibold mb-2">Maps Section</h2>
                        <p className="mr-10">
                            The map of Escape from Tarkov consists of 11 different locations of which 10 have been released so far. While all maps are to be connected eventually, for now they are all separated from each other.
                        </p>
                    </div>
                </div>
                <span className='text-4xl mt-16'>MAPS</span>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-4">
                {mapsData.map(map => (
                    <div key={map.name}>
                        <Card
                            name={
                                <div className='flex flex-row items-center hover:underline'>
                                    <Link to={`/map/${map.id}`} className=''>
                                        {map.name}
                                    </Link>
                                    <ArrowUpRightIcon className='w-4 h-4 ml-1 text-white' />
                                </div>
                            }
                            link_2d={map.link_2d}
                            link_3d={map.link_3d}
                            link_interactive={map.link_interactive}
                            imgSrc={getImageSrc(map.imgSrc)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Maps;

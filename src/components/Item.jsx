import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Item = () => {
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
        <div className="mt-10 px-10 rounded-xl shadow-xl  flex-col backdrop-saturate-200 no-scrollbar"
            style={{
                background:
                    "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
                overflowY: isOverflowing ? 'scroll' : 'hidden' // Abilita lo scrolling verticale solo se c'è overflow
            }}>
            <div className='flex flex-row text-white ml-3 mt-4 text-xs'>[<a href="/" className='hover:underline mr-1'>Home</a><ArrowRightIcon className='w-3 mr-1' /><a href="/Maps" className='hover:underline ml-0'>Maps</a>]</div>
            <div className='mt-10 text-white  flex flex-col'>
                <h1 className='text-5xl font-extrabold'>tarkools</h1>
                <span className='text-4xl mt-16'>ITEMS</span>
            </div>

        </div>
    )
}

export default Item
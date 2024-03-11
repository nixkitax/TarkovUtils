import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TASKS } from '../apolloClient';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import Loading from './Loading';

const Task = () => {
    const { loading, error, data } = useQuery(GET_TASKS);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-10 px-10 py-10 rounded-xl shadow-xl  flex-col backdrop-saturate-200 no-scrollbar"
            style={{
                background:
                    "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
            }}>
            <div className='flex flex-row text-white ml-3 text-xs'>[<a href="/" className='hover:underline mr-1'>Home</a><ArrowRightIcon className='w-3 mr-1' /><a href="/Maps" className='hover:underline ml-0'>Maps</a>]</div>
            <div className='mt-10 text-white  flex flex-col'>
                <span className='text-4xl'> TASKS </span>

                <table className="mt-4 border-2">
                    <thead>
                        <tr className="border-2">
                            <th className="border-2">Name</th>
                            <th className="border-2">Min Player Level</th>
                            <th className="border-2">Objectives</th>
                            <th className="border-2">Map</th>
                            <th className="border-2">Start Rewards</th>
                        </tr>
                    </thead>
                    <tbody className='border-2 '>
                        {data.tasks.map((task, index) => (
                            <tr key={index} className="border-2">
                                <td className='pl-10 border-2'><a href={task.wikiLink} className='hover:underline my-10'>{task.name}</a></td>
                                <td className=' border-2'>{task.minPlayerLevel}</td>
                                <td className="border-2">
                                    <ul>
                                        <span className='my-4'>
                                            {task.objectives.map((objective, index) => (
                                                <li key={index}>{objective.description}</li>
                                            ))}
                                        </span>
                                    </ul>
                                </td>
                                <td className="px-4 border-2">{task.map ? task.map.name : 'N/A'}</td>
                                <td className="border-2">
                                    <ul>
                                        <span className='flex justify-center items-center'>
                                            {task.startRewards.items.map((item, index) => (
                                                <li key={index}>{item.item ? item.item.name : 'N/A'} - Count: {item.count}</li>
                                            ))}
                                        </span>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Task;

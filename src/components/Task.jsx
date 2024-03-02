import React from 'react';
import { useQuery } from '@apollo/client';
import { Spinner } from "@material-tailwind/react";
import { GET_TASKS } from '../apolloClient';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


const Task = () => {
    const { loading, error, data } = useQuery(GET_TASKS);

    if (loading) return <div className='flex justify-center items-center'> <Spinner className="h-16 w-16 text-gray-500 justify-center items-center" /> </div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-10 px-10 rounded-xl shadow-xl  flex-col backdrop-saturate-200 no-scrollbar"
            style={{
                background:
                    "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
            }}>
            <div className='flex flex-row text-white ml-3 mt-4 text-xs'>[<a href="/" className='hover:underline mr-1'>Home</a><ArrowRightIcon className='w-3 mr-1' /><a href="/Maps" className='hover:underline ml-0'>Maps</a>]</div>
            <div className='mt-10 text-white  flex flex-col'>
                <span className='text-4xl mt-16'>ITEMS</span>
                <table className="mt-4 border-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Wiki Link</th>
                            <th>Objectives</th>
                            <th>Min Player Level</th>
                            <th>Map</th>
                            <th>Start Rewards</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.name}</td>
                                <td><a href={task.wikiLink}>{task.wikiLink}</a></td>
                                <td>
                                    <ul>
                                        {task.objectives.map((objective, index) => (
                                            <li key={index}>{objective.description} - Map: {objective.maps ? objective.maps.map(map => map.name).join(', ') : 'N/A'}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{task.minPlayerLevel}</td>
                                <td>{task.map ? task.map.name : 'N/A'}</td>
                                <td>
                                    <ul>
                                        {task.startRewards.items.map((item, index) => (
                                            <li key={index}>{item.item ? item.item.name : 'N/A'} - Count: {item.count}</li>
                                        ))}
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

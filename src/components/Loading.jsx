import React from 'react'
import { Spinner } from "@material-tailwind/react";

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-full '><Spinner /></div>
    )
}

export default Loading
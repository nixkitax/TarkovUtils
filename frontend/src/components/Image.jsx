import React from 'react'

const Image = ({ img }) => {
    return (
        <img src={img} className='w-full object-cover h-60 rounded-xl' />

    )
}

export default Image
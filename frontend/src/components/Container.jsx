import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='w-full max-w-6xl m-auto p-6'>
            {children}
        </div>
    )
}

export default Container
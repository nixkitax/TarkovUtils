import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='w-full h-screen  m-auto p-6'>
            {children}
        </div>
    )
}

export default Container
import React from 'react'
import LogoSrc from "../Images/logo.png"

const Logo = () => {
    return (
        <div >
            <img src={LogoSrc} className=' w-24' alt="Logo" />
        </div>
    )
}

export default Logo
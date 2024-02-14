import React, { useEffect, useState } from 'react';
import TypeWriter from 'typewriter-effect';

const HomePage = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Add a delay before showing the text
        const timer = setTimeout(() => {
            setShowText(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex text-6xl justify-center items-center  ">
            {showText && (
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                'Welcome to Tarkov Tools, a site with useful tools for your raids! :)',
                            )
                            .start();
                    }}
                    options={{
                        delay: 75,
                    }}
                />

            )}
        </div>
    );
}

export default HomePage;

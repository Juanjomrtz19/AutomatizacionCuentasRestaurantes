import React, { useState } from 'react';

const Bars = ({color, height}) => {
    const [style, setStyle] = useState({
        styleNav: 'h-0',
        showNav: false,
    });

    function styleHandle() {
        const { showNav } = style;

        showNav ? setStyle({
            styleNav: 'h-0',
            showNav: false,
        }) : setStyle({
            styleNav: 'h-full',
            showNav: true,
        });
    }

    return(
        <>  
            <i className={`fa-solid fa-bars ${color} cursor-pointer`} onClick={styleHandle}></i>
            <div className={`fixed left-0 w-full ${style.styleNav} bg-black transition-all duration-200 overflow-hidden`} style={{ top: `${height}px` }}>
                <nav className='flex w-full h-full p-4 text-white'>
                    <ul>
                        <li className='pb-4 text-2xl'>HOME</li>
                        <li className='text-2xl'>ABOUT</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Bars;

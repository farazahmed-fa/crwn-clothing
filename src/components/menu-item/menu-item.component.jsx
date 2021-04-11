import React from 'react';

import './menu-item.style.scss'



const MenuItem = ({ title, imageurl, size }) => (
    <div className={`${size} menu-item`} >
        <div className='background-image' style={{
            backgroundImage: `url(${imageurl})`
        }}></div>
        <div className='content'>
            <h2 className='title'>{title.toUpperCase() }</h2>
            <span className='text'>SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;
import React from 'react';
import Image from '../gorillaz.jpg'

const Header = () => {
    return(
        <div className="header">
            <h1>GORILLAZ</h1>
            <img className="img" src={Image} alt=""></img>
        </div>
    )
};

export default Header
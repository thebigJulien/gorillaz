import React from 'react';

const Albums = (props) => {

    let {image, name} = props.data;

    return(
        <div className="album">
            <img src={image[3]['#text']} alt=""></img>
            <p> {name} </p>
        </div>
    )
};

export default Albums
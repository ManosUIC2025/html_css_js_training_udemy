import React from 'react';

function Card(props) {

    return (
        <div>
            <img src={props.source} />
            <br />
            <p>{props.title}</p>
            <p>{props.author}</p>
        </div>
    )
}

export default Card;
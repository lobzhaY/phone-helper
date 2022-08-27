import React from "react";
import './reasons-info-item.css';

function ReasonsInfoItemSecond(props) {
    return (
        <div className={props.classDiv}>
            <p>{props.text}</p>
            <img src={props.imgSrc} alt="" />
        </div>
    );
}

export default ReasonsInfoItemSecond;
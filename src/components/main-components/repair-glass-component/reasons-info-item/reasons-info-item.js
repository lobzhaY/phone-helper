import React from "react";
import './reasons-info-item.css';

function ReasonsInfoItem(props) {
    return (
        <div className={props.classDiv}>
            <img src={props.imgSrc} alt="" />
            <p>{props.text}</p>
        </div>
    );
}

export default ReasonsInfoItem;
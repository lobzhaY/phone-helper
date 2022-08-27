import React from "react";
import './repair-item-color.css';

function ItemRepairColor(props) {
    return (
        <div class={props.classColor}>
            <div class={props.classText}>{props.text}</div>
        </div>
    );
}

export default ItemRepairColor;
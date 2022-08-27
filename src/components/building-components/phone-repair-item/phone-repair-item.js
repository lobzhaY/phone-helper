import React from "react";
import './phone-repair-item.css';

function PhoneRepairItem(props) {
    return (
        <div class="phone-repair-item">
            <img src={props.imgSrc} alt="" />
            <h3>{props.itemTitle}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default PhoneRepairItem;
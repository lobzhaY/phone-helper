import React from "react";

function LaptopRepairItemOdd(props) {
    return (
        <div class="tablet-repair-info-item-odd">
            <div class="tablet-repair-info-item-text">
                <h3>{props.itemTitle}</h3>
                <p>{props.text}</p>
            </div>
            <img src={props.vector} alt="arrow" />
            <div class="tablet-repair-info-item-img">
                <div class="tablet-repair-info-item-img-border">
                    <img src={props.imgSrc} alt="" />
                </div>
            </div>
            <img src={props.numSrc} class="tablet-repair-info-item-num" />
        </div>
    );
}

export default LaptopRepairItemOdd;
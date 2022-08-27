import React from "react";

function LaptopRepairItemEven(props) {
    return (
        <div class="tablet-repair-info-item-even">
            <img src={props.numSrc} class="tablet-repair-info-item-num" />
            <div class="tablet-repair-info-item-img">
                <div class="tablet-repair-info-item-img-border">
                    <img src={props.imgSrc} alt="" />
                </div>
            </div>
            <img src={props.vector} alt="arrow" />
            <div class="tablet-repair-info-item-text">
                <h3>{props.itemTitle}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default LaptopRepairItemEven;
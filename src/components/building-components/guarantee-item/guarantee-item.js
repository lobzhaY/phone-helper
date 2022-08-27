import React from "react";

function GuaranteeItem(props) {
    return (
        <div class="guarantee-info-item">
            <div class="guarantee-img-border">
                <img src={props.imgSrc} alt="" class="guarantee-info-image" />
            </div>
            {props.text}
        </div>
    );
}

export default GuaranteeItem;
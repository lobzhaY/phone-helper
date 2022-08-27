import React from "react";

function AboutUsItemText(props) {
    return (
        <div class={props.classNameItem}>
            <div class={props.classNameText}>
               {props.text}
            </div>
            <div class={props.classNameImg}>
                <img src={props.imgSrc} alt="" />
            </div>
        </div>
    );
}

export default AboutUsItemText;
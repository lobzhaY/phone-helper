import React from "react";

function FirstHelpItem(props) {
    return (
        <div class={props.classNameItem}>
            <div class="about-first-items">
                <div class="first-item">{props.itemText1}</div>
                <div class="first-item">{props.itemText2}</div>
                <div class="first-item">{props.itemText3}</div>
                <div class="first-item">{props.itemText4}</div>
                <div class="first-item">{props.itemText5}</div>
            </div>
            <div class="first-item-vector">
                <img src={props.imgSrc} alt="" />
                <img src={props.imgSrc} alt="" />
                <img src={props.imgSrc} alt="" />
            </div>
            <div class="first-text">{props.text}</div>
        </div>

    );
}

export default FirstHelpItem;
import React from "react";
import './first-triangle.css';

function FirstTriangle(props) {
    return (
        <div class="first-tirangle-color">
            <div class="first-tirangle-text">
                <div class="first-tirangle-container-text">
                    <img src={props.imgSrc} alt="" class="first-tirangle-image" />
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default FirstTriangle;
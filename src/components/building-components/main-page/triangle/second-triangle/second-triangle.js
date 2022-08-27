import React from "react";
import "./second-triangle.css";

function SecondTriangle(props) {
    return (
        <div class="secong-tirangle">
            <div class="second-tirangle-color">
                <div class="first-tirangle-container-text">
                    <img src={props.imgSrc} alt="" class="first-tirangle-image" />
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default SecondTriangle;
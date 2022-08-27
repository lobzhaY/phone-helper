import React from "react";

function FirstHelpItemTitle(props) {
    return (
        <div>
            <img src={props.imgHorizon} alt="Vector" class="horizon-vector-os" />
            <div class={props.classVector}>
                <img src={props.imgText} alt="Left vector" class="text-vector" />
                <h3 class="about-first-titel">{props.text}</h3>
            </div>
        </div>
    );
}

export default FirstHelpItemTitle;
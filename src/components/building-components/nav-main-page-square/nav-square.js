import React from "react";
import './nav-square.css'

function NavSquare(props) {
    return(
        <div className="main-page-slider-sqare">
        <div className="square-border">
            <img src={props.imgSrc} alt="" />
            <p>{props.text}</p>
        </div>
    </div>
    );
}

export default NavSquare;
import React from "react";
import './model-sqare.css';

function ModelSqare(props) {
    return(
        <div className={props.classModelSquare}>
        <li className="square-li">
            <div class="laptop-repair-model-title"><p className="square-title">{props.name}</p></div>
        </li>
        </div>
    );
}

export default ModelSqare;
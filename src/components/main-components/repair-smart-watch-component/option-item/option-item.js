import React from "react";
import './option-item.css';

function OptionItemSmartWatch(props) {
    return (
        <div className={props.classItem}>
            <div className="smart-watch-glass">{props.text}</div>
        </div>
    );
}

export default OptionItemSmartWatch;
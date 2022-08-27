import React from "react";
import './repair-item.css';

function ItemRepair(props) {
    return (
        <div class={props.classItem}>
            <div class="laptop-repair-info-item-main-polygon">
                <div class="laptop-repair-info-item-main-polygon-text"><span class="laptop-repair-text-span">{props.textSpan}</span> {props.text1}</div>
            </div>
        </div>
    );
}

export default ItemRepair;
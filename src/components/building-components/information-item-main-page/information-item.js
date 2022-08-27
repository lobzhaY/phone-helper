import React from "react";
import './information-item.css';

function InformationItemMainPage(props) {
    return (
        <div class="info-square">
            <div class="info-square-text">
                <div class="info-square-text-container">
                    <img class="info-square-num" src={props.imgNum} alt="" />
                    <img class="info-square-img" src={props.imgIcon} alt="" />
                    <img class="info-square-vector" src={props.imgVector} alt="" />
                    <p>{props.text}</p>
                    {props.elem}
                </div>
            </div>
        </div>
    );
}

export default InformationItemMainPage;
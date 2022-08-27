import React, { useState, useEffect } from 'react';
import './header-item.css';

function HeaderInfoItem(props) {
    return (
        <div class="header-info-contacts-item">
            <div class="header-info-contacts-img">
                <img src={props.imgSrc} alt="" />
            </div>
            <div class="header-info-contacts-text">{props.text}</div>
        </div>
    )
}

export default HeaderInfoItem;
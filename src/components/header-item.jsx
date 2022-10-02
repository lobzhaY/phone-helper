import React, { useState, useEffect } from 'react';

function HeaderInfoItem(props) {
    return (
        <div className="header-info-contacts-item">
            <div className="header-info-contacts-img">
                <img src={props.imgSrc} alt="" />
            </div>
            <div className="header-info-contacts-text"><a href={props.info}>{props.text}</a></div>
        </div>
    )
}

export default HeaderInfoItem;
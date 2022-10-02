import React from "react";
import '../scss/components/order-button.css';
import { useState } from 'react';

function RepairOrderButton(props) {
    const [modalActive, setModalActive] = useState(true);
    let handleClick = () => {
        setModalActive(true);
        props.handleClickOrder(modalActive)
    }
    return (
        <div className={props.classProps}>
            <button className="orderButtonStyle" onClick={() => handleClick()}>Заказ ремонта</button>
        </div>
    );
}

export default RepairOrderButton;
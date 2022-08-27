import React from 'react';
import './repair-order-component.css';

function RepairOrderButton(props) {
    let repairOrderStyle = {
        width: props.buttonWidth,
        height: props.buttonHeight,
        background: '#FFB400',
        borderRadius: '50px',
        border: 'none',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '30px',
        lineHeight: '44px',
        textAlign: 'center',
        color: '#434343',
        marginBottom: '51px'
}
return (
    <div>
        <button style={repairOrderStyle}>Заказ ремонта</button>
    </div>
);
}
export default RepairOrderButton;
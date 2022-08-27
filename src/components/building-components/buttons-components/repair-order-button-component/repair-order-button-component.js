import React from "react";

function RepairOrderButton() {
    const buttonStyle = {
        width: '508px',
        height: '67px',
        background: '#FFB400',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '30px',
        border: 'none',
        fontFamily: "'Oswald', sans-serif",
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '25px',
        lineHeight: '60px',
        color: '#434343'
    }
    return (
        <button type="button" style={buttonStyle}>Заказ ремонта</button>
    );
}

export default RepairOrderButton;
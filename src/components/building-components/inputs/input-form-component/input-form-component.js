import React from "react";

function InputFormField(props) {
    const inputStyle = {
        width: '517px',
        height: '67px',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '30px',
        border: 'none',
        marginBottom: '16px',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '25px',
        lineHeight: '60px',
        color: 'rgba(67, 67, 67, 0.5)',
        paddingLeft: '86px',
        background: `url(${props.inputUrl}) no-repeat center left 34px`
}
return (
    <input style={inputStyle} type="text" placeholder={props.inputPlaceholder} class="modal-window-order-name" />
);
}

export default InputFormField;
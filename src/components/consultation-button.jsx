import React from 'react';
import '../scss/components/consultation-button.css';
import { useState } from 'react';

function ConsultationButton(props) {
    const [modalActive, setModalActive] = useState(true);
    let handleClick = () => {
        setModalActive(true);
        props.handleClickButton(modalActive)
    }
return (
    <div className={props.classProps}>
        <button className='consultationButtonStyle' onClick={() => handleClick()}>Консультация мастера</button>
    </div>
); 
}
export default ConsultationButton;
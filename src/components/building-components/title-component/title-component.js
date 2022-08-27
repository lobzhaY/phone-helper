import React, { useState, useEffect } from 'react';
import './title-component.css';

function Title(props) {
    const [width, setWidth] = useState(0);
    const [mbottom, setMBottom] = useState(0);
    useEffect(() => {
        setWidth(props.hrWidth + 'px')
        setMBottom(props.mBottom + 'px')
        let hr = document.querySelector('.phone-repair-brand-titel-hr');
        hr.style.width = width;
        hr.style.marginBottom = mbottom;
        console.log(hr.style)
    })    
    return (
        <div className={props.classTitle}>
            <h2 className='title'>{props.name}</h2>
            <hr className='phone-repair-brand-titel-hr'/>
            <p className='paragraph'>{props.text1}</p>
            <p className='paragraph'>{props.text2}</p>
        </div>
    );
}
export default Title;
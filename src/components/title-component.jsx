import React, { useState, useEffect } from 'react';


function Title(props) {  
    return (
        <div className={props.classTitle}>
            <h2>{props.name}</h2>
            <hr />
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    );
}
export default Title;
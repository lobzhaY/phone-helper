import React from 'react';
import './items-odd-component.css';

function ItemsOddBrandRepair(props) {
    return (
        <div className={props.classNameOdd}>
            <p>Цена ремонта - ХХ</p>
            <div className="phone-repair-brand-info-items-vector-odd">
                <img src={props.imgVector} alt="Vector" />
            </div>
            <div className="phone-repair-brand-info-items-odd-container">
                <img src={props.image} alt="" />
                <h6>{props.text}</h6>
            </div>
        </div>
    );
}
export default ItemsOddBrandRepair
import React from 'react';
import './items-even-component.css';

function ItemsEvenBrandRepair(props) {
    return (
        <div className={props.classNameEven}>
            <div className="phone-repair-brand-info-items-even-container">
                <h6>{props.text}</h6>
                <img src={props.image} alt="" />
            </div>
            <div className="phone-repair-brand-info-items-vector-even">
                <img src={props.imgVector} alt="" />
            </div>
            <p>Цена ремонта - ХХ</p>
        </div>
    );
}
export default ItemsEvenBrandRepair;
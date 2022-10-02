import React from "react";

function ItemsEvenBrand(props) {
    return (
        <div className={props.classNameEven}>
                    <div className="phone-repair-brand-info-items-even-container">
                        <h6>{props.text}</h6>
                        <img src={props.imgIcon} alt="" />
                    </div>
                    <div className="phone-repair-brand-info-items-vector-even">
                        <img src={props.imgVector} alt="" />
                    </div>
                    <p>Цена ремонта - ХХ</p>
                </div>
    );
}

export default ItemsEvenBrand;
import React from 'react';
import './other-types-of-brand-repair.css';
import vectoranother from '../brand-phone-repair-component/img/vectoranother.png';

function OtherTypesOfBrandRepair() {
    return (
<div className="phone-repair-brand-info-another">
                <div className="phone-repair-brand-info-another-titel">
                    <h6>Другие виды работ</h6>
                </div>
                <div className="phone-repair-brand-info-another-img">
                    <img src={vectoranother} alt="Small-vector" />
                </div>
            </div>
    );
}
export default OtherTypesOfBrandRepair;
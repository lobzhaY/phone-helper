import React from 'react';
import './brand-notebook-repair-component.css';
import '../../index.css';
import Title from '../title-component/title-component';
import ConsultationButton from '../buttons-components/consultation-component/consultation-component.js';
import RepairOrderButton from '../buttons-components/repair-order-component/repair-order-component';
import OtherTypesOfBrandRepair from '../other-types-of-brand-repair/other-types-of-brand-repair';
import ItemsOddBrandRepair from '../brand-phone-repair-component/items/items-odd/items-odd-component';
import ItemsEvenBrandRepair from '../brand-phone-repair-component/items/items-even/items-even-component';

import mainvector from './img/mainVector.png';
import item1 from './img/item1.png';
import item2 from './img/item2.png';
import item3 from './img/item3.png';
import item4 from './img/item4.png';
import item5 from './img/item5.png';
import item6 from './img/item6.png';
import item7 from './img/item7.png';
import item8 from './img/item8.png';
import vectorodd from './img/vectorOdd.png';
import vectoreven from './img/vectorEven.png';

function BrandNotebookRepairComponent() {
    return (
        <div className="container">

            <Title name={'Macbook'} text1={'Ремонтные процедуры, проводимые с ноутбуком.'} hrWidth={259} />


            <div className="laptop-repair-brand-info">
                <div className="laptop-repair-brand-info-main-vector">
                    <img src={mainvector} alt="" />
                </div>

                <ItemsOddBrandRepair image={item1} imgVector={vectorodd} text={'Не включается'} classNameOdd="phone-repair-brand-info-items-odd item1"/>
                <ItemsEvenBrandRepair image={item2} imgVector={vectoreven} text={'Перезагружается'} classNameEven="phone-repair-brand-info-items-even item2"/>
                <ItemsOddBrandRepair image={item3} imgVector={vectorodd} text={'Замена разъема питания'} classNameOdd="phone-repair-brand-info-items-odd item3"/>
                <ItemsEvenBrandRepair image={item4} imgVector={vectoreven} text={'Чистка системы охлаждения'} classNameEven="phone-repair-brand-info-items-even item4"/>
                <ItemsOddBrandRepair image={item5} imgVector={vectorodd} text={'Замена клавиатуры'} classNameOdd="phone-repair-brand-info-items-odd item5"/>
                <ItemsEvenBrandRepair image={item6} imgVector={vectoreven} text={'Замена матрицы'} classNameEven="phone-repair-brand-info-items-even item6"/>
                <ItemsOddBrandRepair image={item7} imgVector={vectorodd} text={'Ремонт после воды'} classNameOdd="phone-repair-brand-info-items-odd item7"/>
                <ItemsEvenBrandRepair image={item8} imgVector={vectoreven} text={'Замена аккумулятора'} classNameEven="phone-repair-brand-info-items-even item8"/>
            </div>
            <OtherTypesOfBrandRepair />
            <div className="laptop-repair-brand-buttons">
                <ConsultationButton />
                <RepairOrderButton />
            </div>

        </div>
    );
}
export default BrandNotebookRepairComponent;
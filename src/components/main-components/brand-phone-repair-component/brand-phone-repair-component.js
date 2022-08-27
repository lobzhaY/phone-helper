import React from 'react';
import './brand-phone-repair-component.css';
import '../../index.css';
import Title from '../title-component/title-component';
import ConsultationButton from '../buttons-components/consultation-component/consultation-component';
import RepairOrderButton from '../buttons-components/repair-order-component/repair-order-component';
import ItemsOddBrandRepair from './items/items-odd/items-odd-component';
import ItemsEvenBrandRepair from './items/items-even/items-even-component';
import OtherTypesOfBrandRepair from '../other-types-of-brand-repair/other-types-of-brand-repair';

import mainvector from './img/mainvector.png';
import item12 from './img/item12.png';
import item3 from './img/item3.png';
import item4 from './img/item4.png';
import item5 from './img/item5.png';
import item6 from './img/item6.png';
import item7 from './img/item7.png';
import item8 from './img/item8.png';
import vectorodd from './img/vectorodd.png';
import vectoreven from './img/vectoreven.png';


function BrandPhoneRepairComponent() {
    return (
        <div className="container">
            <Title name={'iPhone'} text1={'Мы оказываем услуги тысокого высокого качества.'} text2={'И каждый, кто решит заказать ремонт телефона именно у нас, сделает правильный выбор.'} hrWidth={190}/>
            <div className="phone-repair-brand-info">
                <div className="phone-repair-brand-info-main-vector">
                    <img src={mainvector} alt="" />
                </div>
                <ItemsOddBrandRepair image={item12} imgVector={vectorodd} text={'Замена стекла'} classNameOdd="phone-repair-brand-info-items-odd item1"/>
                <ItemsEvenBrandRepair image={item12} imgVector={vectoreven} text={'Замена дисплея'} classNameEven="phone-repair-brand-info-items-even item2"/>
                <ItemsOddBrandRepair image={item3} imgVector={vectorodd} text={'Замена разъёма сим карты'} classNameOdd="phone-repair-brand-info-items-odd item3"/>
                <ItemsEvenBrandRepair image={item4} imgVector={vectoreven} text={'Замена разъёма питания'} classNameEven="phone-repair-brand-info-items-even item4"/>
                <ItemsOddBrandRepair image={item5} imgVector={vectorodd} text={'Замена динамика'} classNameOdd="phone-repair-brand-info-items-odd item5"/>
                <ItemsEvenBrandRepair image={item6} imgVector={vectoreven} text={'Замена аккумулятора'} classNameEven="phone-repair-brand-info-items-even item6"/>
                <ItemsOddBrandRepair image={item7} imgVector={vectorodd} text={'Ремонт после воды'} classNameOdd="phone-repair-brand-info-items-odd item7"/>
                <ItemsEvenBrandRepair image={item8} imgVector={vectoreven} text={'Замена микрофона'} classNameEven="phone-repair-brand-info-items-even item8"/>
            </div>
            <OtherTypesOfBrandRepair />
            <div className="phone-repair-brand-buttons">
                <ConsultationButton />
                <RepairOrderButton />
            </div>
        </div>

    );
}

export default BrandPhoneRepairComponent;
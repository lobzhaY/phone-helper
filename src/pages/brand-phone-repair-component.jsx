import React from 'react';
import '../scss/pages/brand-phone.css';
import { Title, OtherBrandRepair, RepairOrderButton, ConsultationButton, ItemsEvenBrand, ItemsOddBrand, Modal, ModalOrderComponent, ModalConsultationComponent  } from '../components/index';
import { vectorBrandOdd, vectorBrandEven, icon12BrandPhone, icon3BrandPhone, icon4BrandPhone, icon5BrandPhone, icon6BrandPhone, icon7BrandPhone, icon8BrandPhone } from './images';
import { useState } from 'react';

function BrandPhoneRepairComponent() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveOrder, setModalActiveOrder] = useState(false);
   let handleClickButton = (active) => {
        setModalActive(active);
    }
    let handleClickOrder = (active) => {
        setModalActiveOrder(active);
    }
    return (
        <div className="container">
            <Title classTitle={'phone-repair-brand-title'} name={'iPhone'} text1={'Мы оказываем услуги тысокого высокого качества.'} text2={'И каждый, кто решит заказать ремонт телефона именно у нас, сделает правильный выбор.'} />
            <div className="phone-repair-brand-info">
                <div className="phone-repair-brand-info-main-vector"></div>
                <ItemsOddBrand imgIcon={icon12BrandPhone} imgVector={vectorBrandOdd} text={'Замена стекла'} classNameOdd="phone-repair-brand-info-items-odd item1"/>
                <ItemsEvenBrand imgIcon={icon12BrandPhone} imgVector={vectorBrandEven} text={'Замена дисплея'} classNameEven="phone-repair-brand-info-items-even item2"/>
                <ItemsOddBrand imgIcon={icon3BrandPhone} imgVector={vectorBrandOdd} text={'Замена разъёма сим карты'} classNameOdd="phone-repair-brand-info-items-odd item3"/>
                <ItemsEvenBrand imgIcon={icon4BrandPhone} imgVector={vectorBrandEven} text={'Замена разъёма питания'} classNameEven="phone-repair-brand-info-items-even item4"/>
                <ItemsOddBrand imgIcon={icon5BrandPhone} imgVector={vectorBrandOdd} text={'Замена динамика'} classNameOdd="phone-repair-brand-info-items-odd item5"/>
                <ItemsEvenBrand imgIcon={icon6BrandPhone} imgVector={vectorBrandEven} text={'Замена аккумулятора'} classNameEven="phone-repair-brand-info-items-even item6"/>
                <ItemsOddBrand imgIcon={icon7BrandPhone} imgVector={vectorBrandOdd} text={'Ремонт после воды'} classNameOdd="phone-repair-brand-info-items-odd item7"/>
                <ItemsEvenBrand imgIcon={icon8BrandPhone} imgVector={vectorBrandEven} text={'Замена микрофона'} classNameEven="phone-repair-brand-info-items-even item8"/>
            </div>
            <OtherBrandRepair />
            <div className="phone-repair-brand-buttons"> 
                <Modal active={modalActive} setActive={setModalActive}><ModalConsultationComponent/></Modal>
                <ConsultationButton classProps='phone-repair-brand-buttons-consultation' handleClickButton={handleClickButton}  />
                <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
                <RepairOrderButton classProps='phone-repair-brand-buttons-order' handleClickOrder={handleClickOrder} />
            </div>
        </div>
    );
}

export default BrandPhoneRepairComponent;
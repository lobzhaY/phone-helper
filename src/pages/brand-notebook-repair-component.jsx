import React from 'react';
import '../scss/pages/brand-notebook.css';
import { Title, OtherBrandRepair, RepairOrderButton, ConsultationButton, ItemsEvenBrand, ItemsOddBrand, Modal, ModalOrderComponent, ModalConsultationComponent  } from '../components/index';
import { vectorBrandOdd, vectorBrandEven, icon1BrandNotebook, icon2BrandNotebook, icon3BrandNotebook, icon4BrandNotebook, icon5BrandNotebook, icon6BrandNotebook, icon7BrandNotebook, icon8BrandNotebook } from './images';

import { useState } from 'react';

function BrandNotebookRepairComponent() {
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

            <Title classTitle={'laptop-repair-brand-title'} name={'Macbook'} text1={'Ремонтные процедуры, проводимые с ноутбуком.'} />


            <div className="laptop-repair-brand-info">
                <div className="laptop-repair-brand-info-main-vector"></div>

                <ItemsOddBrand imgIcon={icon1BrandNotebook} imgVector={vectorBrandOdd} text={'Не включается'} classNameOdd="phone-repair-brand-info-items-odd item1"/>
                <ItemsEvenBrand imgIcon={icon2BrandNotebook} imgVector={vectorBrandEven} text={'Перезагружается'} classNameEven="phone-repair-brand-info-items-even item2"/>
                <ItemsOddBrand imgIcon={icon3BrandNotebook} imgVector={vectorBrandOdd} text={'Замена разъема питания'} classNameOdd="phone-repair-brand-info-items-odd item3"/>
                <ItemsEvenBrand imgIcon={icon4BrandNotebook} imgVector={vectorBrandEven} text={'Чистка системы охлаждения'} classNameEven="phone-repair-brand-info-items-even item4"/>
                <ItemsOddBrand imgIcon={icon5BrandNotebook} imgVector={vectorBrandOdd} text={'Замена клавиатуры'} classNameOdd="phone-repair-brand-info-items-odd item5"/>
                <ItemsEvenBrand imgIcon={icon6BrandNotebook} imgVector={vectorBrandEven} text={'Замена матрицы'} classNameEven="phone-repair-brand-info-items-even item6"/>
                <ItemsOddBrand imgIcon={icon7BrandNotebook} imgVector={vectorBrandOdd} text={'Ремонт после воды'} classNameOdd="phone-repair-brand-info-items-odd item7"/>
                <ItemsEvenBrand imgIcon={icon8BrandNotebook} imgVector={vectorBrandEven} text={'Замена аккумулятора'} classNameEven="phone-repair-brand-info-items-even item8"/>
            </div>
            <OtherBrandRepair />
            <div className="laptop-repair-brand-buttons">
            <Modal active={modalActive} setActive={setModalActive}><ModalConsultationComponent/></Modal>
                <ConsultationButton classProps='laptop-repair-brand-buttons-consultation' handleClickButton={handleClickButton} />
                <Modal active={modalActiveOrder} setActive={setModalActiveOrder}><ModalOrderComponent/></Modal>
                <RepairOrderButton classProps='laptop-repair-brand-buttons-order' handleClickOrder={handleClickOrder} />
            </div>

        </div>
    );
}
export default BrandNotebookRepairComponent;
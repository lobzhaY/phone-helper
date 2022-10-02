import React from "react";
import '../scss/pages/guarantee.css';

import { security, laptop, microchip, water, navigationSquare, navigationVector, navigationVectorGuarantee, navigationVectorHorizont } from './images';


function GuaranteeComponent() {
    return (
        <div className='container'>
            <div className="guarantee">
                <div className="guarantee-titel">
                    <h2>ГАРАНТИЯ</h2>
                    <div className="guarantee-about">Гарантийный ремонт осуществляется каждый день кроме Субботы и Воскресенья.</div>
                    <div className="guarantee-about-vector">
                        <img src={navigationSquare} alt="Yellow square" className="guarantee-square-vector" />
                        <img src={navigationVectorHorizont} alt="" className="guarantee-about-vector-horizon" />
                    </div>
                </div>


                <div className="guarantee-navigation">
                    <div className="guarantee-navigation-connect">
                        <img src={navigationSquare} alt="Yellow square" className="guarantee-navigation-connect-square-first" />
                        <img src={navigationVector} alt="Small black line" className="guarantee-navigation-connect-horizont-first" />
                    </div>
                    <img src={navigationVectorGuarantee} alt="" className="guarantee-navigation-vertical" />
                    <div className="guarantee-navigation-connect">
                        <img src={navigationSquare} alt="Yellow square" className="guarantee-navigation-connect-square" />
                        <img src={navigationVector} alt="Small black line" className="guarantee-navigation-connect-horizont" />
                    </div>
                    <img src={navigationVectorGuarantee} alt="" className="guarantee-navigation-vertical" />
                    <div className="guarantee-navigation-connect">
                        <img src={navigationSquare} alt="Yellow square" className="guarantee-navigation-connect-square" />
                        <img src={navigationVector} alt="Small black line" className="guarantee-navigation-connect-horizont" />
                    </div>
                    <img src={navigationVectorGuarantee} alt="" className="guarantee-navigation-vertical" />
                    <div className="guarantee-navigation-connect">
                        <img src={navigationSquare} alt="Yellow square" className="guarantee-navigation-connect-square" />
                        <img src={navigationVector} alt="Small black line" className="guarantee-navigation-connect-horizont" />
                    </div>

                </div>

                <div className="guarantee-info">
                    <div className="guarantee-info-item">
                        <div className="guarantee-img-border">
                            <img src={security} alt="Security" className="guarantee-info-image" />
                        </div>
                        <div className="guarantee-info-text">
                            На все выполненные работы в нашем сервисном центре по ремонту сотовых телефонов, смартфонов или iPhone наша организация предоставляет гарантию от 2-х недель.
                        </div>
                    </div>
                    <div className="guarantee-info-item">
                        <div className="guarantee-img-border">
                            <img src={laptop} alt="Laptop" className="guarantee-info-image" />
                        </div>
                        <div className="guarantee-info-text">
                            Замена экранов, сенсоров и стёкол для телефонов гарантия 14 дней.
                            <hr />
                            Дисплеи и Тачскрины со следами падений, трещин, придавливаний, нагревов, сильных царапин, самостоятельного разбора, бесплатной гарантийной замене НЕ ПОДЛЕЖАТ.
                        </div>
                    </div>
                    <div className="guarantee-info-item">
                        <div className="guarantee-img-border">
                            <img src={microchip} alt="Microchip" className="guarantee-info-image" />
                        </div>
                        <div className="guarantee-info-text">
                            Пайка системных разъёмов, перекатка микросхем, восстановление шлейфов, системных коннекторов, наплатных кнопок, восстановление материнских плат 2 недели.
                        </div>
                    </div>
                    <div className="guarantee-info-item">
                        <div className="guarantee-img-border">
                            <img src={water} alt="Water" className="guarantee-info-image" />
                        </div>
                        <div className="guarantee-info-text">
                            На телефоны которые восстановили после воды гарантия не распростроняется.
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default GuaranteeComponent;
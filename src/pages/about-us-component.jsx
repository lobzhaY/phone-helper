import React from "react";
import { Title } from '../components/index';

import '../scss/pages/about-us.css';

import { mainImageAboutUs, mainVectorAboutUs, imageFirstDevAboutUs, imageSecondDevAboutUs, blackVectorAboutUs, yellowVectorAboutUs } from "./images";


const phoneModels = ["Apple", "Samsung", "Xiaomi", "Meizu", "Huawei", "LG", "Asus", "Acer", "Toshiba", "HTC", "BlackBerry"]

function AboutUsComponent() {
    return (
        <div className='container'>
            <div className="about-us-main-image">
                <img src={mainImageAboutUs} alt="" />
            </div>
            <section className="about-us">
                <div className="first-line-about-us">

                    <Title classTitle="about-us-title" name='О Нас' />
                    <div className="first-text-about-us">
                        <div className="about-us-text text-first">
                            Наш сервисный центр осуществляет послегарантийный ремонт различных моделей телефонов, смартфонов, планшетов и ноутбуков следующих производителей:
                        </div>
                        <div className="about-us-main-vector">
                            <img src={mainVectorAboutUs} alt="" />
                        </div>
                    </div>
                </div>
                <div className="second-line-about-us">
                    <div className="first-image-about-us">
                        <img src={imageFirstDevAboutUs} alt="" />
                    </div>
                    <div>
                        <ul className="about-us-models">
                            {phoneModels.map((el, index) =>
                                <li key={index}>{el}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="third-line-about-us">
                    <div className="about-us-text second-text">
                        Меняем стёкла на любых телефонах и планшетах, отдельно от дисплея, <br /> с применением профессионального оборудования по заводской технологии.
                    </div>
                    <img src={blackVectorAboutUs} alt="Black vector" className="vertical-vector-about-us" />
                </div>
                <div className="fourth-line-about-us">
                    <div className="second-image-about-us">
                        <img src={imageSecondDevAboutUs} alt="" />
                    </div>
                    <div className="about-us-text third-text">
                        Проводится предварительная бесплатная <br /> диагностика устройства.
                    </div>
                </div>

                <div className="fifth-line-about-us">
                    <div className="about-us-text fourth-text">
                        Основной перечень выполняемых ремонтных работ вы найдете <br /> в разделе, соответствующем вашей марке мобильного устройства. Если среди указанного списка устройств нет вашей модели <br /> свяжитесь с нами любым удобным для вас способом, <br /> и мы обязательно постараемся вам помочь.
                    </div>
                    <img src={yellowVectorAboutUs} alt="Yelow vector" className="last-vector-about-us"/>
                </div>
            </section>
        </div>
    );
}

export default AboutUsComponent;
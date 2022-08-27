import React from "react";
import './about-us-component.css';
import Title from '../../building-components/title-component/title-component';
import AboutUsItemText from "../../building-components/about-us-item/about-us-item";

import mainImg from './img/about-us-main-image.png';
import vector from './img/main-vector.png';
import verticalVector from './img/vertical-vector.png';
import lastVector from './img/last-vector.png';
import secondImg from './img/img2.png';
import thirdImg from './img/img-1.png';

function AboutUsComponent() {
    return (
        <div className='container'>

            <div class="abou-us-main-image">
                <img src={mainImg} alt="" />
            </div>

            <section class="about-us">

                <div class="first-line-about-us">
                    <Title classTitle="about-us-titel" name='О Нас' hrWidth='224' />

                    <AboutUsItemText classNameItem='first-text-about-us' classNameText='about-us-text text-first'
                        text='Наш сервисный центр осуществляет послегарантийный ремонт различных моделей телефонов, смартфонов, планшетов и ноутбуков следующих производителей:'
                        classNameImg='about-us-main-vector' imgSrc={vector} />

                </div>

                <div class="second-line-about-us">

                    <div class="first-image-about-us">
                        <img src={secondImg} alt="" />
                    </div>

                    <div>
                        <ul class="about-us-models">
                            <li>Apple</li>
                            <li>iPhone</li>
                            <li>Samsung</li>
                            <li>Xiaomi</li>
                            <li>Meizu</li>
                            <li>Huawei</li>
                            <li>LG</li>
                            <li>Asus</li>
                            <li>Acer</li>
                            <li>Toshiba</li>
                            <li>HTC</li>
                            <li>BlackBerry</li>
                        </ul>
                    </div>
                </div>
                <AboutUsItemText classNameItem='third-line-about-us' classNameText='about-us-text second-text'
                    text=' Меняем стёкла на любых телефонах и планшетах, отдельно от дисплея, с применением профессионального оборудования по заводской технологии.'
                    classNameImg='vertical-vector-about-us' imgSrc={verticalVector} />

                <div class="fourth-line-about-us">
                    <div class="second-image-about-us">
                        <img src={thirdImg} alt="" />
                    </div>
                    <div class="about-us-text third-text">
                        Проводится предварительная бесплатная <br /> диагностика устройства.
                    </div>
                </div>

                <AboutUsItemText classNameItem='fifth-line-about-us' classNameText='about-us-text fourth-text'
                    text=' Основной перечень выполняемых ремонтных работ вы найдете в разделе, соответствующем вашей марке мобильного устройства. Если среди указанного списка устройств нет вашей модели <br /> свяжитесь с нами любым удобным для вас способом, и мы обязательно постараемся вам помочь.'
                    classNameImg='last-vector-about-us' imgSrc={lastVector} />

            </section>
        </div>
    );
}

export default AboutUsComponent;
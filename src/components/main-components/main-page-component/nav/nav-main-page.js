import React from "react";
import './nav-main-page.css';
import NavSquare from "../../../building-components/nav-main-page-square/nav-square";
import FirstTriangle from "../../../building-components/main-page/triangle/first-triangle/first-triangle";
import SecondTriangle from "../../../building-components/main-page/triangle/second-triangle/second-triangle";

import phone from '../img/nav-main-page/second-nav/iPhone.png';
import tablet from '../img/nav-main-page/second-nav/windowsTablet.png';
import glass from '../img/nav-main-page/second-nav/brokenPhone.png';
import laptop from '../img/nav-main-page/second-nav/laptop.png';
import whatch from '../img/nav-main-page/second-nav/wearableTechnology.png';

import smartphones from '../img/nav-main-page/slider/smartphones.png';
import systemReport from '../img/nav-main-page/slider/systemReport.png';
import warranty from '../img/nav-main-page/slider/warranty.png';

import vector from '../img/nav-main-page/slider/vector.png';

function NavMainPage() {
    return (
        <div class="nav-container">

            <div class="main-page-slider">

                <div class="main-page-slider-container">

                    <div class="main-page-slider-info">
                        <h2>НОВАЯ ЖИЗНЬ <br /> ДЛЯ ВАШИХ ГАДЖЕТОВ</h2>
                        <p>Ремонт мобильных телефонов, планшетов, ноутбуков, смарт часов</p>
                        <button>Оставить заявку  <img src={vector} alt="" /></button>
                    </div>

                    <div class="main-page-slider-triangle">
                        <div class="first-triangle triangle-top">
                            <FirstTriangle text={'Оригинальные  комплектующие'} imgSrc={smartphones} />
                        </div>
                        <div class="first-triangle bottom-triangle">
                            <FirstTriangle text={'Бесплатная диагностика'} imgSrc={systemReport} />
                        </div>
                        <SecondTriangle text={'Гарантия на все виды ремонта'} imgSrc={warranty}/>
                    </div>
                </div>
            </div>

            <div class="main-page-slider-nav">
                <NavSquare text={'Ремонт телефонов'} imgSrc={phone} />
                <NavSquare text={'Ремонт планшетов'} imgSrc={tablet} />
                <NavSquare text={'Замена стекол'} imgSrc={glass} />
                <NavSquare text={'Ремонт ноутбуков'} imgSrc={laptop} />
                <NavSquare text={'Ремонт смарт часов'} imgSrc={whatch} />
            </div>


        </div>
    );
}

export default NavMainPage;
import React from "react";
import ContactFormOnMainPage from "./contact-form/contact-form-main-page";
import InforMainPage from "./information/infoMainPage";
import NavMainPage from "./nav/nav-main-page";

function MainPageComponent() {
    return(
        <div class="container">
            <NavMainPage />
            <InforMainPage />
            <ContactFormOnMainPage />
        </div>
    );
}

export default MainPageComponent;
import React from "react";

function GuaranteeNavigationConnect(props) {
    return (
        <div class="guarantee-navigation-connect">
            <img src={props.imgSrcSquare} alt="" class="guarantee-navigation-connect-square" />
            <img src={props.imgVector} alt="" class="guarantee-navigation-connect-horizont" />
        </div>
    );
}

export default GuaranteeNavigationConnect;
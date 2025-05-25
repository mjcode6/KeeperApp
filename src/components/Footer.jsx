import React from "react";
import "./Footer.css"

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
        <p className="footer">copyright {currentYear}</p>
    )
}

export default Footer
import React from "react";
import "./Footer.css";
import icons from "../images/icons.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        Подписывайся на нас, увидимся на вершине!
      </div>
      <div className="footer__icons">
        <a href="/">
          <svg className="instaLogo">
            <use xlinkHref={`${icons}#instaLogo`} />
          </svg>
        </a>
        <a href="/">
          <svg className="facebookLogo">
            <use xlinkHref={`${icons}#facebookLogo`} />
          </svg>
        </a>
        <a href="/">
          <svg className="whatsappLogo">
            <use xlinkHref={`${icons}#whatsappLogo`} />
          </svg>
        </a>
        <a href="/">
          <svg className="telegramLogo">
            <use xlinkHref={`${icons}#telegramLogo`} />
          </svg>
        </a>
      </div>
    </div>
  );
}

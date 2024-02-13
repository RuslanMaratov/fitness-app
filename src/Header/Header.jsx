import React from "react";
import logo from "../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <a href="/">
        <img src={logo} alt="header-logo" className="header-logo" />
      </a>
      <div className="header-items">
        <Link className="header-item" to="/workout">
          ТРЕНИРОВКИ
        </Link>
        <a className="header-item" href="/">
          УПРАЖНЕНИЯ
        </a>
        <a className="header-item" href="/">
          ВЫЗОВЫ
        </a>
        <a className="header-item" href="/">
          КАРДИО
        </a>
      </div>
    </header>
  );
}

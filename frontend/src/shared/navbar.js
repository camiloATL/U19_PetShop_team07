import React from "react";

export default function Navbar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li>
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Tiendas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Nosotros</a>
        </li>
      </ul>
    </nav>
  );
}

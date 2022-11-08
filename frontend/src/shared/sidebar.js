import React, { useState } from "react";
import imagen from "../logo.svg";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {

  //Hooks
  const [itemUsuarioOpen, setItemUsuarioOpen] = useState(true)

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 altura">
      <Link to="/" className="brand-link">
        <i className="fa-thin fa-candy"></i>
        <span className="brand-text font-weight-light">Pet Shop</span>
      </Link>
      <div>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={imagen}
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <Link>
                User
              </Link>
            </div>
          </div>
        </div>
        <nav>
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <li className={"nav-item" + (itemUsuarioOpen ? " menu-open" : "") }>
              <div className="nav-link" onClick={ ()=>{
                setItemUsuarioOpen(!itemUsuarioOpen)
              } }> 
                <p>
                  Usuarios
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Listar</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Crear</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

  );
}

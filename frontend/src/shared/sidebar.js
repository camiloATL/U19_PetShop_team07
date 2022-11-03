import React from "react";
import imagen from "../logo.svg";
import logo from "../assets/OmegaPetShopLOGO.png";
import "./sidebar.css"

export default function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 altura">
      <a href="index3.html" className="brand-link">
        <img
          src={logo}
          width={230}
          height={60}
          alt="AdminLTE Logo"
          className="logo1"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light"></span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={imagen}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Camilo Torres
            </a>
          </div>
        </div>
      </div>
      <nav>
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <div>
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Widgets
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </aside>
  );
}

import React, { useState } from "react";
import imagen from "../logo.svg";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { FaUserAstronaut, FaUserPlus, FaUsers } from "react-icons/fa";
import { payload } from "../config/constants";

export default function Sidebar() {
  //Hooks
  const [itemUsuarioOpen, setItemUsuarioOpen] = useState(true);

  //console.log(payload);

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
              <img src={imagen} className="img-circle elevation-2" alt="User" />
            </div>
            <div className="info">
              <Link>{payload.nombre}</Link>
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
            {payload.tipo === "ADMIN" && (
              <li
                className={"nav-item" + (itemUsuarioOpen ? " menu-open" : "")}
              >
                <div
                  className="nav-link"
                  onClick={() => {
                    setItemUsuarioOpen(!itemUsuarioOpen);
                  }}
                >
                  <p>
                    <FaUserAstronaut size={24} className="nav-icon" />
                    Usuario
                    <i className="right fas fa-angle-left" />
                  </p>
                </div>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink
                      to="/admin/usuarios/all"
                      className="nav-link"
                      end="true"
                    >
                      <FaUsers size={24} className="nav-icon" />
                      <p>Listar</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/admin/usuario/new"
                      className="nav-link"
                      end="true"
                    >
                      <FaUserPlus size={24} className="nav-icon" />
                      <p>Crear o Modificar</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
            { (payload.tipo === "VENDEDOR") && <li
                className={"nav-item" + (itemUsuarioOpen ? " menu-open" : "")}
              >
                <div
                  className="nav-link"
                  onClick={() => {
                    setItemUsuarioOpen(!itemUsuarioOpen);
                  }}
                >
                  <p>
                    <FaUserAstronaut size={24} className="nav-icon" />
                    Productos
                    <i className="right fas fa-angle-left" />
                  </p>
                </div>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink
                      to="/admin/productos/all"
                      className="nav-link"
                      end="true"
                    >
                      <FaUsers size={24} className="nav-icon" />
                      <p>Listar</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/admin/productos/new"
                      className="nav-link"
                      end="true"
                    >
                      <FaUserPlus size={24} className="nav-icon" />
                      <p>Crear o Modificar</p>
                    </NavLink>
                  </li>
                </ul>
              </li>}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logoPet from "../assets/OmegaPetShopLOGO.png";
import imagenPet from "../assets/logoPetShop.PNG"
//import Navbar from "../../shared/navbar";
//import Sidebar from "../../shared/sidebar";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-primary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="navbar-brand" to={"/"}>
              <div className="image">
                <img
                  src={logoPet}
                  className="img-elevation-2"
                  alt="User"
                  height={"50px"}
                />
              </div>
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to={"/login"} className="nav-link">
              Iniciar sesión
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to={"/register"} className="nav-link">
              Regístrate
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <br />
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagenPet} className="d-block w-100" alt="Logo PetShop"/>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

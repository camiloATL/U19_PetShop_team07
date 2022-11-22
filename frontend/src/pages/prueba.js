import React from "react";
import "./prueba.css";

export default function Prueba() {


  

  console.log("pruebas");



  return (
    <div className="pruebas">
      <div className="card-body">
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Correo"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-sm-2 col-sm-10">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck2"
              />
              <label className="form-check-label" htmlFor="exampleCheck2">
                Remember me
              </label>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

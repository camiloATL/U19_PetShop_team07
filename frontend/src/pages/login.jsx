import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login( {titulo} ) {

  const navigate = useNavigate();

  async function formulario(event) {

    event.preventDefault(); // Evita que HTML envíe una petición

    const { password, email } = event.target;

    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        correo: email.value,
        password: password.value,
      });
      const {token} = res.data
      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      alert("Credenciales incorrectas guero");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <b>{titulo}</b>PetShop
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Iniciar sesión</p>
            <form onSubmit={formulario}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Contraseña"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recúerdame</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </form>
            <p className="mb-1">
              <a href="#">Olvidé mi contraseña</a>
            </p>
            <p className="mb-0">
              <a href="#" className="text-center">
                ¿No tienes cuenta? Registrarse
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

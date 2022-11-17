import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, Toast } from "../config/constants";

export default function Register() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors
  } = useForm()

  function registrar(data) {

    data.tipo = "VENDEDOR"

    axios
     .post(BASE_URL + "/usuario", data)
     .then((res) => {
       Toast.fire({
         icon: "success",
         title: "Se creo el usuario " + data.nombre,
       })
       navigate("/login")
     })
     .catch((err) => {
       console.error(err)
       Toast.fire({
         icon: "error",
         title: "Hubo un error al crear el usuario",
       })
     })

  }

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-logo">
          <Link to={"/"}>
            <b>Omega</b>PetShop
          </Link>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Registrarse</p>
            <form onSubmit={handleSubmit(registrar)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombres"
                  {...register("nombre")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellidos"
                  {...register("apellido")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cédula"
                  {...register("cedula")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  {...register("correo")}
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
                  className="form-control"
                  placeholder="Contraseña"
                  {...register("password")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repetir la contraseña"
                  {...register("password2", {
                    required: true,
                    validate: (value) => {
                      if (value !== watch("password")) {
                        setError("passwordMatch");
                      } else {
                        clearErrors();
                      }
                    },
                  })}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              {errors.passwordMatch && (
                <span className="text-danger">
                  Las contraseñas no coinciden
                </span>
              )}
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"
                      {...register("terminos")}
                    />
                    <label htmlFor="agreeTerms">Aceptar terminos de uso</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Registrar
                  </button>
                </div>
              </div>
            </form>
            <Link to={"/login"} className="text-center">
              Ya tengo una cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

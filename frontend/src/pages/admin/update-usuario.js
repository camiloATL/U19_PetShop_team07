import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../shared/header";
import { useForm } from "react-hook-form";
import { BASE_URL, Toast } from "../../config/constants";
import { useParams } from "react-router-dom";

export default function UpdateUsuario() {
  //register extrae los datos del formulario
  //formState es un objeto que obtiene los errores
  const params = useParams();

  const [usuario, setUsuario] = useState(null);
  const headers = { Authorization: localStorage.getItem("token") }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (params.id !== "new") {
      axios
        .get(BASE_URL + "/cliente", {
          headers,
          params: { id: params.id },
        })
        .then((res) => {
          setUsuario(res.data);
        })
        .catch(() => {
          Toast.fire({ icon: "error", title: "Hubo un error inesperado" });
        });
    }
    return () => {};
  }, []);

  
    //PETICION PARA CREAR USUARIO
  function submit(data) {
    if (params.id === "new") {
    axios
      .post(BASE_URL + "/cliente", data, {headers})

      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Se creo el usuario " + data.nombre,
        })
      })
      .catch((err) => {
        console.error(err);
        Toast.fire({
          icon: "error",
          title: "Hubo un error al crear el usuario " + data.nombre,
        })
      });
  }else{
    axios
    .put(BASE_URL + "/cliente", data, {headers})
    .then((res) => {
      Toast.fire({
        icon: "success",
        title: "Se modificó el usuario " + data.nombre,
      })
    })
    .catch((err) => {
      console.error(err)
      Toast.fire({
        icon: "error",
        title: "Hubo un error al crear el usuario",
      })
    })
  }
  
 

    //PETICION PARA MODIFICAR USUARIO
    
      }
  return (
    <>
      <Header title="Crear usuario" pathName={"usuario"} path="/" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card card-primary">
                <div>
                  <div className="card-header">
                    <h3 className="card-title">Usuario</h3>
                  </div>
                  <form onSubmit={handleSubmit(submit)}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="nombre">Nombres</label>
                        <input
                          type="text"
                          id="nombre"
                          placeholder="Ejemplo: Camilo Andres"
                          className={
                            "form-control" +
                            (errors.nombre ? " is-invalid" : "")
                          }
                          {...register("nombre", { required: true })}
                          defaultValue={(params.id !== "new" ? usuario?.nombre: "")}
                        />
                        {errors.nombre && (
                          <span className="text-danger">
                            El nombre es obligatorio...
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="apellido">Apellidos</label>
                        <input
                          type="text"
                          id="apellido"
                          className="form-control"
                          placeholder="Ejemplo: Torres Lozano"
                          {...register("apellido", { required: true })}
                          defaultValue={(params.id !== "new" ? usuario?.apellido: "")}
                        />
                        {errors.apellido && (
                          <span className="text-danger">
                            El apellido es obligatorio...
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="correo">Correo</label>
                        <input
                          type="email"
                          className="form-control"
                          id="correo"
                          {...register("correo", { required: true })}
                          placeholder="Ejemplo: camilo@mail.com"
                          defaultValue={(params.id !== "new" ? usuario?.correo: "")}
                        />
                        {errors.correo && (
                          <span className="text-danger">
                            El correo es obligatorio...
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Tipo de documento</label>
                        <select
                          defaultValue={(params.id !== "new" ? usuario?.tipoDoc: "")}
                          className="form-control"
                          {...register("tipoDoc")}
                        >
                          <option value={"CC"}>Cédula de ciudadanía</option>
                          <option value={"CE"}>Cédula de extrangería</option>
                          <option value={"TI"}>Tarjeta de identidad</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cedula">Cedula</label>
                        <input
                          type="number"
                          className="form-control"
                          id="cedula"
                          {...register("cedula", { required: true })}
                          placeholder="Ejemplo: 12345678"
                          defaultValue={(params.id !== "new" ? usuario?.cedula: "")}
                        />
                        {errors.cedula && (
                          <span className="text-danger">
                            La cedula es obligatoria...
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                          type="number"
                          className="form-control"
                          id="telefono"
                          {...register("telefono")}
                          placeholder="Ejemplo: 3161234567"
                          defaultValue={(params.id !== "new" ? usuario?.telefono: "")}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          {...register("password", { required: true })}
                          placeholder="Ejemplo: Cat1235**"
                        />
                        {errors.password && (
                          <span className="text-danger">
                            La contraseña es obligatoria...
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Registrar o Modificar Usuario
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
